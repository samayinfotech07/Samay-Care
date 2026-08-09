# Samay Care — Phase 1 Website

Pre-launch marketing site for Samay Care (India's Healthcare Convenience
Platform) and its CareBuddy assistance service. Built with Next.js (App
Router), TypeScript, and Tailwind CSS v4.

Source of truth for brand, messaging and page structure lives in `docs/`:

- `docs/SAMAY_CARE_BRAND_GUIDELINES.md`
- `docs/SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```text
app/            Routes (home, privacy, terms), API routes, SEO files
components/ui/  Design-system primitives (Button, Card, Input, ...)
components/site/  Header, Footer, Logo
components/home/  Homepage sections (Hero, PreLaunchForm, ...)
data/           Data-driven content for repeated cards/lists
lib/            Validation, analytics adapter, lead service, types
```

## Configuration

Copy `.env.example` to `.env.local` and fill in values as they become
available. Until then, the pre-launch form logs leads server-side only and
analytics events are dropped — see `.env.example` for details.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project
