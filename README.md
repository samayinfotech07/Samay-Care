# Samay Care — Phase 1 Website

Pre-launch marketing site for Samay Care (India's Healthcare Convenience
Platform) and its CareBuddy assistance service. Built with Next.js (App
Router), TypeScript, and Tailwind CSS v4.

Source of truth for brand, messaging and page structure lives in `docs/`:

- `docs/SAMAY_CARE_BRAND_GUIDELINES.md` — brand, voice, color/type tokens
- `docs/SAMAY_CARE_PHASE1_WEBSITE_V2.md` — current homepage positioning and
  page structure (supersedes the archived V1 spec below)
- `docs/SAMAY_CARE_MARKET_VALIDATION_POLL.md` — `/poll` spec
- `docs/PENDING_INTEGRATIONS.md` — backend/integration config on hold

`docs/archive/` holds the original (V1) Phase 1 spec, kept for the
implementation details it still documents (see comments in
`lib/lead-service.ts` and `components/home/PreLaunchVisual.tsx`) even though
its product positioning was replaced by V2.

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
