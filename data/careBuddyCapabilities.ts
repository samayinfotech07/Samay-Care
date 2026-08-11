export type CareBuddyCapabilityIcon = "users" | "mapPin" | "smartphone";

export type CareBuddyCapability = {
  key: "accompany" | "navigate" | "update";
  title: string;
  headline: string;
  description: string;
  icon: CareBuddyCapabilityIcon;
};

export const careBuddyCapabilities: CareBuddyCapability[] = [
  {
    key: "accompany",
    title: "Accompany",
    headline: "Be there when you can't.",
    description:
      "Your CareBuddy can meet your loved one at the hospital or accompany them from home, depending on the service booked.",
    icon: "users",
  },
  {
    key: "navigate",
    title: "Navigate",
    headline: "Make the hospital journey easier.",
    description:
      "From registration and queues to finding departments, diagnostics, pharmacy and reports, your CareBuddy helps coordinate the non-clinical parts of the journey.",
    icon: "mapPin",
  },
  {
    key: "update",
    title: "Update",
    headline: "Keep the family in the loop.",
    description:
      "Even when you're miles away, you can stay connected to important updates from your loved one's healthcare journey.",
    icon: "smartphone",
  },
];

export type AccompanyModeIcon = "pin" | "home";

export const accompanyModes: { label: string; icon: AccompanyModeIcon }[] = [
  { label: "Meet at Hospital", icon: "pin" },
  { label: "Accompany from Home", icon: "home" },
];

export type NavigateStepIcon =
  | "clipboardCheck"
  | "ticket"
  | "building2"
  | "flaskConical"
  | "pill"
  | "fileText";

export const navigateJourneySteps: { label: string; icon: NavigateStepIcon }[] = [
  { label: "Registration", icon: "clipboardCheck" },
  { label: "Token", icon: "ticket" },
  { label: "Department", icon: "building2" },
  { label: "Diagnostics", icon: "flaskConical" },
  { label: "Pharmacy", icon: "pill" },
  { label: "Reports", icon: "fileText" },
];

export type JourneyUpdateStatus = "done" | "current" | "upcoming";

export const journeyUpdatePreview: { label: string; time: string; status: JourneyUpdateStatus }[] = [
  { label: "CareBuddy Arrived", time: "09:15 AM", status: "done" },
  { label: "Registration Completed", time: "09:45 AM", status: "done" },
  { label: "Consultation Completed", time: "10:30 AM", status: "done" },
  { label: "Diagnostics", time: "In Progress", status: "current" },
  { label: "Reports", time: "Pending", status: "upcoming" },
  { label: "Follow-up", time: "Upcoming", status: "upcoming" },
];

export type ConnectionNodeIcon = "user" | "idCard" | "heart" | "users";
export type ConnectionTone = "solid" | "outline";

export const journeyConnectionNodes: { label: string; icon: ConnectionNodeIcon; tone: ConnectionTone }[] = [
  { label: "Patient", icon: "user", tone: "solid" },
  { label: "CareBuddy", icon: "idCard", tone: "solid" },
  { label: "Samay Care", icon: "heart", tone: "outline" },
  { label: "Family", icon: "users", tone: "solid" },
];
