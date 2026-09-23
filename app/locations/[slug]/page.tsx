import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { locationPages } from "@/data/locationPages";
import { servicePages } from "@/data/servicePages";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((l) => l.slug === slug);
  if (!location) return {};

  const path = `/locations/${location.slug}`;

  return {
    title: { absolute: location.seoTitle },
    description: location.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: location.seoTitle,
      description: location.metaDescription,
      images: [{ ...socialImage, width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seoTitle,
      description: location.metaDescription,
      images: [socialImage],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locationPages.find((l) => l.slug === slug);
  if (!location) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location.h1,
    serviceType: "Hospital companion service",
    provider: { "@type": "Organization", name: "Samay Care" },
    areaServed: location.city,
    description: location.metaDescription,
  };

  const otherLocations = locationPages.filter((l) => l.slug !== location.slug);

  return (
    <div className="py-12 lg:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: location.h1 }]} />

        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3 py-1 text-xs font-semibold text-teal-dark">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location.city}
        </span>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{location.h1}</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">{location.intro}</p>

        <div className="mt-8">
          <Button href="/#prelaunch-form" size="lg">
            Request a CareBuddy &rarr;
          </Button>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">Our services</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-medium text-teal hover:text-teal-dark">
                  {s.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">Other Delhi NCR locations</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {otherLocations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="font-medium text-teal hover:text-teal-dark">
                  {l.city}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            Not in Delhi NCR?{" "}
            <Link href="/cities" className="font-medium text-teal hover:text-teal-dark">
              Tell us where you are
            </Link>
            .
          </p>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </Container>
    </div>
  );
}
