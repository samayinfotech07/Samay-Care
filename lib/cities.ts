/**
 * Scaffold for future city-specific landing pages (e.g. /samay-care-delhi).
 * Phase 1 ships only the homepage — this config exists so a future
 * app/[citySlug]/page.tsx can render city variants without duplicating the
 * page structure. Not wired into any route yet.
 */
export type CityConfig = {
  slug: string;
  city: string;
  launchStatus: "coming-soon" | "planned";
  headline: string;
};

export const cityConfigs: CityConfig[] = [
  { slug: "delhi-ncr", city: "Delhi NCR", launchStatus: "coming-soon", headline: "Samay Care is coming to Delhi NCR" },
  { slug: "mumbai", city: "Mumbai", launchStatus: "coming-soon", headline: "Samay Care is coming to Mumbai" },
  { slug: "bengaluru", city: "Bengaluru", launchStatus: "coming-soon", headline: "Samay Care is coming to Bengaluru" },
  { slug: "hyderabad", city: "Hyderabad", launchStatus: "planned", headline: "Samay Care is coming to Hyderabad" },
];
