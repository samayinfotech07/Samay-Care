# Pending Integrations — On Hold

Tracking doc for backend/analytics configuration that is intentionally
deferred. Nothing here blocks deployment — the site runs fully in its
documented fallback mode until these are picked back up.

## 1. Lead capture backend

**Env vars:** `SAMAYCARE_LEAD_API_URL`, `SAMAYCARE_LEAD_API_KEY`
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** `app/api/leads/route.ts` validates submissions
server-side and logs each lead to the Vercel function logs. Nothing is lost,
but nothing is persisted to a durable store (CRM, database, sheet, etc.).
**To resume:** decide where leads should land (CRM, database, Google Sheet via
an API, etc.), then set the two env vars on Vercel — no code changes needed.

## 2. Analytics ingestion

**Env vars:** `SAMAYCARE_ANALYTICS_API_URL`, `SAMAYCARE_ANALYTICS_API_KEY`
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** `app/api/analytics/route.ts` receives all tracked
events (`hero_notify_click`, `prelaunch_form_submit`, `city_selected`, etc.)
but drops them in production since no endpoint is configured (dev-mode logs
them to the console instead).
**To resume:** pick an analytics destination, then set the two env vars — no
code changes needed.

## Already configured

- `NEXT_PUBLIC_SITE_URL` — set on Vercel.
