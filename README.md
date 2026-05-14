# akashraj.dev

Personal portfolio for **Akashraj Kalathingal** — Senior Software Engineer.
Designed in the spirit of Linear, Vercel, and Stripe: dark, fast, restrained,
and content-forward. No 3D, no particle backgrounds — the work speaks louder.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** (strict)
- **Tailwind CSS v4** (zero-config, CSS-first theming)
- **Framer Motion** for scroll-revealed and micro animations
- **Lucide** for icons
- **Inter + JetBrains Mono** via `next/font/google` (zero CLS)
- Single source-of-truth content file at `src/content/data.ts`

## Quick start

```bash
pnpm install     # or npm / yarn
pnpm dev         # http://localhost:3000
pnpm build && pnpm start
```

Drop your resume PDF into `public/Akashraj_Kalathingal_Resume.pdf` so the
"Download résumé" button works.

## Editing content

All copy lives in `src/content/data.ts`. To update an experience bullet, a
case study, skills list, or your tagline — edit that file. No component
changes required.

## Project shape

```
src/
├─ app/
│  ├─ layout.tsx        # metadata, fonts, OG
│  ├─ page.tsx          # composition
│  └─ globals.css       # Tailwind v4 + design tokens
├─ components/
│  ├─ Nav.tsx           # sticky pill nav
│  ├─ Hero.tsx          # rotating titles, snapshot strip
│  ├─ About.tsx         # narrative + career arc
│  ├─ Experience.tsx    # expandable timeline
│  ├─ CaseStudies.tsx   # tabbed deep-dives
│  ├─ Skills.tsx        # grouped competency grid
│  ├─ Footer.tsx        # education / awards / contact
│  └─ Primitives.tsx    # Section, Tag, Reveal
└─ content/
   └─ data.ts           # everything you'd ever want to edit
```

## Deploying to Vercel

```bash
npx vercel        # one-time link
npx vercel --prod # ship
```

Or push to GitHub and import the repo at vercel.com/new — it'll auto-detect
Next.js. Set a custom domain in Project Settings → Domains.

## Performance notes

- Server-rendered by default; only the interactive bits opt into `"use client"`
- `next/font` self-hosts Inter and JetBrains Mono — zero render-blocking CSS
- All animations respect `prefers-reduced-motion`
- No client-side images larger than the OG card
- Lighthouse: targets 95+ across the board on a fresh build

## Customization checklist

- [ ] `public/Akashraj_Kalathingal_Resume.pdf` — drop in your resume
- [ ] `src/content/data.ts` — update GitHub URL if it differs from the placeholder
- [ ] `metadataBase` in `src/app/layout.tsx` — set to your deployed domain
- [ ] Optional: replace the snapshot numbers with anything more specific
- [ ] Optional: add a `public/og.png` (1200×630) for richer link previews
