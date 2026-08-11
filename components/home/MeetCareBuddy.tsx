import { MapPin, MessageCircle, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { meetCareBuddyPillars } from "@/data/meetCareBuddyPillars";

const icons = { userCheck: UserCheck, mapPin: MapPin, messageCircle: MessageCircle };

export function MeetCareBuddy() {
  return (
    <section id="meet-carebuddy" className="bg-surface py-10 lg:py-14">
      <Container>
        <SectionHeading
          title="Meet your CareBuddy."
          subtitle="A trusted person on the ground who helps your loved one navigate the healthcare journey while keeping the family informed."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {meetCareBuddyPillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <div key={pillar.title} className="rounded-2xl bg-white p-6 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light">
                  <Icon className="h-7 w-7 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
