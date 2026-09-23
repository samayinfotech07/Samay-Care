import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: { absolute: "About Samay Care | Making Healthcare Convenient" },
  description:
    "Samay Care helps simplify the practical side of healthcare by connecting patients and families with CareBuddies for hospital visits, appointments and coordination.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Samay Care | Making Healthcare Convenient",
    description:
      "Samay Care helps simplify the practical side of healthcare by connecting patients and families with CareBuddies for hospital visits, appointments and coordination.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samay Care | Making Healthcare Convenient",
    description:
      "Samay Care helps simplify the practical side of healthcare by connecting patients and families with CareBuddies for hospital visits, appointments and coordination.",
    images: [socialImage],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Making Healthcare Convenient</h1>

        <div className="mt-6 space-y-4 text-base leading-7 text-text-muted">
          <p>
            Healthcare has become more advanced, but the journey around it can still be stressful. Patients
            and families spend valuable time navigating registrations, queues, departments, diagnostics,
            reports, medicines and paperwork — often while already anxious about a health concern.
          </p>
          <p>
            <strong className="text-navy">Samay Care</strong> is a healthcare convenience platform built by{" "}
            <strong className="text-navy">Samay Invotech Private Limited</strong> to make that journey more
            convenient. We connect patients and families with <strong className="text-navy">CareBuddies</strong> —
            trained, verified, non-clinical assistants who can meet them at the hospital or accompany them
            from home.
          </p>
          <p>
            Technology helps us coordinate the journey — assigning a CareBuddy, keeping requests organized,
            and keeping families informed. A real person is there when physical help matters.
          </p>
          <p className="text-lg font-semibold text-navy">
            Samay means time. Care needs no definition.
          </p>
          <p>Samay Care brings both together — Time. Care. Always.</p>
        </div>

        <div className="mt-8 rounded-2xl bg-teal-soft p-5 text-sm leading-6 text-text-muted">
          Samay Care is not a hospital, clinic, doctor marketplace, telemedicine provider, pharmacy,
          diagnostic laboratory or nursing agency. It&apos;s the healthcare convenience and coordination layer
          around the hospital journey — CareBuddies provide non-clinical assistance only; doctors and
          healthcare professionals provide clinical care.
        </div>

        <div className="mt-8">
          <Button href="/#prelaunch-form" size="lg">
            I&rsquo;m Interested &rarr;
          </Button>
        </div>

        <p className="mt-8 text-sm text-text-muted">
          Learn more about{" "}
          <Link href="/carebuddy" className="font-medium text-teal hover:text-teal-dark">
            what a CareBuddy does
          </Link>{" "}
          or read our{" "}
          <Link href="/faq" className="font-medium text-teal hover:text-teal-dark">
            FAQ
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
