import { google } from "googleapis";
import type { PollSubmission, PreLaunchLead } from "./types";

function isConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

/**
 * A pasted PEM private key commonly arrives mangled in one of a few ways —
 * wrapped in a stray pair of quotes (from copying the JSON field including
 * its quotes), or with the "\n" line breaks still escaped as literal
 * backslash-n text (Vercel env vars are single-line, so that's how the key
 * has to be stored). Node's OpenSSL DECODER rejects a malformed PEM with an
 * opaque "unsupported" error rather than a clear "bad key" message, so this
 * normalizes both cases rather than trusting the raw value.
 */
function normalizePrivateKey(raw: string): string {
  let key = raw.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").trim();
}

function getAuth() {
  const privateKey = normalizePrivateKey(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? "");
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

/**
 * Appends a single row to the given tab of the configured Google Sheet, if
 * GOOGLE_SERVICE_ACCOUNT_EMAIL/PRIVATE_KEY/GOOGLE_SHEET_ID are set (see
 * .env.example); otherwise logs and no-ops. The sheet's own header row is
 * not managed here — set it up once by hand to match the relevant
 * `*_SHEET_COLUMNS` export below.
 */
async function appendRowToSheet(tabName: string, row: unknown[], logLabel: string): Promise<boolean> {
  if (!isConfigured()) {
    console.info(`[sheets] Google Sheets not configured; skipping append for ${logLabel}`);
    return false;
  }

  const normalizedKey = normalizePrivateKey(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? "");
  if (!normalizedKey.startsWith("-----BEGIN PRIVATE KEY-----")) {
    console.error(
      "[sheets] GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY doesn't look like a valid PEM key after " +
        "normalization (expected it to start with '-----BEGIN PRIVATE KEY-----'). Re-check the " +
        "value on Vercel — see docs/PENDING_INTEGRATIONS.md for exactly how to copy it."
    );
    return false;
  }

  try {
    const sheets = google.sheets({ version: "v4", auth: getAuth() });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${tabName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });
    return true;
  } catch (err) {
    console.error(`[sheets] failed to append ${logLabel}`, err);
    return false;
  }
}

export async function appendLeadToSheet(lead: PreLaunchLead): Promise<boolean> {
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME ?? "Leads";
  const row = [
    lead.submittedAt,
    lead.name,
    lead.phone,
    lead.email ?? "",
    lead.city,
    lead.relationship,
    lead.assistanceType,
    lead.consent ? "Yes" : "No",
    lead.source ?? "website",
    lead.utmSource ?? "",
    lead.utmMedium ?? "",
    lead.utmCampaign ?? "",
    lead.utmContent ?? "",
    lead.utmTerm ?? "",
    lead.landingPage ?? "",
    lead.referrer ?? "",
  ];
  return appendRowToSheet(tabName, row, lead.name);
}

export async function appendPollResponseToSheet(submission: PollSubmission): Promise<boolean> {
  const tabName = process.env.GOOGLE_POLL_SHEET_TAB_NAME ?? "PollResponses";
  const row = [
    submission.submittedAt,
    submission.surveyVersion,
    submission.name,
    submission.email,
    submission.phone ?? "",
    submission.q1_hospitalVisitFrequency,
    submission.q2_usualCompanion,
    submission.q3_hospitalChallenges.join(", "),
    submission.q4_workCommitmentImpact,
    submission.q5_postponedHospitalVisit,
    submission.q6_opdVisitDuration,
    submission.q7_careBuddyUsefulness,
    submission.q8_useSituations.join(", "),
    submission.q9_trustFactors.join(", "),
    submission.q10_willingnessToPay,
    submission.city ?? "",
    submission.relationship ?? "",
    submission.workingStatus ?? "",
    submission.parentsSameCity ?? "",
    submission.source ?? "poll",
    submission.utmSource ?? "",
    submission.utmMedium ?? "",
    submission.utmCampaign ?? "",
    submission.utmContent ?? "",
    submission.utmTerm ?? "",
    submission.landingPage ?? "",
    submission.referrer ?? "",
  ];
  return appendRowToSheet(tabName, row, "poll response");
}

export const LEAD_SHEET_COLUMNS = [
  "Submitted At",
  "Name",
  "Phone",
  "Email",
  "City",
  "Relationship",
  "Assistance Type",
  "Consent",
  "Source",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Content",
  "UTM Term",
  "Landing Page",
  "Referrer",
];

export const POLL_SHEET_COLUMNS = [
  "Submitted At",
  "Survey Version",
  "Name",
  "Email",
  "Phone",
  "Q1 Hospital Visit Frequency",
  "Q2 Usual Companion",
  "Q3 Hospital Challenges",
  "Q4 Work Commitment Impact",
  "Q5 Postponed Hospital Visit",
  "Q6 OPD Visit Duration",
  "Q7 CareBuddy Usefulness",
  "Q8 Use Situations",
  "Q9 Trust Factors",
  "Q10 Willingness To Pay",
  "City",
  "Relationship",
  "Working Status",
  "Parents Same City",
  "Source",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Content",
  "UTM Term",
  "Landing Page",
  "Referrer",
];
