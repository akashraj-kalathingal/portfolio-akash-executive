"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label={label} title={title} />
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--color-accent)]/40" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {label}
        </span>
      </div>
      <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}

export function Tag({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "sm" | "md";
}) {
  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };
  return (
    <span
      className={`${sizes[size]} font-mono inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 text-[var(--color-fg-muted)]`}
    >
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
}
