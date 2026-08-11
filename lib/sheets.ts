import { google } from "googleapis";
import type { PreLaunchLead } from "./types";

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
 * Appends one row per lead to the configured Google Sheet if
 * GOOGLE_SERVICE_ACCOUNT_EMAIL/PRIVATE_KEY/GOOGLE_SHEET_ID are set (see
 * .env.example); otherwise logs and no-ops. The sheet's own header row is
 * not managed here — set it up once by hand to match the column order
 * below.
 */
export async function appendLeadToSheet(lead: PreLaunchLead): Promise<boolean> {
  if (!isConfigured()) {
    console.info("[sheets] Google Sheets not configured; skipping append for", lead.name);
    return false;
  }

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
    console.error("[sheets] failed to append lead", err);
    return false;
  }
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
