import { Briefcase, Globe, UserRound, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { audiences } from "@/data/audiences";

const icons = { userRound: UserRound, users: Users, briefcase: Briefcase, globe: Globe };

export function AudienceSection() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Who We're Building For" title="Designed for every part of your family." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = icons[audience.icon];
            return (
              <Card key={audience.title} className="p-6 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{audience.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{audience.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
