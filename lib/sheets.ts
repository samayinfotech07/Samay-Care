import { google } from "googleapis";
import type { PollSubmission, PreLaunchLead } from "./types";

function isConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

function getAuth() {
  // Vercel env vars are single-line, so a PEM private key is stored with
  // literal "\n" escapes that need converting back to real newlines.
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
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
