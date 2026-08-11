import Image from "next/image";
import { Radio, UserCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiationPillars } from "@/data/differentiation";

const icons = { userCheck: UserCheck, users: Users, radio: Radio };

export function TechnologySection() {
  return (
    <section className="py-10 lg:py-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            title="More than a companion. More than an app."
            subtitle="Technology keeps everyone connected. CareBuddy keeps someone there."
          />

          <ul className="mt-6 space-y-5">
            {differentiationPillars.map((pillar) => {
              const Icon = icons[pillar.icon];
              return (
                <li key={pillar.title} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-light">
                    <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-text-muted">{pillar.description}</p>
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
  const journey = ["Patient", "CareBuddy", "Family"];

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
      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-navy" aria-hidden="true">
        {journey.map((node, index) => (
          <div key={node} className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-white px-3 py-1.5">{node}</span>
            {index < journey.length - 1 ? <span className="text-teal">&harr;</span> : null}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-text-muted">Samay Care connects the healthcare journey.</p>
    </div>
  );
}
