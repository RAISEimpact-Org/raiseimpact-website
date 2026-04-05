"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

      const sections = ["team", "results", "approach"];
      for (const id of sections) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[var(--max-page)] flex items-center justify-between px-[var(--space-5)] md:px-[var(--space-7)] h-16">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-primary tracking-tight"
        >
          RAISEimpact
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-[var(--space-7)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.875rem] tracking-wide uppercase transition-colors ${
                active === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[0.875rem] font-medium px-5 py-2.5 rounded bg-accent text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-border/50 px-[var(--space-5)] py-[var(--space-5)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[0.9375rem] text-text hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 text-center px-5 py-3 rounded bg-accent text-white text-[0.9375rem] font-medium"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
