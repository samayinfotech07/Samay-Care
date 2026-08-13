import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Samay Care collects and uses the information you share with us during pre-launch.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy",
    description: "How Samay Care collects and uses the information you share with us during pre-launch.",
    images: [
      {
        url: "/images/samay-care-social-share.png",
        width: 1536,
        height: 1024,
        alt: "Samay Care — Your loved one is not alone. Neither are you.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "How Samay Care collects and uses the information you share with us during pre-launch.",
    images: [
      {
        url: "/images/samay-care-social-share.png",
        alt: "Samay Care — Your loved one is not alone. Neither are you.",
      },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: pre-launch stage</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-text">
          <p>
            Samay Care (a brand of Samay Invotech Private Limited) is currently in a pre-launch
            stage. This page explains, in plain language, what we collect through this website
            today and how we use it.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy">What we collect</h2>
            <p className="mt-2">
              When you submit the pre-launch interest form, we collect your name, mobile number,
              city, optional email address, and the type of assistance you&rsquo;re interested in.
              We do not ask for medical history or health records on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Why we collect it</h2>
            <p className="mt-2">
              We use this information only to understand demand across cities, to let you know
              when Samay Care launches near you, and to send you relevant updates about CareBuddy.
              We respect your privacy and only collect information needed to respond to your
              request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Who sees it</h2>
            <p className="mt-2">
              Your information is used internally by Samay Invotech Private Limited. We do not
              sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Your choices</h2>
            <p className="mt-2">
              You can ask us to stop contacting you or to delete your information at any time by
              writing to us through the contact options on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Changes to this policy</h2>
            <p className="mt-2">
              As Samay Care moves from pre-launch into full operation, this policy will be updated
              to reflect our data handling practices in detail, including any third-party
              processors we use.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
