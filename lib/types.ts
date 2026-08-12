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

export type PollSubmission = {
  surveyVersion: "samay-care-market-validation-v1";
  name: string;
  email: string;
  phone?: string;
  q1_hospitalVisitFrequency: string;
  q2_usualCompanion: string;
  q3_hospitalChallenges: string[];
  q4_workCommitmentImpact: string;
  q5_postponedHospitalVisit: string;
  q6_opdVisitDuration: string;
  q7_careBuddyUsefulness: string;
  q8_useSituations: string[];
  q9_trustFactors: string[];
  q10_willingnessToPay: string;
  city?: string;
  relationship?: string;
  workingStatus?: string;
  parentsSameCity?: string;
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
