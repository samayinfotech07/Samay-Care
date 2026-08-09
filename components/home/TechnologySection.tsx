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
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-white p-6 sm:p-8"
      aria-hidden="true"
    >
      <div className="relative rounded-2xl border border-border bg-teal-soft p-6">
        <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-teal" />
        <div className="absolute bottom-8 right-10 h-2 w-2 rounded-full bg-navy" />
        <svg viewBox="0 0 300 160" className="h-32 w-full">
          <path
            d="M20 130 C 80 40, 180 150, 280 30"
            fill="none"
            stroke="#087F73"
            strokeWidth="3"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          <circle cx="20" cy="130" r="6" fill="#102B3A" />
          <circle cx="280" cy="30" r="6" fill="#087F73" />
        </svg>
        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-navy shadow-sm">
          <span className="h-2 w-2 rounded-full bg-teal" />
          CareBuddy on the way &middot; ETA 10 min
        </div>
        <p className="mt-2 text-[11px] text-text-muted">Conceptual visualization — not live location data.</p>
      </div>

      <ol className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-navy">
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
