import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { fetchPublicServices, formatMinutesBefore, formatGstPercent } from "@/lib/refundPolicy";

const socialImage = {
  url: "/images/samay-care-social-share.png",
  alt: "Samay Care — Your loved one is not alone. Neither are you.",
};

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Current cancellation tiers and refund terms for Samay Care bookings.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    type: "website",
    url: "/refund-policy",
    title: "Refund & Cancellation Policy",
    description: "Current cancellation tiers and refund terms for Samay Care bookings.",
    images: [{ ...socialImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy",
    description: "Current cancellation tiers and refund terms for Samay Care bookings.",
    images: [socialImage],
  },
};

// Cancellation tiers are live data an admin can change at any time — this
// route must re-check the API on every request, never serve a build-time
// snapshot. See lib/refundPolicy.ts.
export const dynamic = "force-dynamic";

export default async function RefundPolicyPage() {
  const services = await fetchPublicServices();

  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Refund & Cancellation Policy" }]} />
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Refund & Cancellation Policy
        </h1>
        <p className="mt-3 text-base leading-7 text-text-muted">
          This page covers the <strong className="text-navy">Samay Care assistance fee</strong> only.
          Hospital charges — doctor&rsquo;s fees, diagnostics, medicines — are paid by you directly
          to the hospital and refunded under the hospital&rsquo;s own rules; Samay Care never holds
          that money.
        </p>

        {services && services.length > 0 ? (
          <div className="mt-10 space-y-6">
            {services
              .filter((s) => s.cancellationTiers?.length > 0)
              .map((service) => (
                <div key={service.key} className="rounded-2xl border border-border bg-white p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-lg font-semibold text-navy">{service.name}</h2>
                    <p className="text-sm text-text-muted">
                      {service.currency === "INR" ? "₹" : `${service.currency} `}
                      {service.basePrice} + {formatGstPercent(service.rates.gstBasisPoints)} GST
                    </p>
                  </div>
                  {service.summary ? (
                    <p className="mt-1.5 text-sm leading-6 text-text-muted">{service.summary}</p>
                  ) : null}

                  <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
                    {service.cancellationTiers.map((tier, index) => (
                      <li
                        key={`${tier.minMinutesBefore}-${index}`}
                        className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                      >
                        <span className="flex items-center gap-2 text-text">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                          Cancel {formatMinutesBefore(tier.minMinutesBefore)}
                        </span>
                        <span className="font-semibold text-navy">{tier.percent}% refund</span>
                      </li>
                    ))}
                    <li className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                      <span className="flex items-center gap-2 text-text">
                        <AlertCircle className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                        After your scheduled start time
                      </span>
                      <span className="font-semibold text-navy">No refund</span>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-teal-soft p-6 text-sm leading-6 text-text">
            <p className="font-semibold text-navy">Current cancellation tiers are shown at booking.</p>
            <p className="mt-2">
              We weren&rsquo;t able to load the live cancellation ladder here right now. The exact
              terms for your booking are always shown on{" "}
              <a href="https://care.samaycare.com" className="font-medium text-teal hover:text-teal-dark">
                care.samaycare.com
              </a>{" "}
              before you confirm. The policy principles below always apply.
            </p>
          </div>
        )}

        <div className="mt-10 space-y-6 text-base leading-7 text-text">
          <section>
            <h2 className="text-xl font-semibold text-navy">Always true, regardless of the tier</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                If Samay Care or your CareBuddy is unable to deliver the assistance you booked —
                for example, the hospital cannot see the patient, or a CareBuddy does not arrive —
                you get a <strong className="text-navy">100% refund</strong> regardless of how much
                notice was given.
              </li>
              <li>
                Exceptional circumstances outside the standard tiers, including after your
                scheduled visit time, can be reviewed and approved by a Samay Care admin.
              </li>
              <li>
                Every refund is reviewed and approved by a member of our finance team other than
                whoever handled your booking.
              </li>
              <li>We do not describe a refund as complete until your bank has confirmed it — our
                payment provider marking it &ldquo;processed&rdquo; is not the same as the money
                reaching your account. Banks typically take 5–7 working days to credit a refund
                once it&rsquo;s sent.
              </li>
              <li>
                Refunds go back to the account you paid from. If that fails, we&rsquo;ll contact you
                to arrange it another way.
              </li>
            </ul>
          </section>
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Questions about a specific refund?{" "}
          <Link href="/contact" className="font-medium text-teal hover:text-teal-dark">
            Contact us
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
