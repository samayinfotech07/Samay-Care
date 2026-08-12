# Pending Integrations — On Hold

Tracking doc for backend/integration configuration that is intentionally
deferred. Nothing here blocks deployment — the site runs fully in its
documented fallback mode until these are picked back up.

## 1. Lead capture backend (external CRM/API, optional)

**Env vars:** `SAMAYCARE_LEAD_API_URL`, `SAMAYCARE_LEAD_API_KEY`
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** `app/api/leads/route.ts` validates submissions
server-side and logs each lead to the Vercel function logs.
**To resume:** decide where leads should land (CRM, database, etc.), then
set the two env vars on Vercel — no code changes needed. Independent of
this, the email and Sheets integrations below will fire as soon as *their*
env vars are set, whether or not this one is configured.

## 2. Lead notification email + thank-you email (Zoho Mail)

**Code status:** Implemented in `app/api/leads/route.ts` via
`lib/email/client.ts`, `lib/email/thankYouEmail.ts`, and
`lib/email/leadNotificationEmail.ts`. Branded with the Samay Care logo and
teal/navy palette (`lib/email/layout.ts`).
**Env vars:** `ZOHO_SMTP_HOST`, `ZOHO_SMTP_PORT`, `ZOHO_SMTP_USER`,
`ZOHO_SMTP_PASS`, `EMAIL_FROM_NAME`, `LEAD_NOTIFICATION_EMAIL`.
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** every submission is logged only; no emails are sent.
**To resume:**

1. In Zoho Mail, go to **Settings → Mail Accounts → \<your address\> →
   App Passwords** and generate one for "Samay Care Website" (a normal
   Zoho login password will *not* work over SMTP if two-factor auth is on,
   and app passwords are the safer option either way).
2. Confirm your Zoho data center's SMTP host — `smtp.zoho.com` (global),
   `smtp.zoho.in` (India), or `smtp.zoho.eu` (Europe). It's whichever
   domain your Zoho Mail login page uses.
3. On Vercel → Project → Settings → Environment Variables, set:
   - `ZOHO_SMTP_HOST` — e.g. `smtp.zoho.in`
   - `ZOHO_SMTP_PORT` — `465`
   - `ZOHO_SMTP_USER` — the full Zoho Mail address to send from
   - `ZOHO_SMTP_PASS` — the app password from step 1
   - `LEAD_NOTIFICATION_EMAIL` — where new-lead alerts should land (can be
     the same address as `ZOHO_SMTP_USER`, or a separate team inbox)
   - `EMAIL_FROM_NAME` — optional, defaults to `Samay Care`
4. Redeploy. No code changes needed.

## 3. Google Sheets lead log

**Code status:** Implemented in `lib/sheets.ts`, called from
`app/api/leads/route.ts`.
**Env vars:** `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`, `GOOGLE_SHEET_ID`,
`GOOGLE_SHEET_TAB_NAME`.
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** every submission is logged only; no sheet is updated.
**To resume:**

1. Create (or open) a Google Cloud project at
   console.cloud.google.com, then enable the **Google Sheets API** for it
   (APIs & Services → Enable APIs and Services → search "Google Sheets
   API" → Enable).
2. Create a service account: **APIs & Services → Credentials → Create
   Credentials → Service Account**. Give it any name (e.g.
   "samaycare-leads"); no roles/permissions need to be granted at the
   project level.
3. Open the new service account → **Keys → Add Key → Create new key →
   JSON**. This downloads a JSON file — treat it like a password, never
   commit it to the repo.
4. Create the destination Google Sheet (or use an existing one). Add a
   header row matching `LEAD_SHEET_COLUMNS` in `lib/sheets.ts`:
   `Submitted At, Name, Phone, Email, City, Relationship, Assistance Type,
   Consent, Source, UTM Source, UTM Medium, UTM Campaign, UTM Content, UTM
   Term, Landing Page, Referrer`.
5. Click **Share** on the sheet and share it with the service account's
   email address (from the JSON file's `client_email` field, looks like
   `samaycare-leads@your-project.iam.gserviceaccount.com`) — give it
   **Editor** access. This step is easy to miss and is the most common
   reason appends fail with a permissions error.
6. On Vercel → Project → Settings → Environment Variables, set:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the JSON file's `client_email`
   - `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` — the JSON file's `private_key`.
     **This is the one field that reliably goes wrong** — the JSON looks
     like `"private_key": "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END
     PRIVATE KEY-----\n"`, and it's easy to accidentally paste the
     surrounding double quotes too, or to have an editor "helpfully"
     convert the literal `\n` text into real line breaks (usually
     harmless) or strip them entirely (not harmless). The code normalizes
     both a stray pair of quotes and literal `\n` text either way, but
     the value must still contain the full key. The safest way to get an
     exact copy: run `python3 -c "import json,sys; print(json.load(open('service-account.json'))['private_key'], end='')"`
     against the downloaded file and copy *that* output — it's the exact
     private_key value with no ambiguity about quotes or escaping.
   - `GOOGLE_SHEET_ID` — from the sheet's URL:
     `docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`
   - `GOOGLE_SHEET_TAB_NAME` — the tab/sheet name leads should append to
     (defaults to `Leads` if unset)
7. Redeploy. No code changes needed.
8. If appends still fail, check the Vercel function logs for `[sheets]` —
   a malformed key now logs a clear message instead of the cryptic
   OpenSSL `DECODER routines::unsupported` error.

## 4. Market-validation poll backend (`/poll`)

**Code status:** Implemented in `app/api/poll/route.ts`. Reuses the same
Google Sheets service account as §3 above (if configured) but appends to a
separate tab, and independently supports forwarding to an external
API/CRM.
**Env vars:** `SAMAYCARE_POLL_API_URL`, `SAMAYCARE_POLL_API_KEY`,
`GOOGLE_POLL_SHEET_TAB_NAME` (plus the `GOOGLE_SERVICE_ACCOUNT_*` /
`GOOGLE_SHEET_ID` vars from §3 — no separate service account needed).
**Status:** On hold — not yet configured on Vercel.
**Current behavior:** every poll response is logged to the Vercel function
logs only.
**To resume:**

1. If you already set up the Google service account for lead capture (§3),
   just add a new tab to that same spreadsheet named `PollResponses` (or
   whatever you set `GOOGLE_POLL_SHEET_TAB_NAME` to), with a header row
   matching `POLL_SHEET_COLUMNS` in `lib/sheets.ts` — the service account
   already has edit access to the whole spreadsheet, so no new sharing
   step is needed.
2. If you haven't set up Sheets at all yet, follow §3's steps first, then
   come back and add the poll tab from step 1.
3. Alternatively (or in addition), set `SAMAYCARE_POLL_API_URL` /
   `SAMAYCARE_POLL_API_KEY` to forward responses to a separate analytics
   endpoint or CRM.
4. Redeploy. No code changes needed.

## 5. Analytics ingestion

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
