import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of Samay Care and the CareBuddy assistance service.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: "/terms",
    title: "Terms & Conditions",
    description: "The terms governing use of Samay Care and the CareBuddy assistance service.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions",
    description: "The terms governing use of Samay Care and the CareBuddy assistance service.",
    images: [socialImage],
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-text">
          <p>
            Samay Care and the CareBuddy assistance service are operated by{" "}
            <strong className="text-navy">Samay Invotech Private Limited</strong> (&ldquo;Samay Care&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms apply to this website (samaycare.com) and to the Samay Care
            booking platform (care.samaycare.com). By using either, you agree to the following.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy">1. What Samay Care is</h2>
            <p className="mt-2">
              Samay Care is a healthcare convenience platform. A <strong className="text-navy">CareBuddy</strong>{" "}
              is a trained, verified, non-clinical healthcare assistance professional who can meet
              you at the hospital or accompany you from home, and help with the practical side of a
              hospital visit — registration, navigation, queues, and keeping your family informed.
            </p>
            <p className="mt-2">
              A CareBuddy is <strong className="text-navy">not</strong> a doctor, nurse, or medical
              professional, and does not provide medical advice, diagnosis, or treatment. All
              clinical decisions remain with qualified healthcare professionals at the hospital.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">2. Service area and availability</h2>
            <p className="mt-2">
              Samay Care is currently available in Delhi NCR. We are expanding to other Indian
              cities over time; submitting your interest for a city where we have not yet launched
              does not create a booking or guarantee a launch date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">3. Booking a CareBuddy</h2>
            <p className="mt-2">
              Bookings are made through our booking platform at{" "}
              <a href="https://care.samaycare.com" className="font-medium text-teal hover:text-teal-dark">
                care.samaycare.com
              </a>
              . As part of the assistance you book, your CareBuddy may help register or coordinate
              your appointment directly in the hospital&rsquo;s own system. This is a practical,
              non-clinical coordination service — it is not a guaranteed booking, and remains
              subject to the hospital&rsquo;s own availability and processes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">4. Fees and payment</h2>
            <p className="mt-2">
              You pay Samay Care only for the <strong className="text-navy">CareBuddy assistance fee</strong>,
              shown to you before you confirm a booking, plus applicable GST (currently 18%). We are
              enabling online payment in phases; where it is not yet available for your booking, our
              team will contact you to arrange payment.
            </p>
            <p className="mt-2">
              <strong className="text-navy">
                Samay Care does not collect, hold, or process payment for any hospital charge
              </strong>{" "}
              — doctor&rsquo;s fees, diagnostics, medicines, or any other hospital bill. Those are
              paid by you directly to the hospital or provider, exactly as they would be without a
              CareBuddy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">5. Cancellations and refunds</h2>
            <p className="mt-2">
              Cancelling a booking may incur a cancellation charge depending on how much notice you
              give before your scheduled visit; our current Refund & Cancellation Policy is shown to
              you on the booking platform before you confirm. The following always applies,
              regardless of notice:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                If Samay Care or your CareBuddy is unable to deliver the assistance you booked
                through no fault of yours, you are entitled to a full refund of the assistance fee.
              </li>
              <li>
                Exceptional circumstances outside the standard policy may be reviewed and approved
                at Samay Care&rsquo;s discretion, including after your scheduled visit time.
              </li>
              <li>
                Every refund is reviewed and approved by a member of our finance team other than
                whoever handled your booking.
              </li>
              <li>
                Once a refund is approved, banks typically take 5–7 working days to credit it back
                to your original payment method. We will not describe a refund as complete until
                your bank has confirmed it.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">6. Your responsibilities</h2>
            <p className="mt-2">
              You agree to provide accurate information when booking (including who the visit is
              for), to be reachable and available around the scheduled visit time, and to treat your
              CareBuddy with respect. Samay Care may decline or cancel a booking that appears
              fraudulent, abusive, or outside the scope of a non-clinical assistance service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">7. Limitation of liability</h2>
            <p className="mt-2">
              Samay Care and your CareBuddy provide non-clinical coordination and companionship only.
              We are not responsible for the clinical care, treatment, or medical outcomes provided
              by any hospital or healthcare professional — that responsibility remains with the
              treating hospital and its clinical staff.
            </p>
            <p className="mt-2">
              <strong className="text-navy">
                For medical emergencies, contact emergency medical services or your hospital
                directly
              </strong>{" "}
              — Samay Care is not an emergency response service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">8. Changes to these terms</h2>
            <p className="mt-2">
              We may update these terms as Samay Care&rsquo;s service develops. We will post the
              updated terms here with a new &ldquo;last updated&rdquo; date; continuing to use Samay Care after
              a change means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">9. Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of India, and any dispute arising from them is
              subject to the jurisdiction of the competent courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">10. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to us via our{" "}
              <Link href="/contact" className="font-medium text-teal hover:text-teal-dark">
                Contact Us
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
