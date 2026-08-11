export type OpdJourneyStageIcon =
  | "calendarCheck"
  | "mapPin"
  | "clipboardCheck"
  | "stethoscope"
  | "flaskConical"
  | "pill"
  | "fileText"
  | "calendarClock";

export type OpdJourneyStage = {
  number: number;
  title: string;
  description: string;
  icon: OpdJourneyStageIcon;
  careBuddyAssists?: boolean;
};

export const opdJourneyStages: OpdJourneyStage[] = [
  {
    number: 1,
    title: "Book",
    description: "Schedule your appointment and request a CareBuddy.",
    icon: "calendarCheck",
  },
  {
    number: 2,
    title: "Arrive",
    description: "Meet your CareBuddy at the hospital or arrive together from home.",
    icon: "mapPin",
    careBuddyAssists: true,
  },
  {
    number: 3,
    title: "Register",
    description: "Complete registration, tokens and the initial hospital formalities.",
    icon: "clipboardCheck",
    careBuddyAssists: true,
  },
  {
    number: 4,
    title: "Consult",
    description: "Reach the right department and complete your consultation.",
    icon: "stethoscope",
  },
  {
    number: 5,
    title: "Diagnostics",
    description: "Navigate tests, diagnostic departments and the next steps.",
    icon: "flaskConical",
    careBuddyAssists: true,
  },
  {
    number: 6,
    title: "Pharmacy",
    description: "Coordinate medicines and pharmacy-related tasks.",
    icon: "pill",
  },
  {
    number: 7,
    title: "Reports",
    description: "Collect reports and keep the family informed.",
    icon: "fileText",
    careBuddyAssists: true,
  },
  {
    number: 8,
    title: "Follow-up",
    description: "Keep track of the next visit and follow-up requirements.",
    icon: "calendarClock",
  },
];
