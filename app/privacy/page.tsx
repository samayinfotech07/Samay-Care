import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Samay Care collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy",
    description: "How Samay Care collects, uses, and protects your personal information.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "How Samay Care collects, uses, and protects your personal information.",
    images: [socialImage],
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-text">
          <p>
            This policy covers samaycare.com and the Samay Care booking platform at
            care.samaycare.com, both operated by{" "}
            <strong className="text-navy">Samay Invotech Private Limited</strong> (&ldquo;Samay Care&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). It explains what personal information we collect, why, and how to
            exercise your rights over it.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy">1. What we collect</h2>
            <p className="mt-2">On this website, if you submit our interest form, we collect your name, mobile
              number, city, optional email address, and the type of assistance you&rsquo;re
              interested in.
            </p>
            <p className="mt-2">
              If you book through our platform, we also collect: account details (name, email,
              phone) used to sign you in; booking details (service chosen, date and time, and who
              the visit is for); and the details needed to register a hospital appointment on your
              behalf, such as date of birth, contact number and address — the same information a
              hospital would ask you to provide if you registered yourself. If you grant location
              access during an active visit, we use it only to show your CareBuddy&rsquo;s estimated
              arrival; denying it does not stop you from using the service.
            </p>
            <p className="mt-2">
              We do not collect medical history, clinical records, or government ID numbers
              (such as Aadhaar) as a standard part of using Samay Care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">2. Why we collect it</h2>
            <p className="mt-2">
              We use this information to deliver the CareBuddy assistance you book, coordinate your
              appointment with the hospital, process payment for our assistance fee, communicate
              with you about your booking, understand demand in cities we haven&rsquo;t yet launched
              in, and — only where you&rsquo;ve agreed to receive them — send you relevant updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">3. Who sees your information</h2>
            <p className="mt-2">
              Your assigned CareBuddy can see the details needed to assist you during your visit —
              this access ends once your visit is complete. We never share your clinical records,
              payment details, or identity documents with your CareBuddy. Where needed to register
              or coordinate your visit, relevant details are shared with the hospital, as they would
              be if you registered yourself.
            </p>
            <p className="mt-2">
              We also share information with service providers who help us operate Samay Care: our
              email delivery provider, our analytics provider (Google Analytics, on this website),
              and — once online payment is enabled — our payment processor, to process the
              assistance fee only. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">4. How we protect it</h2>
            <p className="mt-2">
              We encrypt data in transit, restrict access to sensitive information to those who
              need it to do their job, log and audit that access, and require multi-factor
              authentication for our own administrative access to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">5. How long we keep it</h2>
            <p className="mt-2">
              We keep personal information only for as long as it&rsquo;s needed for the purpose it
              was collected, or as required by law, after which it is deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">6. Your rights</h2>
            <p className="mt-2">
              Under India&rsquo;s Digital Personal Data Protection Act, 2023, you have the right to
              access, correct, and request deletion of your personal information, and to withdraw
              consent you&rsquo;ve previously given where our use of it is based on your consent. To
              exercise any of these rights, or for any privacy-related question, contact us at{" "}
              <a href="mailto:hello@samaycare.com" className="font-medium text-teal hover:text-teal-dark">
                hello@samaycare.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">7. Children</h2>
            <p className="mt-2">
              Samay Care is intended to be used by adults booking assistance for themselves or a
              family member. We do not knowingly collect personal information directly from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">8. Changes to this policy</h2>
            <p className="mt-2">
              We may update this policy as Samay Care&rsquo;s service develops. We will post the
              updated policy here with a new &ldquo;last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">9. Contact</h2>
            <p className="mt-2">
              For any privacy request or question, reach us via our{" "}
              <Link href="/contact" className="font-medium text-teal hover:text-teal-dark">
                Contact Us
              </Link>{" "}
              page or at{" "}
              <a href="mailto:hello@samaycare.com" className="font-medium text-teal hover:text-teal-dark">
                hello@samaycare.com
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
