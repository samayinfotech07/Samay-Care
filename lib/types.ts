export type AssistanceType =
  | "opd-hospital-visit"
  | "ipd-admission-support"
  | "senior-citizen-assistance"
  | "accompany-from-home"
  | "diagnostics-reports"
  | "medicine-assistance"
  | "insurance-documentation"
  | "other";

export type PreLaunchLead = {
  name: string;
  phone: string;
  email?: string;
  city: string;
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
