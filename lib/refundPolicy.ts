/**
 * Fetches the live cancellation/refund ladder from the care.samaycare
 * platform's public services endpoint, per Recallium task #2905 — the
 * refund policy page must render from this data, never from hardcoded
 * prose, since an admin can edit the tiers and a hardcoded page would
 * silently go stale.
 *
 * `basePrice` and anything derived from it must stay a string on this
 * page — never parsed into a JS number for arithmetic (money precision).
 * The only permitted display-time math is GST, computed from
 * `rates.gstBasisPoints`, never a hardcoded rate.
 */
const PUBLIC_SERVICES_URL = "https://api.samaycare.com/api/v1/services/public";

export type CancellationTier = {
  minMinutesBefore: number;
  percent: number;
};

export type PublicService = {
  key: string;
  name: string;
  summary?: string;
  description?: string;
  basePrice: string;
  currency: string;
  durationMinutes: number;
  cancellationTiers: CancellationTier[];
  rates: { gstBasisPoints: number };
};

export async function fetchPublicServices(): Promise<PublicService[] | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(PUBLIC_SERVICES_URL, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) return null;

    const json: unknown = await res.json();
    const services = Array.isArray(json)
      ? json
      : Array.isArray((json as { data?: unknown })?.data)
        ? (json as { data: unknown[] }).data
        : null;

    if (!services) return null;
    return services as PublicService[];
  } catch {
    return null;
  }
}

export function formatMinutesBefore(minutes: number): string {
  if (minutes <= 0) return "up to the start of your visit";
  if (minutes % 60 === 0) {
    const hours = minutes / 60;
    return `${hours} hour${hours === 1 ? "" : "s"} or more before your visit`;
  }
  return `${minutes} minutes or more before your visit`;
}

export function formatGstPercent(gstBasisPoints: number): string {
  return `${(gstBasisPoints / 100).toString()}%`;
}
