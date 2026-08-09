import { Briefcase, Globe, UserRound, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { audiences } from "@/data/audiences";

const icons = { userRound: UserRound, users: Users, briefcase: Briefcase, globe: Globe };

export function AudienceSection() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <h2 className="sr-only">Who We&rsquo;re Building For</h2>
        <div className="flex flex-col divide-y divide-border rounded-2xl bg-teal-soft p-6 sm:flex-row sm:divide-x sm:divide-y-0 sm:p-8">
          {audiences.map((audience) => {
            const Icon = icons[audience.icon];
            return (
              <div key={audience.title} className="flex items-start gap-3 py-4 sm:flex-1 sm:px-4 sm:py-0">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{audience.title}</h3>
                  <p className="mt-0.5 text-sm leading-6 text-text-muted">{audience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
