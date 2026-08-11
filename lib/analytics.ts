export type AnalyticsEvent =
  | "hero_notify_click"
  | "hero_interest_click"
  | "hero_request_click"
  | "how_it_works_click"
  | "service_card_click"
  | "app_interest_click"
  | "carebuddy_mode_meet_hospital"
  | "carebuddy_mode_home"
  | "opd_journey_view"
  | "ipd_journey_view"
  | "family_update_view"
  | "prelaunch_form_start"
  | "prelaunch_form_submit"
  | "prelaunch_form_success"
  | "prelaunch_form_error"
  | "city_selected"
  | "relationship_selected"
  | "service_interest_selected"
  | "assistance_type_selected"
  | "partner_cta_click"
  | "footer_contact_click";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Client-safe analytics adapter. Forwards events to /api/analytics, which is
 * the only place that knows whether a real analytics provider is configured
 * (via SAMAYCARE_ANALYTICS_API_URL). No credentials ever ship to the client.
 */
export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    event,
    payload,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/analytics", new Blob([body], { type: "application/json" }));
      return;
    }
    void fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // Analytics must never break the user experience.
  }
}

export function getUtmParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  landingPage?: string;
} {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    utmTerm: params.get("utm_term") ?? undefined,
    referrer: document.referrer || undefined,
    landingPage: window.location.href,
  };
}
