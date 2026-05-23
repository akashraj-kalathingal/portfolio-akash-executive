"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownToLine, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, rotatingTitles, expertise, snapshot } from "@/content/data";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingTitles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-32 sm:pt-40">
      {/* ambient grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50 px-3 py-1 text-xs text-[var(--color-fg-muted)] backdrop-blur"
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)]/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          Open to senior / staff engineering roles
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-6 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* rotating title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 flex flex-wrap items-baseline gap-x-3 text-2xl font-medium tracking-tight text-[var(--color-fg-muted)] sm:text-3xl"
        >
          <span>{profile.title} —</span>
          <span className="relative inline-block min-h-[1.4em] min-w-[14ch] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="inline-block text-[var(--color-accent)]"
              >
                {rotatingTitles[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]"
        >
          {profile.tagline}
        </motion.p>

        {/* expertise pills */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-7 flex flex-wrap gap-2"
        >
          {expertise.map((e) => (
            <li
              key={e}
              className="font-mono rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 px-2.5 py-1 text-xs text-[var(--color-fg-muted)]"
            >
              {e}
            </li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)]/60"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-white/40 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-white/40 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

        {/* snapshot strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4"
        >
          <SnapCell label="Years building" value={snapshot.yearsExperience} />
          <SnapCell label="Data orchestrated" value={snapshot.productionScale} />
          <SnapCell label="Cloud platforms" value={snapshot.cloudPlatforms} />
          <SnapCell label="Core languages" value={snapshot.primaryLanguages} />
        </motion.div>

        {/* scroll hint */}
        <div className="mt-16 flex items-center gap-2 font-mono text-xs text-[var(--color-fg-subtle)]">
          <span>Scroll</span>
          <span className="h-px w-12 bg-[var(--color-border)]" />
          <span>The story below</span>
        </div>
      </div>
    </section>
  );
}

function SnapCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--color-bg)] p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
        {label}
      </div>
      <div className="mt-2 text-base font-medium text-white sm:text-lg">{value}</div>
    </div>
  );
}
