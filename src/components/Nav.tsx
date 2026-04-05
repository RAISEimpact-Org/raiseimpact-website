"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#results", label: "Results" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["approach", "results", "team"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[var(--max-page)] flex items-center justify-between px-[var(--space-4)] py-[var(--space-3)]">
        <a href="#" className="font-heading text-[20px] font-600 text-primary">
          RAISEimpact
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[var(--space-5)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors hover:text-primary ${
                active === link.href.slice(1)
                  ? "text-primary font-medium"
                  : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-[var(--space-4)] py-[10px] rounded-md bg-accent text-white text-[15px] font-medium transition-colors hover:bg-accent/90"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-border px-[var(--space-4)] py-[var(--space-3)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-[var(--space-2)] text-[15px] text-text hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-[var(--space-2)] text-center px-[var(--space-4)] py-[10px] rounded-md bg-accent text-white text-[15px] font-medium"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
