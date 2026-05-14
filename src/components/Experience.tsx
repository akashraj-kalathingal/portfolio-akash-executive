"use client";

import { Section, Tag, Reveal } from "./Primitives";
import { experience } from "@/content/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <Section id="work" label="02 / Experience" title="Where I've shipped — and what shipped.">
      <ol className="relative space-y-12 border-l border-[var(--color-border)] pl-8 sm:pl-12">
        {experience.map((role, i) => (
          <RoleCard key={role.company} role={role} index={i} />
        ))}
      </ol>
    </Section>
  );
}

function RoleCard({ role, index }: { role: (typeof experience)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal delay={index * 0.05}>
      <li className="relative">
        {/* dot */}
        <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)] sm:-left-[49px]" />
        <span className="absolute -left-[40px] top-1 h-5 w-5 animate-pulse-slow rounded-full bg-[var(--color-accent)]/20 sm:-left-[52px]" />

        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="text-lg font-semibold text-white">{role.company}</div>
            <div className="text-sm text-[var(--color-fg-muted)]">{role.role}</div>
          </div>
          <div className="font-mono text-xs text-[var(--color-fg-subtle)]">
            {role.start} → {role.end} · {role.location}
          </div>
        </div>

        <p className="mt-3 text-pretty text-[var(--color-fg-muted)]">{role.blurb}</p>

        {/* scale chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {role.scale.map((s) => (
            <div
              key={s.label}
              className="hairline rounded-md bg-[var(--color-bg-elevated)]/50 px-2.5 py-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                {s.label}:
              </span>{" "}
              <span className="text-xs font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* expand */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50 px-3 py-1.5 font-mono text-xs text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-white"
          aria-expanded={open}
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
          {open ? "Hide details" : "Show details"}
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="overflow-hidden"
        >
          <ul className="mt-5 space-y-2 text-sm text-[var(--color-fg-muted)]">
            {role.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {role.stack.map((s) => (
              <Tag key={s} size="sm">
                {s}
              </Tag>
            ))}
          </div>
        </motion.div>
      </li>
    </Reveal>
  );
}
