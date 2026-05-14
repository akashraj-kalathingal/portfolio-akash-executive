"use client";

import { Section, Tag, Reveal } from "./Primitives";
import { caseStudies } from "@/content/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="case-studies"
      label="03 / Case Studies"
      title="Three projects, written like engineering."
    >
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* tab rail */}
        <ol className="hairline flex gap-2 overflow-x-auto rounded-2xl bg-[var(--color-bg-elevated)]/40 p-2 lg:flex-col lg:overflow-visible">
          {caseStudies.map((cs, i) => {
            const isActive = active === i;
            return (
              <li key={cs.slug} className="shrink-0 lg:shrink">
                <button
                  onClick={() => setActive(i)}
                  className={`relative w-full rounded-xl px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-[var(--color-bg)] text-white"
                      : "text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="case-active"
                      className="absolute inset-0 -z-10 rounded-xl border border-[var(--color-accent)]/40"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-0.5 text-sm font-medium">{cs.title}</div>
                </button>
              </li>
            );
          })}
        </ol>

        {/* active study */}
        <Reveal key={active}>
          <motion.article
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="hairline rounded-2xl bg-[var(--color-bg-elevated)]/40 p-8 backdrop-blur"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
              {caseStudies[active].subtitle}
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {caseStudies[active].title}
            </h3>
            <p className="mt-4 text-pretty text-[var(--color-fg-muted)]">
              {caseStudies[active].summary}
            </p>

            <DetailBlock label="The problem" body={caseStudies[active].problem} />

            <div className="mt-7">
              <BlockLabel>Approach</BlockLabel>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-fg-muted)]">
                {caseStudies[active].approach.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono mt-0.5 inline-block text-xs text-[var(--color-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <BlockLabel>Impact</BlockLabel>
              <ul className="mt-3 space-y-2 text-sm text-white">
                {caseStudies[active].impact.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 border-t border-[var(--color-border)] pt-5">
              <BlockLabel>Stack</BlockLabel>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {caseStudies[active].stack.map((s) => (
                  <Tag key={s} size="sm">
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </Section>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
      {children}
    </div>
  );
}

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="mt-7 rounded-xl border-l-2 border-[var(--color-accent)]/50 bg-[var(--color-bg)]/40 px-5 py-4">
      <BlockLabel>{label}</BlockLabel>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{body}</p>
    </div>
  );
}
