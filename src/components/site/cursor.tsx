"use client";

import { useEffect, useRef } from "react";

/**
 * Dot tracks the pointer exactly, ring eases behind it. Transform-only, so it
 * never triggers layout. Bails entirely on coarse pointers and when motion is
 * reduced, which is also when the native cursor must stay visible.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    const d = dot.current, r = ring.current;
    if (!d || !r) return;
    const label = r.querySelector<HTMLElement>(".label");
    const root = document.documentElement;
    root.classList.add("has-cursor");

    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, shown = false, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (!shown) { shown = true; rx = mx; ry = my; d.classList.add("on"); r.classList.add("on"); }
    };
    const onLeave = () => { shown = false; d.classList.remove("on"); r.classList.remove("on"); };
    const down = () => r.classList.add("press");
    const up = () => r.classList.remove("press");

    const frame = () => {
      // ponytail: fixed lerp, not frame-rate corrected. Swap for exp(-k*dt) if 120Hz feels twitchy.
      rx += (mx - rx) * 0.17; ry += (my - ry) * 0.17;
      d.style.transform = `translate3d(${mx}px,${my}px,0)`;
      r.style.transform = `translate3d(${rx}px,${ry}px,0)` + (r.classList.contains("press") ? " scale(0.86)" : "");
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const HOT = 'a, button, [role="button"], input[type="submit"], [data-cursor]';
    const over = (e: MouseEvent) => {
      const el = (e.target as Element)?.closest?.(HOT);
      if (!el) return;
      r.classList.add("hot"); d.classList.add("hot");
      if (label) label.textContent = el.getAttribute("data-cursor") || "";
    };
    const out = (e: MouseEvent) => {
      const el = (e.target as Element)?.closest?.(HOT);
      if (!el) return;
      if ((e.relatedTarget as Element)?.closest?.(HOT)) return;
      r.classList.remove("hot"); d.classList.remove("hot");
      if (label) label.textContent = "";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div id="cur-ring" ref={ring} aria-hidden="true"><span className="label" /></div>
      <div id="cur-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
