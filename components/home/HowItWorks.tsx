import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { howItWorksSteps } from "@/data/steps";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="How Booking a CareBuddy Works"
          subtitle="Simple to request. Easy to understand. Human when it matters."
        />

        <div className="mt-14 -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {howItWorksSteps.map((step, index) => (
            <div key={step.number} className="relative min-w-[240px] snap-start lg:min-w-0">
              {index < howItWorksSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-full top-6 hidden h-px w-6 bg-border lg:block"
                />
              ) : null}
              <div className="rounded-2xl border border-border bg-white p-6 h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-base font-semibold text-teal-dark">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
