import { Layers, Link2, Lock, Radio, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techFeatures } from "@/data/techFeatures";

const icons = { zap: Zap, radio: Radio, layoutGrid: Layers, link: Link2, lock: Lock };

export function TechnologySection() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Technology"
            title="Technology That Enables Better Care"
            subtitle="Our technology helps us connect customers with CareBuddies faster, keep everyone informed and make every healthcare journey easier to coordinate."
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {techFeatures.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-light">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-text-muted">{feature.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <TechnologyVisual />
      </Container>
    </section>
  );
}

function TechnologyVisual() {
  const journey = ["Customer", "Samay Care App", "Assignment Engine", "CareBuddy", "Hospital"];

  return (
    <div
      className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-gradient-to-b from-surface to-white p-8"
      aria-hidden="true"
    >
      <ol className="flex flex-col items-center gap-3">
        {journey.map((step, index) => (
          <li key={step} className="flex flex-col items-center gap-3">
            <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm">
              {step}
            </span>
            {index < journey.length - 1 ? (
              <span className="text-teal" aria-hidden="true">
                &darr;
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
