"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll progress bar, header state, back-to-top. */
export function ScrollChrome() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
      setScrolled(y > 40);
      setShowTop(y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.querySelector("header.top")?.classList.toggle("scrolled", scrolled);
  }, [scrolled]);

  const toTop = () => {
    // Honour the motion preference: an explicit behavior:"smooth" overrides
    // the CSS scroll-behavior reset, which the audit caught on the mockup.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });
  };

  return (
    <>
      <div id="progress" ref={bar} aria-hidden="true" />
      <button
        className={`back-to-top${showTop ? " show" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={toTop}
        tabIndex={showTop ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}

/** Highlights the nav link for whichever section you have scrolled past. */
export function ActiveNav() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav.links a[href^="#"]'));
    const items = links
      .map((link) => ({ link, sec: document.getElementById(link.getAttribute("href")!.slice(1)), top: 0 }))
      .filter((it): it is { link: HTMLAnchorElement; sec: HTMLElement; top: number } => Boolean(it.sec));
    if (!items.length) return;

    // Cached: reading a rect per item on every scroll event forces layout.
    const measure = () => {
      items.forEach((it) => (it.top = it.sec.getBoundingClientRect().top + window.scrollY));
      items.sort((a, b) => a.top - b.top);
    };
    const onScroll = () => {
      const pos = window.scrollY + 140;
      let current: (typeof items)[number] | null = null;
      items.forEach((it) => { if (it.top <= pos) current = it; });
      items.forEach((it) => it.link.classList.toggle("active", it === current));
    };
    const refresh = () => { measure(); onScroll(); };

    refresh();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refresh);
    };
  }, []);
  return null;
}

/** Adds .in to [data-reveal] as it enters the viewport. */
export function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return null;
}
