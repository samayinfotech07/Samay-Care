import { Car, Heart, Phone, ShieldCheck, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { howItWorksSteps } from "@/data/steps";

const icons = { phone: Phone, userCheck: UserCheck, car: Car, shieldCheck: ShieldCheck, heart: Heart };

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="How Booking a CareBuddy Works"
          subtitle="Simple to request. Easy to understand. Human when it matters."
        />

        <div className="mt-16 -mx-6 flex snap-x gap-8 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {howItWorksSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <div key={step.number} className="relative min-w-[180px] snap-start text-center lg:min-w-0">
                {index < howItWorksSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-border lg:block"
                  />
                ) : null}
                <div className="relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-light">
                  <Icon className="h-7 w-7 text-teal" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -left-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-dark text-[11px] font-semibold text-white">
                    {step.number.replace(/^0/, "")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
