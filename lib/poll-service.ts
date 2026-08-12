import type { PollSubmission } from "./types";

export type PollSubmissionResult = { ok: true } | { ok: false; error: string };

/**
 * Client-facing poll service. Always talks to our own /api/poll route —
 * never directly to a third-party endpoint — so backend credentials stay
 * server-side, matching lib/lead-service.ts's pattern.
 */
export async function submitPollResponse(submission: PollSubmission): Promise<PollSubmissionResult> {
  try {
    const response = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
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
