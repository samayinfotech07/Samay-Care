/**
 * Drives the header city selector and every city-aware CTA (CityAwareCta,
 * Hero, FinalCTA, BookingModes, CareBuddyServices, PreLaunchForm). Delhi NCR
 * is the only live city — booking there redirects to the real platform at
 * care.samaycare.com (see lib/care-booking.ts). Every other city still goes
 * through the pre-launch interest form while that city isn't live.
 */
export type CityOption = {
  slug: string;
  label: string;
  isLive: boolean;
};

export const cityOptions: CityOption[] = [
  { slug: "delhi-ncr", label: "Delhi NCR", isLive: true },
  { slug: "mumbai", label: "Mumbai", isLive: false },
  { slug: "bengaluru", label: "Bengaluru", isLive: false },
  { slug: "hyderabad", label: "Hyderabad", isLive: false },
  { slug: "chennai", label: "Chennai", isLive: false },
  { slug: "pune", label: "Pune", isLive: false },
  { slug: "kolkata", label: "Kolkata", isLive: false },
  { slug: "ahmedabad", label: "Ahmedabad", isLive: false },
  { slug: "other", label: "Other city", isLive: false },
];

export const DEFAULT_CITY_SLUG = "delhi-ncr";

export function getCityOption(slug: string): CityOption {
  return cityOptions.find((c) => c.slug === slug) ?? cityOptions[0];
}
