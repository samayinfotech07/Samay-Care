export type PollOption = {
  id: string;
  label: string;
};

export type PollQuestionIcon =
  | "building2"
  | "users"
  | "clipboardList"
  | "briefcase"
  | "calendarX"
  | "timer"
  | "heartHandshake"
  | "mapPin"
  | "shieldCheck"
  | "indianRupee"
  | "user"
  | "landmark";

export type PollQuestion = {
  id: string;
  number: number;
  question: string;
  supportingText?: string;
  type: "single" | "multi";
  required: boolean;
  maxSelections?: number;
  options: PollOption[];
  /**
   * Small topic icon shown above the question so respondents can place it
   * at a glance — no image-generation tool is available in this
   * environment, so this uses the same icon-badge visual language already
   * used for journey stages elsewhere on the site instead of a photo.
   */
  icon: PollQuestionIcon;
};

/**
 * Per docs/SAMAY_CARE_MARKET_VALIDATION_POLL.md §14/§36: Q7 drops "vitals"
 * from the original questionnaire's activity list — CareBuddy provides
 * non-clinical assistance only, and vitals is a clinical/nursing task, so
 * listing it here would contradict that boundary everywhere else on the
 * site.
 */
export const pollQuestions: PollQuestion[] = [
  {
    id: "q1_hospitalVisitFrequency",
    icon: "building2",
    number: 1,
    question: "How often do you or your family members visit a hospital?",
    type: "single",
    required: true,
    options: [
      { id: "more-than-once-a-month", label: "More than once a month" },
      { id: "once-a-month", label: "Once a month" },
      { id: "every-2-3-months", label: "Every 2–3 months" },
      { id: "2-4-times-a-year", label: "2–4 times a year" },
      { id: "rarely", label: "Rarely" },
    ],
  },
  {
    id: "q2_usualCompanion",
    icon: "users",
    number: 2,
    question: "Who usually accompanies an elderly/family member to the hospital?",
    type: "single",
    required: true,
    options: [
      { id: "son-daughter", label: "Son/Daughter" },
      { id: "spouse", label: "Spouse" },
      { id: "other-family-member", label: "Other family member" },
      { id: "friend-neighbour", label: "Friend/Neighbour" },
      { id: "paid-attendant", label: "Paid attendant" },
      { id: "patient-goes-alone", label: "Patient usually goes alone" },
    ],
  },
  {
    id: "q3_hospitalChallenges",
    icon: "clipboardList",
    number: 3,
    question: "What are the biggest challenges during a hospital visit?",
    supportingText: "Select up to 3.",
    type: "multi",
    required: true,
    maxSelections: 3,
    options: [
      { id: "parking-walking", label: "Parking & walking" },
      { id: "registration-token", label: "Registration/token" },
      { id: "queues-waiting", label: "Queues & waiting" },
      { id: "finding-departments-doctor", label: "Finding departments/doctor" },
      { id: "vitals-nursing-coordination", label: "Vitals/nursing coordination" },
      { id: "billing-payment", label: "Billing/payment" },
      { id: "medicines", label: "Medicines" },
      { id: "diagnostic-tests-reports", label: "Diagnostic tests/reports" },
      { id: "understanding-hospital-processes", label: "Understanding hospital processes" },
    ],
  },
  {
    id: "q4_workCommitmentImpact",
    icon: "briefcase",
    number: 4,
    question:
      "Have you ever cancelled or postponed work/personal commitments to accompany a family member to the hospital?",
    type: "single",
    required: true,
    options: [
      { id: "frequently", label: "Frequently" },
      { id: "sometimes", label: "Sometimes" },
      { id: "once-or-twice", label: "Once or twice" },
      { id: "never", label: "Never" },
    ],
  },
  {
    id: "q5_postponedHospitalVisit",
    icon: "calendarX",
    number: 5,
    question:
      "Have you ever postponed a hospital visit because nobody was available to accompany the patient?",
    type: "single",
    required: true,
    options: [
      { id: "yes-frequently", label: "Yes, frequently" },
      { id: "yes-sometimes", label: "Yes, sometimes" },
      { id: "once", label: "Once" },
      { id: "never", label: "Never" },
    ],
  },
  {
    id: "q6_opdVisitDuration",
    icon: "timer",
    number: 6,
    question:
      "Typically, how much time does a hospital OPD visit take, including waiting and formalities?",
    type: "single",
    required: true,
    options: [
      { id: "less-than-1-hour", label: "Less than 1 hour" },
      { id: "1-2-hours", label: "1–2 hours" },
      { id: "2-3-hours", label: "2–3 hours" },
      { id: "3-4-hours", label: "3–4 hours" },
      { id: "more-than-4-hours", label: "More than 4 hours" },
    ],
  },
  {
    id: "q7_careBuddyUsefulness",
    icon: "heartHandshake",
    number: 7,
    question:
      "Imagine you could book a trained CareBuddy from Samay Care who accompanies your family member from home or hospital and helps manage registration, queues, navigation, consultation, billing, medicines and tests. How useful would this be?",
    type: "single",
    required: true,
    options: [
      { id: "extremely-useful", label: "Extremely useful" },
      { id: "very-useful", label: "Very useful" },
      { id: "somewhat-useful", label: "Somewhat useful" },
      { id: "not-very-useful", label: "Not very useful" },
      { id: "not-useful", label: "Not useful" },
    ],
  },
  {
    id: "q8_useSituations",
    icon: "mapPin",
    number: 8,
    question: "In which situations would you use Samay Care?",
    supportingText: "Select all that apply.",
    type: "multi",
    required: true,
    options: [
      { id: "elderly-parents", label: "Elderly parents" },
      { id: "parents-in-another-city", label: "Parents living in another city" },
      { id: "routine-opd-visits", label: "Routine OPD visits" },
      { id: "diagnostic-tests", label: "Diagnostic tests" },
      { id: "follow-up-visits", label: "Follow-up visits" },
      { id: "hospital-admission-discharge", label: "Hospital admission/discharge" },
      { id: "travelling-or-unavailable", label: "When I am travelling or unavailable" },
      { id: "emergency-situations", label: "Emergency situations" },
    ],
  },
  {
    id: "q9_trustFactors",
    icon: "shieldCheck",
    number: 9,
    question: "What would make you comfortable trusting a CareBuddy with your family member?",
    supportingText: "Select up to 3.",
    type: "multi",
    required: true,
    maxSelections: 3,
    options: [
      { id: "background-verification", label: "Background verification" },
      { id: "healthcare-eldercare-training", label: "Healthcare/elder-care training" },
      { id: "hospital-authorized-professional", label: "Hospital-authorized professional" },
      { id: "live-tracking-family-updates", label: "Live tracking & family updates" },
      { id: "id-card-uniform", label: "ID card/uniform" },
      { id: "ratings-reviews", label: "Ratings & reviews" },
      { id: "dedicated-support", label: "Dedicated Samay Care support" },
      { id: "insurance-safety-coverage", label: "Insurance/safety coverage" },
    ],
  },
  {
    id: "q10_willingnessToPay",
    icon: "indianRupee",
    number: 10,
    question: "How much would you be willing to pay for a 2–3 hour Samay Care hospital assistance service?",
    supportingText: "For research purposes, what would you be willing to pay?",
    type: "single",
    required: true,
    options: [
      { id: "200-300", label: "₹200–300" },
      { id: "300-500", label: "₹300–500" },
      { id: "500-750", label: "₹500–750" },
      { id: "750-1000", label: "₹750–1,000" },
      { id: "1000-plus", label: "₹1,000+" },
      { id: "would-not-pay", label: "I would not pay for this service" },
    ],
  },
  {
    id: "q11_currentAge",
    icon: "user",
    number: 11,
    question: "What is your current age?",
    type: "single",
    required: true,
    options: [
      { id: "18-25", label: "18–25" },
      { id: "26-35", label: "26–35" },
      { id: "36-45", label: "36–45" },
      { id: "46-60", label: "46–60" },
      { id: "60-plus", label: "60+" },
    ],
  },
  {
    id: "q12_city",
    icon: "landmark",
    number: 12,
    question: "Which city are you in?",
    type: "single",
    required: true,
    options: [
      { id: "new-delhi", label: "New Delhi" },
      { id: "mumbai", label: "Mumbai" },
      { id: "bangalore", label: "Bangalore" },
      { id: "chandigarh", label: "Chandigarh" },
    ],
  },
];

export const POLL_EMERGENCY_NOTE =
  "Samay Care is designed for healthcare convenience and non-clinical assistance; it is not an emergency medical response service.";

export const pollProfileRelationshipOptions: PollOption[] = [
  { id: "myself", label: "Myself" },
  { id: "parent", label: "Parent" },
  { id: "spouse", label: "Spouse" },
  { id: "child", label: "Child" },
  { id: "other-family-member", label: "Other family member" },
  { id: "other", label: "Other" },
];
