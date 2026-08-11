export type IpdJourneyStageIcon =
  | "clipboardCheck"
  | "building2"
  | "flaskConical"
  | "stethoscope"
  | "pill"
  | "fileText"
  | "bell"
  | "logOut"
  | "calendarClock";

export type IpdJourneyStage = {
  number: number;
  title: string;
  description: string;
  icon: IpdJourneyStageIcon;
  isFamilyUpdate?: boolean;
};

export const ipdJourneyStages: IpdJourneyStage[] = [
  {
    number: 1,
    title: "Admission",
    description: "Complete admission formalities and get settled into the hospital journey.",
    icon: "clipboardCheck",
  },
  {
    number: 2,
    title: "Room / Dept. Coordination",
    description: "Navigate rooms, departments and the next required steps.",
    icon: "building2",
  },
  {
    number: 3,
    title: "Diagnostics",
    description: "Coordinate diagnostic tests and help navigate the required departments.",
    icon: "flaskConical",
  },
  {
    number: 4,
    title: "Consultations",
    description: "Help coordinate consultations and keep track of the healthcare journey.",
    icon: "stethoscope",
  },
  {
    number: 5,
    title: "Pharmacy",
    description: "Coordinate pharmacy-related tasks and medicines as required.",
    icon: "pill",
  },
  {
    number: 6,
    title: "Reports",
    description: "Collect relevant reports and help keep the family informed.",
    icon: "fileText",
  },
  {
    number: 7,
    title: "Family Updates",
    description: "Keep family members informed about important journey updates.",
    icon: "bell",
    isFamilyUpdate: true,
  },
  {
    number: 8,
    title: "Discharge",
    description: "Help navigate discharge formalities, documents and next steps.",
    icon: "logOut",
  },
  {
    number: 9,
    title: "Follow-up",
    description: "Keep track of follow-up requirements and what comes next.",
    icon: "calendarClock",
  },
];
