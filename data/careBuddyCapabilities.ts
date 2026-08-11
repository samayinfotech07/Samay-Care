export type CareBuddyCapabilityIcon = "handshake" | "route" | "bellRing";

export type CareBuddyCapability = {
  key: "accompany" | "navigate" | "update";
  title: string;
  headline: string;
  description: string;
  icon: CareBuddyCapabilityIcon;
  emphasize?: boolean;
};

export const careBuddyCapabilities: CareBuddyCapability[] = [
  {
    key: "accompany",
    title: "Accompany",
    headline: "Be there when you can't.",
    description:
      "Your CareBuddy can meet your loved one at the hospital or accompany them from home, depending on the service booked.",
    icon: "handshake",
  },
  {
    key: "navigate",
    title: "Navigate",
    headline: "Make the hospital journey easier.",
    description:
      "From registration and queues to finding departments, diagnostics, pharmacy and reports, your CareBuddy helps coordinate the non-clinical parts of the journey.",
    icon: "route",
  },
  {
    key: "update",
    title: "Update",
    headline: "Keep the family in the loop.",
    description:
      "Even when you're miles away, you can stay connected to important updates from your loved one's healthcare journey.",
    icon: "bellRing",
    emphasize: true,
  },
];

export const accompanyModes = ["Meet at Hospital", "Accompany from Home"] as const;

export const navigateJourneyChips = [
  "Registration",
  "Token",
  "Department",
  "Diagnostics",
  "Pharmacy",
  "Reports",
] as const;

export const journeyUpdatePreview = [
  { label: "CareBuddy Arrived", status: "done" },
  { label: "Registration Completed", status: "done" },
  { label: "Consultation Completed", status: "done" },
  { label: "Diagnostics", status: "current" },
  { label: "Reports", status: "upcoming" },
  { label: "Follow-up", status: "upcoming" },
] as const;
