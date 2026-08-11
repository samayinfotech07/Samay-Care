import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section className="bg-surface py-10 lg:py-14">
      <Container className="max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded">
                {faq.question}
                <span className="shrink-0 text-teal transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Container>
    </section>
  );
}
