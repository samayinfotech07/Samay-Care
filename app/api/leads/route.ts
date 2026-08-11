import { NextRequest, NextResponse } from "next/server";
import { validatePreLaunchLead } from "@/lib/validation";
import type { PreLaunchLead } from "@/lib/types";
import { sendEmail } from "@/lib/email/client";
import { buildThankYouEmail } from "@/lib/email/thankYouEmail";
import { buildLeadNotificationEmail } from "@/lib/email/leadNotificationEmail";
import { appendLeadToSheet } from "@/lib/sheets";

/**
 * Pre-launch lead intake. Validates server-side, then fans out to whichever
 * of these are configured (see .env.example) — none are required, and any
 * that error are logged rather than failing the submission:
 *   - SAMAYCARE_LEAD_API_URL: forwards the lead to an external CRM/API.
 *   - ZOHO_SMTP_*: emails the team (LEAD_NOTIFICATION_EMAIL) and sends the
 *     submitter a branded thank-you email (only if they gave an email).
 *   - GOOGLE_SERVICE_ACCOUNT_... and GOOGLE_SHEET_ID: appends a row to a sheet.
 * If nothing is configured, the lead is only logged — nothing is lost.
 */
export async function POST(request: NextRequest) {
  let body: Partial<PreLaunchLead>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const errors = validatePreLaunchLead({
    name: body.name ?? "",
    phone: body.phone ?? "",
    city: body.city ?? "",
    email: body.email,
    relationship: body.relationship ?? "",
    assistanceType: body.assistanceType ?? "",
    consent: body.consent ?? false,
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const lead: PreLaunchLead = {
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    email: body.email?.trim() || undefined,
    city: body.city!.trim(),
    relationship: body.relationship ?? "",
    assistanceType: body.assistanceType ?? "",
    consent: Boolean(body.consent),
    source: body.source ?? "website",
    utmSource: body.utmSource,
    utmMedium: body.utmMedium,
    utmCampaign: body.utmCampaign,
    utmContent: body.utmContent,
    utmTerm: body.utmTerm,
    landingPage: body.landingPage,
    referrer: body.referrer,
    submittedAt: new Date().toISOString(),
  };

  const leadApiUrl = process.env.SAMAYCARE_LEAD_API_URL;
  const leadApiKey = process.env.SAMAYCARE_LEAD_API_KEY;

  if (leadApiUrl) {
    try {
      const upstream = await fetch(leadApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(leadApiKey ? { Authorization: `Bearer ${leadApiKey}` } : {}),
        },
        body: JSON.stringify(lead),
      });

      if (!upstream.ok) {
        console.error("[leads] upstream rejected lead", upstream.status);
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
      }
    } catch (err) {
      console.error("[leads] failed to reach upstream lead API", err);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
    }
  } else {
    // No backend configured yet — record it so nothing is silently lost.
    console.info("[leads] SAMAYCARE_LEAD_API_URL not configured; logging lead only:", lead);
  }

  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL ?? process.env.ZOHO_SMTP_USER;
  const sideEffects: Promise<unknown>[] = [appendLeadToSheet(lead)];

  if (notificationEmail) {
    const notification = buildLeadNotificationEmail(lead);
    sideEffects.push(
      sendEmail({
        to: notificationEmail,
        replyTo: lead.email,
        ...notification,
      })
    );
  }

  if (lead.email) {
    const thankYou = buildThankYouEmail(lead);
    sideEffects.push(sendEmail({ to: lead.email, ...thankYou }));
  }

  // Best-effort: a Sheets or email outage should never block a lead that
  // otherwise validated and (if configured) reached the CRM above.
  const results = await Promise.allSettled(sideEffects);
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error("[leads] side-effect failed", index, result.reason);
    }
  });

  return NextResponse.json({ ok: true });
}
