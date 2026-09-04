# Intimate Weddings By Fave

Marketing site for Intimate Weddings By Fave, a destination and intimate wedding planner based in Lagos, Nigeria. Built with Next.js (App Router) and exported as a static site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Configuration

The contact form sends messages via [Formspree](https://formspree.io). Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_FORM_ID` to your Formspree form ID. Without it, the form shows a toast explaining it isn't configured instead of failing silently.

## Project structure

- `src/app/` — routes, root layout, metadata (`sitemap.ts`, `robots.ts`)
- `src/components/sections/` — page sections (Hero, Services, Gallery, etc.)
- `src/components/ui/` — shadcn/ui primitives
- `src/lib/data/` — typed content data (e.g. service listings)
- `src/hooks/` — shared hooks

## Building

```bash
npm run build
```

This produces a static export in `out/` (`output: 'export'` in `next.config.ts`) — no Node server is required at runtime.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports)
