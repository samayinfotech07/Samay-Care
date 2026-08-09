import type { AssistanceType } from "@/lib/types";

export const careBuddyServices: {
  icon: string;
  title: string;
  description: string;
  assistanceType: AssistanceType;
}[] = [
  {
    icon: "clipboardList",
    title: "Registration & Billing",
    description: "Hospital registration and non-clinical billing coordination.",
    assistanceType: "opd-hospital-visit",
  },
  {
    icon: "calendarCheck",
    title: "Doctor Consultation Support",
    description: "Help with navigation and process coordination around the consultation.",
    assistanceType: "opd-hospital-visit",
  },
  {
    icon: "fileSearch",
    title: "Diagnostics & Reports",
    description: "Coordinate tests and report collection.",
    assistanceType: "diagnostics-reports",
  },
  {
    icon: "pill",
    title: "Medicine Purchase & Delivery",
    description: "Assist with medicine collection and partner fulfilment where available.",
    assistanceType: "medicine-assistance",
  },
  {
    icon: "shieldCheck",
    title: "Insurance Assistance",
    description: "Help coordinate documents and non-clinical insurance processes.",
    assistanceType: "insurance-documentation",
  },
  {
    icon: "bedDouble",
    title: "Admission & Discharge Help",
    description: "Assist with non-clinical admission and discharge processes.",
    assistanceType: "ipd-admission-support",
  },
  {
    icon: "calendarClock",
    title: "Follow-up Coordination",
    description: "Help keep the next healthcare steps organized.",
    assistanceType: "other",
  },
];
