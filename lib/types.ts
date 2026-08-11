export type AssistanceType =
  | "opd-hospital-visit"
  | "ipd-admission-support"
  | "accompany-from-home"
  | "meet-at-hospital"
  | "diagnostics-reports"
  | "pharmacy-medicines"
  | "insurance-documentation"
  | "other";

export type RelationshipType = "myself" | "parent" | "spouse" | "child" | "other-family-member";

export type PreLaunchLead = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  relationship: RelationshipType | "";
  assistanceType: AssistanceType | "";
  consent: boolean;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPage?: string;
  referrer?: string;
  submittedAt: string;
};

export type BookingMode = "meet-at-hospital" | "accompany-from-home";
