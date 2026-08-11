import type { AssistanceType } from "@/lib/types";

export const careBuddyServices: {
  icon: string;
  title: string;
  description: string;
  assistanceType: AssistanceType;
}[] = [
  {
    icon: "clipboardList",
    title: "Registration & Queue",
    description: "Registration, tokens and queue assistance.",
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
    title: "Pharmacy & Medicines",
    description: "Coordinate pharmacy pickup and medicines.",
    assistanceType: "pharmacy-medicines",
  },
  {
    icon: "bedDouble",
    title: "Admission & Discharge Help",
    description: "Assist with non-clinical admission and discharge processes.",
    assistanceType: "ipd-admission-support",
  },
  {
    icon: "messageCircle",
    title: "Family Updates",
    description: "Keep the family informed at every step of the journey.",
    assistanceType: "other",
  },
  {
    icon: "calendarClock",
    title: "Follow-up Coordination",
    description: "Help keep the next healthcare steps organized.",
    assistanceType: "other",
  },
];
