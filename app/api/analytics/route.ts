import { NextRequest, NextResponse } from "next/server";

/**
 * Analytics intake. Forwards to SAMAYCARE_ANALYTICS_API_URL when configured;
 * otherwise logs server-side only. Never accepts or forwards credentials
 * from the client.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const analyticsApiUrl = process.env.SAMAYCARE_ANALYTICS_API_URL;
  const analyticsApiKey = process.env.SAMAYCARE_ANALYTICS_API_KEY;

  if (analyticsApiUrl) {
    try {
      await fetch(analyticsApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(analyticsApiKey ? { Authorization: `Bearer ${analyticsApiKey}` } : {}),
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("[analytics] failed to forward event", err);
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[analytics] event:", body);
  }

  return NextResponse.json({ ok: true });
}
