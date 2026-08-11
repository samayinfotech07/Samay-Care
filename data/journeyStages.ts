export type JourneyStageIcon =
  | "calendarCheck"
  | "clipboardCheck"
  | "users"
  | "navigation"
  | "stethoscope"
  | "flaskConical"
  | "pill"
  | "bedDouble"
  | "fileText"
  | "calendarClock";

export type JourneyStage = {
  number: number;
  title: string;
  description: string;
  icon: JourneyStageIcon;
};

export const journeyStages: JourneyStage[] = [
  {
    number: 1,
    title: "Appointment",
    description: "Book an appointment with the right doctor.",
    icon: "calendarCheck",
  },
  {
    number: 2,
    title: "Registration",
    description: "Complete registration and paperwork.",
    icon: "clipboardCheck",
  },
  {
    number: 3,
    title: "Token / Queue",
    description: "Get your token and wait in queue.",
    icon: "users",
  },
  {
    number: 4,
    title: "Navigation",
    description: "Find the right department, room or counter.",
    icon: "navigation",
  },
  {
    number: 5,
    title: "Consultation",
    description: "Meet the doctor and understand the medical advice.",
    icon: "stethoscope",
  },
  {
    number: 6,
    title: "Diagnostics",
    description: "Get tests done and follow instructions.",
    icon: "flaskConical",
  },
  {
    number: 7,
    title: "Pharmacy",
    description: "Collect medicines from the hospital or outside.",
    icon: "pill",
  },
  {
    number: 8,
    title: "Admission / Discharge",
    description: "Handle admission formalities or the discharge process.",
    icon: "bedDouble",
  },
  {
    number: 9,
    title: "Reports",
    description: "Collect reports and understand the next steps.",
    icon: "fileText",
  },
  {
    number: 10,
    title: "Follow-up",
    description: "Plan the next visit, follow-ups and continued care.",
    icon: "calendarClock",
  },
];
