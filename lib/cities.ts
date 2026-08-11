/**
 * Scaffold for future city-specific landing pages (e.g. /mumbai). Phase 1
 * ships only the homepage — this config exists so a future
 * app/[citySlug]/page.tsx can render city variants without duplicating the
 * page structure. Not wired into any route yet. Slugs match the flat
 * per-city routes suggested in docs/SAMAY_CARE_PHASE1_WEBSITE_V2.md §34.
 */
export type CityConfig = {
  slug: string;
  city: string;
  launchStatus: "coming-soon" | "planned";
  headline: string;
};

export const cityConfigs: CityConfig[] = [
  { slug: "delhi", city: "Delhi", launchStatus: "coming-soon", headline: "Samay Care is coming to Delhi" },
  { slug: "mumbai", city: "Mumbai", launchStatus: "coming-soon", headline: "Samay Care is coming to Mumbai" },
  { slug: "bengaluru", city: "Bengaluru", launchStatus: "coming-soon", headline: "Samay Care is coming to Bengaluru" },
  { slug: "hyderabad", city: "Hyderabad", launchStatus: "planned", headline: "Samay Care is coming to Hyderabad" },
  { slug: "pune", city: "Pune", launchStatus: "planned", headline: "Samay Care is coming to Pune" },
  { slug: "chennai", city: "Chennai", launchStatus: "planned", headline: "Samay Care is coming to Chennai" },
];
