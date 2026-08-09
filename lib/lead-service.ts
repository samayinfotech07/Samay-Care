import type { PreLaunchLead } from "./types";

export type LeadSubmissionResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Client-facing lead service. Always talks to our own /api/leads route —
 * never directly to a third-party CRM/API — so backend credentials stay
 * server-side. See docs/SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md §17.
 */
export async function submitPreLaunchLead(
  lead: PreLaunchLead
): Promise<LeadSubmissionResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return {
        ok: false,
        error: data?.error ?? "Something went wrong. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We couldn't reach our servers. Please check your connection and try again.",
    };
  }
}
