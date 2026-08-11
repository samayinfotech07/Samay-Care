"use client";

import {
  BedDouble,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  FileSearch,
  MessageCircle,
  Pill,
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
  messageCircle: MessageCircle,
  bedDouble: BedDouble,
  calendarClock: CalendarClock,
};

function requestAssistance(title: string, assistanceType: AssistanceType) {
  track("service_card_click", { service: title });
  track("service_interest_selected", { assistanceType });
  track("assistance_type_selected", { assistanceType });
  window.dispatchEvent(
    new CustomEvent(PRESELECT_ASSISTANCE_EVENT, { detail: { assistanceType } })
  );
  document.getElementById("prelaunch-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CareBuddyServices() {
  return (
    <section id="carebuddy-services" className="bg-surface py-10 lg:py-14">
      <Container>
        <SectionHeading
          title="Your CareBuddy Handles the Hassle."
          maxWidthClassName="max-w-2xl sm:max-w-4xl"
        />

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {careBuddyServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <button
                key={service.title}
                type="button"
                className="flex flex-col items-center gap-2 rounded-2xl bg-teal-soft p-3 text-center transition-colors hover:bg-teal-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={() => requestAssistance(service.title, service.assistanceType)}
              >
                <Icon className="h-8 w-8 text-teal" strokeWidth={2} aria-hidden="true" />
                <span className="text-[13px] font-semibold leading-tight text-navy">{service.title}</span>
                <span className="sr-only"> {service.description} Request this assistance.</span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
