export const bookingModes = [
  {
    id: "meet-at-hospital",
    icon: "hospital",
    title: "Meet at Hospital",
    description: "Your CareBuddy meets you at the hospital and assists you.",
  },
  {
    id: "accompany-from-home",
    icon: "home",
    title: "Accompany from Home",
    description: "Your CareBuddy comes to you and accompanies you to the hospital.",
  },
] as const;

export const heroTrustIndicators = [
  { icon: "users", line1: "Trained & Verified", line2: "CareBuddies" },
  { icon: "shieldCheck", line1: "Background Verified", line2: "for Your Safety" },
  { icon: "heart", line1: "Non-Clinical", line2: "Support" },
  { icon: "clock", line1: "Your Time,", line2: "Our Priority" },
] as const;
