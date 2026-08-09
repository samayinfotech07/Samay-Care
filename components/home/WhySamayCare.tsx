import { BadgeCheck, Clock, HandHeart, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyReasons } from "@/data/whyReasons";

const icons = { clock: Clock, handHeart: HandHeart, badgeCheck: BadgeCheck, heartHandshake: HeartHandshake };

export function WhySamayCare() {
  return (
    <section id="why-samay-care" className="py-10 lg:py-14">
      <Container>
        <SectionHeading title="Why Samay Care?" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyReasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <div key={reason.title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div id="about-us" className="mt-10 rounded-3xl bg-navy px-8 py-10 text-center sm:px-16">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Our Story</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
            Healthcare is time-sensitive. When someone needs care, every minute matters &mdash; and
            families should not have to spend that time figuring out queues, counters, directions
            and paperwork.
          </p>
          <p className="mt-6 text-lg font-medium text-white">
            Samay means time. Care needs no definition.
          </p>
          <p className="mt-1 text-base text-white/75">Samay Care brings both together.</p>
          <p className="mt-4 text-xl font-semibold text-white">Time. Care. Always.</p>
        </div>
      </Container>
    </section>
  );
}
