import type { Metadata } from "next";
import Link from "next/link";
import { Heart, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { servicePages } from "@/data/servicePages";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: { absolute: "CareBuddy | Your Hospital Visit Companion | Samay Care" },
  description:
    "A CareBuddy helps patients and families manage the practical side of hospital visits—from navigation and queues to appointments, paperwork and updates.",
  alternates: { canonical: "/carebuddy" },
  openGraph: {
    type: "website",
    url: "/carebuddy",
    title: "CareBuddy | Your Hospital Visit Companion | Samay Care",
    description:
      "A CareBuddy helps patients and families manage the practical side of hospital visits—from navigation and queues to appointments, paperwork and updates.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareBuddy | Your Hospital Visit Companion | Samay Care",
    description:
      "A CareBuddy helps patients and families manage the practical side of hospital visits—from navigation and queues to appointments, paperwork and updates.",
    images: [socialImage],
  },
};

const pillars = [
  {
    icon: MapPin,
    title: "Accompany",
    description: "Be there with the patient — either meeting them at the hospital, or accompanying them from home.",
  },
  {
    icon: ShieldCheck,
    title: "Navigate",
    description: "Help move through registration, queues, departments, diagnostics and pharmacy counters.",
  },
  {
    icon: MessageCircle,
    title: "Update",
    description: "Keep the family informed at relevant points, especially when they can't be physically present.",
  },
];

export default function CareBuddyPage() {
  return (
    <div className="py-12 lg:py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "CareBuddy" }]} />

        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Meet Your CareBuddy</h1>
        <p className="mt-4 text-base leading-7 text-text-muted">
          A CareBuddy is a trained, verified, non-clinical human assistant who helps patients and families
          navigate the practical side of a hospital visit. Think of the relationship the way ride-hailing
          apps connect you with a driver, or food-delivery apps connect you with a rider —{" "}
          <strong className="text-navy">Samay Care connects you with a CareBuddy.</strong>
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border bg-white p-5 text-center">
              <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal">
                <pillar.icon className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
              </span>
              <h2 className="mt-3 text-[15px] font-semibold text-navy">{pillar.title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-semibold text-navy">Two ways to book a CareBuddy</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-[15px] font-semibold text-navy">Meet at Hospital</h3>
            <p className="mt-1.5 text-sm leading-6 text-text-muted">
              Your CareBuddy meets you at the hospital and assists you through the visit.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-[15px] font-semibold text-navy">Accompany from Home</h3>
            <p className="mt-1.5 text-sm leading-6 text-text-muted">
              Your CareBuddy comes to you first, then accompanies you to the hospital and stays with you.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-teal-soft p-5">
          <Heart className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
          <p className="text-sm leading-6 text-text-muted">
            A CareBuddy is <strong className="text-navy">not</strong> a doctor or nurse and never performs
            clinical work. CareBuddies provide trained, verified, non-clinical assistance — clinical
            decisions, diagnosis and treatment always remain with qualified healthcare professionals.
          </p>
        </div>

        <div className="mt-8">
          <Button href="/#prelaunch-form" size="lg">
            Request a CareBuddy &rarr;
          </Button>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-navy">What a CareBuddy can help with</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-medium text-teal hover:text-teal-dark">
                  {s.h1}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            See <Link href="/how-it-works" className="font-medium text-teal hover:text-teal-dark">how booking a CareBuddy works</Link>{" "}
            or read the <Link href="/faq" className="font-medium text-teal hover:text-teal-dark">full FAQ</Link>.
          </p>
        </div>
      </Container>
    </div>
  );
}
