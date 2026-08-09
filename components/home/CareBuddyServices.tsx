"use client";

import {
  BedDouble,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  FileSearch,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careBuddyServices } from "@/data/services";
import { track } from "@/lib/analytics";
import { PRESELECT_ASSISTANCE_EVENT } from "@/lib/events";
import type { AssistanceType } from "@/lib/types";

const icons: Record<string, typeof ClipboardList> = {
  clipboardList: ClipboardList,
  calendarCheck: CalendarCheck,
  fileSearch: FileSearch,
  pill: Pill,
  shieldCheck: ShieldCheck,
  bedDouble: BedDouble,
  calendarClock: CalendarClock,
};

function requestAssistance(title: string, assistanceType: AssistanceType) {
  track("service_card_click", { service: title });
  track("service_interest_selected", { assistanceType });
  window.dispatchEvent(
    new CustomEvent(PRESELECT_ASSISTANCE_EVENT, { detail: { assistanceType } })
  );
  document.getElementById("prelaunch-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CareBuddyServices() {
  return (
    <section id="carebuddy-services" className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What CareBuddy Handles"
          title="Your CareBuddy Handles the Hassle."
          subtitle="Non-clinical coordination, so you can focus on your health. Clinical decisions always remain with qualified healthcare professionals."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {careBuddyServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <button
                key={service.title}
                type="button"
                className="flex w-[135px] flex-col items-center gap-2 rounded-2xl bg-teal-soft p-4 text-center transition-colors hover:bg-teal-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={() => requestAssistance(service.title, service.assistanceType)}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{service.title}</span>
                <span className="sr-only"> {service.description} Request this assistance.</span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
