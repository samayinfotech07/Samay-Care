import { NextRequest, NextResponse } from "next/server";
import { validatePreLaunchLead } from "@/lib/validation";
import type { PreLaunchLead } from "@/lib/types";

/**
 * Pre-launch lead intake. No lead-storage backend is configured yet, so we
 * validate server-side and log structured lead data for now. Once
 * SAMAYCARE_LEAD_API_URL / SAMAYCARE_LEAD_API_KEY are set (see .env.example),
 * this forwards leads to that endpoint instead of just logging them.
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
    assistanceType: body.assistanceType!,
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

  return NextResponse.json({ ok: true });
}
