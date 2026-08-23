"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Escape closes, and the page must not scroll behind the overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="top" aria-label="Site">
        <div className="wrap nav-row">
          <a className="brand-group" href="#top">
            <span className="brand serif" style={{ fontStyle: "italic" }}>Zain Ul Hassan</span>
            <span className="brand-studio">Dreamers Lab</span>
          </a>
          <nav className="links" aria-label="Primary">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <a className="nav-contact" href="#contact" data-cursor="Let&rsquo;s go">Start a project</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu${open ? " open" : ""}`}
        id="mobile-menu"
        aria-label="Mobile"
        // Keeps the links out of the tab order while hidden.
        inert={!open}
      >
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </>
  );
}
