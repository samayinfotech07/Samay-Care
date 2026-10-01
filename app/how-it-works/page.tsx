import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CityAwareCta } from "@/components/site/CityAwareCta";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: { absolute: "How Samay Care Works | Book a CareBuddy" },
  description:
    "See how Samay Care makes hospital visits easier: request a CareBuddy, share your visit details, get matched and receive practical support throughout the visit.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    type: "website",
    url: "/how-it-works",
    title: "How Samay Care Works | Book a CareBuddy",
    description:
      "See how Samay Care makes hospital visits easier: request a CareBuddy, share your visit details, get matched and receive practical support throughout the visit.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Samay Care Works | Book a CareBuddy",
    description:
      "See how Samay Care makes hospital visits easier: request a CareBuddy, share your visit details, get matched and receive practical support throughout the visit.",
    images: [socialImage],
  },
};

export default function HowItWorksPage() {
  return (
    <div className="pt-12 lg:pt-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How Samay Care Works" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">How Samay Care Works</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          Here&apos;s how booking a CareBuddy works in Delhi NCR. In other cities, you can still request
          a CareBuddy and we&apos;ll notify you as service becomes available.
        </p>
      </Container>
      <HowItWorks />
      <Container className="max-w-3xl pb-12 lg:pb-16">
        <div className="rounded-2xl bg-teal-soft p-5 text-center">
          <p className="text-base font-semibold text-navy">Ready to get started?</p>
          <div className="mt-4">
            <CityAwareCta location="how_it_works_page" notLiveLabel="Request a CareBuddy" size="md" />
          </div>
        </div>
      </Container>
    </div>
  );
}
