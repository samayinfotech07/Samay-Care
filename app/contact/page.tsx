import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: "Contact Us",
  description: "How to reach Samay Invotech Private Limited about Samay Care and CareBuddy.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Us",
    description: "How to reach Samay Invotech Private Limited about Samay Care and CareBuddy.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description: "How to reach Samay Invotech Private Limited about Samay Care and CareBuddy.",
    images: [socialImage],
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-base leading-7 text-text-muted">
          Samay Care is operated by Samay Invotech Private Limited. Reach us using any of the
          options below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="tel:+917210000700"
            className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-teal/40 hover:bg-teal-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light">
              <Phone className="h-5 w-5 text-teal" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-navy">Call us</span>
              <span className="block text-sm text-text-muted">+91 72100 00700</span>
            </span>
          </a>

          <a
            href="mailto:hello@samaycare.com"
            className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-teal/40 hover:bg-teal-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-light">
              <Mail className="h-5 w-5 text-teal" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-navy">Email us</span>
              <span className="block text-sm text-text-muted">hello@samaycare.com</span>
            </span>
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-navy">Already have a booking?</p>
              <p className="mt-1 text-sm leading-6 text-text-muted">
                Manage an existing booking or start a new one at{" "}
                <a href="https://care.samaycare.com" className="font-medium text-teal hover:text-teal-dark">
                  care.samaycare.com
                </a>
                . For general questions, use the options above or our{" "}
                <Link href="/#prelaunch-form" className="font-medium text-teal hover:text-teal-dark">
                  interest form
                </Link>{" "}
                if you&rsquo;re outside Delhi NCR.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-teal-soft p-5 text-sm leading-6 text-text">
          <strong className="font-semibold text-navy">CareBuddy is a non-clinical assistance service.</strong>{" "}
          For medical emergencies, contact emergency medical services or your hospital immediately —
          do not wait for a response here.
        </div>
      </Container>
    </div>
  );
}
