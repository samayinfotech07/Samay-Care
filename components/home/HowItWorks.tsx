import { Car, Heart, Phone, ShieldCheck, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { howItWorksSteps } from "@/data/steps";

const icons = { phone: Phone, userCheck: UserCheck, car: Car, shieldCheck: ShieldCheck, heart: Heart };

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 lg:py-14">
      <Container>
        <SectionHeading title="How Booking a CareBuddy Works" />

        <div className="mt-8 -mx-6 flex snap-x gap-8 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {howItWorksSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <div key={step.number} className="relative min-w-[170px] snap-start text-center lg:min-w-0">
                {index < howItWorksSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+34px)] top-7 hidden h-px w-[calc(100%-68px)] bg-border lg:block"
                  />
                ) : null}
                <div className="relative mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-light">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -left-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-dark text-[10px] font-semibold text-white">
                    {step.number.replace(/^0/, "")}
                  </span>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-text-muted">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
