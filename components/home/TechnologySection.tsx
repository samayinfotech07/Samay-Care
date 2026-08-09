import Image from "next/image";
import { Layers, Link2, Lock, Radio, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techFeatures } from "@/data/techFeatures";

const icons = { zap: Zap, radio: Radio, layoutGrid: Layers, link: Link2, lock: Lock };

export function TechnologySection() {
  return (
    <section className="py-10 lg:py-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            title="Technology That Enables Better Care"
            subtitle="Faster CareBuddy assignment, real-time updates and secure coordination."
          />

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {techFeatures.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-light">
                    <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
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
  const journey = ["Customer", "App", "Assignment", "CareBuddy", "Hospital"];

  return (
    <div>
      <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-3xl border border-border bg-surface">
        <Image
          src="/images/technology-wheelchair.jpg"
          alt="A CareBuddy assisting a patient in a wheelchair through a hospital corridor with directional signage"
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <ol className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-navy" aria-hidden="true">
        {journey.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-white px-3 py-1.5">{step}</span>
            {index < journey.length - 1 ? <span className="text-teal">&rarr;</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
