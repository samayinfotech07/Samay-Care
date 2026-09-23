import type { MetadataRoute } from "next";
import { servicePages } from "@/data/servicePages";
import { locationPages } from "@/data/locationPages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samaycare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/privacy",
    "/terms",
    "/poll",
    "/about",
    "/carebuddy",
    "/how-it-works",
    "/faq",
    "/cities",
    ...servicePages.map((s) => `/services/${s.slug}`),
    ...locationPages.map((l) => `/locations/${l.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
