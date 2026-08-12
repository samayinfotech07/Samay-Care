import { NextRequest, NextResponse } from "next/server";
import { validatePollSubmission } from "@/lib/pollValidation";
import { appendPollResponseToSheet } from "@/lib/sheets";
import type { PollSubmission } from "@/lib/types";

const MAX_ARRAY_SELECTIONS = 8; // no question offers more than 8 options
const MAX_TEXT_FIELD_LENGTH = 120;

/**
 * Lightweight abuse guard: this endpoint has no cookie/session auth (fully
 * anonymous), so the real risk is a third-party site silently POSTing junk
 * responses on a visitor's behalf, not account takeover. Reject only when
 * an Origin/Referer is present AND clearly points somewhere else — don't
 * block requests that omit both, which same-origin fetches sometimes do.
 */
function isPlausiblySameOrigin(request: NextRequest): boolean {
  const originHeader = request.headers.get("origin") ?? request.headers.get("referer");
  if (!originHeader) return true;

  try {
    const requestHost = new URL(originHeader).host;
    const siteHost = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://samaycare.com").host;
    return requestHost === siteHost || requestHost.endsWith(".vercel.app") || requestHost.startsWith("localhost");
  } catch {
    return true;
  }
}

function sanitizeArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string").slice(0, MAX_ARRAY_SELECTIONS);
}

function sanitizeText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_TEXT_FIELD_LENGTH);
}

/**
 * Market-validation poll intake (see
 * docs/SAMAY_CARE_MARKET_VALIDATION_POLL.md). Validates server-side, then
 * fans out to whichever of these are configured (see .env.example) — same
 * best-effort pattern as /api/leads:
 *   - SAMAYCARE_POLL_API_URL: forwards the response to an external
 *     analytics/CRM endpoint.
 *   - GOOGLE_SERVICE_ACCOUNT_... and GOOGLE_SHEET_ID: appends a row to a sheet
 *     (tab name via GOOGLE_POLL_SHEET_TAB_NAME, default "PollResponses").
 * If neither is configured, the response is logged to the server's own
 * function logs — a real, retrievable record, so nothing is silently lost
 * even before a durable backend is wired up.
 */
export async function POST(request: NextRequest) {
  if (!isPlausiblySameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let body: Partial<Record<keyof PollSubmission, unknown>>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const candidate: Partial<PollSubmission> = {
    q1_hospitalVisitFrequency: sanitizeText(body.q1_hospitalVisitFrequency),
    q2_usualCompanion: sanitizeText(body.q2_usualCompanion),
    q3_hospitalChallenges: sanitizeArray(body.q3_hospitalChallenges),
    q4_workCommitmentImpact: sanitizeText(body.q4_workCommitmentImpact),
    q5_postponedHospitalVisit: sanitizeText(body.q5_postponedHospitalVisit),
    q6_opdVisitDuration: sanitizeText(body.q6_opdVisitDuration),
    q7_careBuddyUsefulness: sanitizeText(body.q7_careBuddyUsefulness),
    q8_useSituations: sanitizeArray(body.q8_useSituations),
    q9_trustFactors: sanitizeArray(body.q9_trustFactors),
    q10_willingnessToPay: sanitizeText(body.q10_willingnessToPay),
    consent: Boolean(body.consent),
  };

  const errors = validatePollSubmission(candidate);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted questions.", errors }, { status: 400 });
  }

  const submission: PollSubmission = {
    surveyVersion: "samay-care-market-validation-v1",
    q1_hospitalVisitFrequency: candidate.q1_hospitalVisitFrequency!,
    q2_usualCompanion: candidate.q2_usualCompanion!,
    q3_hospitalChallenges: candidate.q3_hospitalChallenges!,
    q4_workCommitmentImpact: candidate.q4_workCommitmentImpact!,
    q5_postponedHospitalVisit: candidate.q5_postponedHospitalVisit!,
    q6_opdVisitDuration: candidate.q6_opdVisitDuration!,
    q7_careBuddyUsefulness: candidate.q7_careBuddyUsefulness!,
    q8_useSituations: candidate.q8_useSituations!,
    q9_trustFactors: candidate.q9_trustFactors!,
    q10_willingnessToPay: candidate.q10_willingnessToPay!,
    city: sanitizeText(body.city) || undefined,
    relationship: sanitizeText(body.relationship) || undefined,
    workingStatus: sanitizeText(body.workingStatus) || undefined,
    parentsSameCity: sanitizeText(body.parentsSameCity) || undefined,
    consent: true,
    source: sanitizeText(body.source) || "poll",
    utmSource: sanitizeText(body.utmSource) || undefined,
    utmMedium: sanitizeText(body.utmMedium) || undefined,
    utmCampaign: sanitizeText(body.utmCampaign) || undefined,
    utmContent: sanitizeText(body.utmContent) || undefined,
    utmTerm: sanitizeText(body.utmTerm) || undefined,
    landingPage: typeof body.landingPage === "string" ? body.landingPage.slice(0, 300) : undefined,
    referrer: typeof body.referrer === "string" ? body.referrer.slice(0, 300) : undefined,
    submittedAt: new Date().toISOString(),
  };

  const pollApiUrl = process.env.SAMAYCARE_POLL_API_URL;
  const pollApiKey = process.env.SAMAYCARE_POLL_API_KEY;

  if (pollApiUrl) {
    try {
      const upstream = await fetch(pollApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(pollApiKey ? { Authorization: `Bearer ${pollApiKey}` } : {}),
        },
        body: JSON.stringify(submission),
      });

      if (!upstream.ok) {
        console.error("[poll] upstream rejected response", upstream.status);
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
      }
    } catch (err) {
      console.error("[poll] failed to reach upstream API", err);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
    }
  } else {
    console.info("[poll] SAMAYCARE_POLL_API_URL not configured; logging response only:", submission);
  }

  const sheetResult = await appendPollResponseToSheet(submission).catch((err) => {
    console.error("[poll] sheet append failed", err);
    return false;
  });
  if (!sheetResult) {
    console.info("[poll] response was not written to a sheet (see logs above for why)");
  }

  return NextResponse.json({ ok: true });
}
