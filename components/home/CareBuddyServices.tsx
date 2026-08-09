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
import { Card } from "@/components/ui/Card";
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careBuddyServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Card key={service.title} as="article">
                <button
                  type="button"
                  className="flex w-full flex-col items-start rounded-2xl p-6 text-left transition-colors hover:bg-teal-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  onClick={() => requestAssistance(service.title, service.assistanceType)}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-light">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-muted">{service.description}</p>
                  <span className="mt-3 text-sm font-medium text-teal">Request this assistance &rarr;</span>
                </button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
