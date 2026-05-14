"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all ${
          scrolled
            ? "rounded-full border border-[var(--color-border)] bg-black/50 px-5 py-2 backdrop-blur-xl"
            : ""
        }`}
        style={scrolled ? { maxWidth: "min(720px, calc(100% - 32px))" } : undefined}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-white"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)]/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span>akashraj.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3.5 py-1.5 text-xs font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/15"
        >
          Resume
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.nav>
  );
}
