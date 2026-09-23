import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowItWorks } from "@/components/home/HowItWorks";

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
          Samay Care is in pre-launch — here&apos;s how requesting a CareBuddy will work as service becomes
          available in your city.
        </p>
      </Container>
      <HowItWorks />
      <Container className="max-w-3xl pb-12 lg:pb-16">
        <div className="rounded-2xl bg-teal-soft p-5 text-center">
          <p className="text-base font-semibold text-navy">Ready to be one of the first?</p>
          <div className="mt-4">
            <Button href="/#prelaunch-form">Request a CareBuddy &rarr;</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
