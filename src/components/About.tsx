"use client";

import { Section, Reveal } from "./Primitives";
import { summary } from "@/content/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" label="01 / About" title="A senior engineer who ships systems, not slides.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">
          {summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Pillar
                title="System ownership"
                body="From design doc to production rollout to the 2 a.m. page — I own the lifecycle, not just the commit."
              />
              <Pillar
                title="Production rigor"
                body="On-call rotations on systems with billion-dollar SLAs. Security, observability, and rollback aren't afterthoughts."
              />
              <Pillar
                title="Product mindset"
                body="Strong systems are nothing without the user moment. I work closely with PMs, design, and ops to ship what matters."
              />
              <Pillar
                title="Force multiplier"
                body="Mentor junior engineers, write the runbooks, and make sure the next person on-call has it easier than I did."
              />
            </div>
          </Reveal>
        </div>

        {/* career arc */}
        <Reveal delay={0.15}>
          <div className="hairline relative overflow-hidden rounded-2xl bg-[var(--color-bg-elevated)]/40 p-6 backdrop-blur">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
              Career arc
            </div>
            <ol className="mt-5 space-y-5">
              <ArcItem year="2018" co="CGI" note="Software Engineer · ERP & events platform" />
              <ArcItem year="2019" co="Target" note="Joined orchestration platform team" />
              <ArcItem year="2022" co="Target" note="Promoted to Senior Software Engineer" highlight />
              <ArcItem year="2023" co="Conestoga" note="PG Cert — High Distinction · Dean's Honour List" />
              <ArcItem year="2024" co="Scotiabank" note="Led ISO 20022 wire payment modernization" highlight />
              <ArcItem year="2025" co="BMO" note="Building AI-powered banking advisory" highlight />
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="hairline rounded-xl bg-[var(--color-bg-elevated)]/40 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-fg-muted)]">{body}</p>
    </div>
  );
}

function ArcItem({
  year,
  co,
  note,
  highlight,
}: {
  year: string;
  co: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative grid grid-cols-[64px_1fr] gap-3"
    >
      <div className="font-mono text-xs text-[var(--color-fg-subtle)]">{year}</div>
      <div className="relative pl-5">
        <span
          className={`absolute left-0 top-1.5 inline-block h-2 w-2 rounded-full ${
            highlight ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-strong)]"
          }`}
        />
        <div className="text-sm font-medium text-white">{co}</div>
        <div className="text-xs text-[var(--color-fg-muted)]">{note}</div>
      </div>
    </motion.li>
  );
}
