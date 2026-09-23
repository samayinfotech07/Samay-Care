import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { locationPages } from "@/data/locationPages";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

const otherCities = ["Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur"];

export const metadata: Metadata = {
  title: { absolute: "Samay Care Across India | Request a CareBuddy in Your City" },
  description:
    "Samay Care is launching first in Delhi NCR and accepts requests from other Indian cities. Tell us where you need a CareBuddy and we'll explore availability.",
  alternates: { canonical: "/cities" },
  openGraph: {
    type: "website",
    url: "/cities",
    title: "Samay Care Across India | Request a CareBuddy in Your City",
    description:
      "Samay Care is launching first in Delhi NCR and accepts requests from other Indian cities. Tell us where you need a CareBuddy and we'll explore availability.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samay Care Across India | Request a CareBuddy in Your City",
    description:
      "Samay Care is launching first in Delhi NCR and accepts requests from other Indian cities. Tell us where you need a CareBuddy and we'll explore availability.",
    images: [socialImage],
  },
};

export default function CitiesPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Need a CareBuddy in Another City?" }]} />

        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Need a CareBuddy in Another City?
        </h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          Samay Care is currently focused on Delhi NCR. If you need practical support during a hospital
          visit in another Indian city, you can still submit a request. As our CareBuddy network expands,
          we&apos;ll use these requests to understand where families need support next.
        </p>

        <div className="mt-8">
          <Button href="/#prelaunch-form" size="lg">
            Tell Us Where You Are &rarr;
          </Button>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">Launching first in Delhi NCR</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {locationPages.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="font-medium text-teal hover:text-teal-dark">
                  {l.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">Requests welcome from</h2>
          <p className="mt-3 text-sm leading-6 text-text-muted">{otherCities.join(", ")}, and other Indian cities.</p>
          <p className="mt-4 text-xs text-text-muted">
            We don&apos;t yet have service coverage in these cities — submitting a request helps us
            prioritize where to launch next.
          </p>
        </div>
      </Container>
    </div>
  );
}
