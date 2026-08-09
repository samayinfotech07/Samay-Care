import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the Samay Care pre-launch website.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: pre-launch stage</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-text">
          <p>
            This website is operated by Samay Invotech Private Limited to introduce Samay Care and
            CareBuddy ahead of launch, and to collect interest from prospective customers. By using
            this website, you agree to the following.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy">Pre-launch stage</h2>
            <p className="mt-2">
              Samay Care is not yet operational in any city. Booking a CareBuddy is not currently
              available through this website. Submitting the interest form does not create a
              booking, reservation, or guarantee of service availability or launch date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Non-clinical service</h2>
            <p className="mt-2">
              CareBuddy is a trained, non-clinical assistance service. CareBuddies are not doctors,
              nurses, or medical professionals, and do not provide medical advice, diagnosis, or
              treatment. Clinical decisions remain with qualified healthcare professionals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Website content</h2>
            <p className="mt-2">
              Content on this website, including descriptions of future services, is provided for
              informational purposes and may change as Samay Care develops. We do not make
              guarantees about health outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent through the contact options on this website.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
