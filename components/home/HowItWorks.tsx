import { Car, Heart, Phone, ShieldCheck, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { howItWorksSteps } from "@/data/steps";

const icons = { phone: Phone, userCheck: UserCheck, car: Car, shieldCheck: ShieldCheck, heart: Heart };

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-10 lg:py-14">
      <Container>
        <SectionHeading title="How Booking a CareBuddy Works" />

        {/* Mobile/tablet: vertical timeline — always fully visible, no scrolling. */}
        <div className="mt-8 flex flex-col lg:hidden">
          {howItWorksSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <div key={step.number} className="relative flex gap-4 pb-8 last:pb-0">
                {index < howItWorksSteps.length - 1 ? (
                  <span aria-hidden="true" className="absolute left-12 top-24 h-[calc(100%-84px)] w-px bg-border" />
                ) : null}
                <div className="relative inline-flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-teal-light">
                  <Icon className="h-11 w-11 text-teal" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -bottom-1 -left-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-dark text-[12px] font-semibold text-white">
                    {step.number.replace(/^0/, "")}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-text-muted">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal flow with connecting lines. */}
        <div className="mt-8 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <div key={step.number} className="relative text-center">
                {index < howItWorksSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+64px)] top-14 h-px w-[calc(100%-128px)] bg-border"
                  />
                ) : null}
                <div className="relative mx-auto inline-flex h-28 w-28 items-center justify-center rounded-full bg-teal-light">
                  <Icon className="h-12 w-12 text-teal" strokeWidth={2} aria-hidden="true" />
                  <span className="absolute -bottom-1 -left-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-dark text-[13px] font-semibold text-white">
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
