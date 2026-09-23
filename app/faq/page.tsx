import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/home/FaqSection";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: { absolute: "Samay Care FAQ | Hospital Companion & CareBuddy Questions" },
  description:
    "Find answers about Samay Care, CareBuddies, hospital companion services, bookings, coverage, what CareBuddies do and what they do not provide.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: "/faq",
    title: "Samay Care FAQ | Hospital Companion & CareBuddy Questions",
    description:
      "Find answers about Samay Care, CareBuddies, hospital companion services, bookings, coverage, what CareBuddies do and what they do not provide.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samay Care FAQ | Hospital Companion & CareBuddy Questions",
    description:
      "Find answers about Samay Care, CareBuddies, hospital companion services, bookings, coverage, what CareBuddies do and what they do not provide.",
    images: [socialImage],
  },
};

export default function FaqPage() {
  return (
    <div className="pt-12 lg:pt-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Samay Care FAQ</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          Answers about Samay Care, CareBuddies, hospital companion assistance, coverage and what CareBuddies
          do and don&apos;t provide.
        </p>
      </Container>
      <FaqSection />
    </div>
  );
}
