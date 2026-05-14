"use client";

import { Section, Reveal } from "./Primitives";
import { skills } from "@/content/data";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="04 / Toolbox"
      title="Production-grade tools, not buzzword bingo."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.04}>
            <div className="hairline group h-full rounded-2xl bg-[var(--color-bg-elevated)]/40 p-5 transition-colors hover:border-[var(--color-accent)]/40">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {g.category}
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="font-mono rounded-md border border-transparent bg-white/[0.03] px-2 py-1 text-xs text-[var(--color-fg-muted)] transition-colors group-hover:border-[var(--color-border)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
