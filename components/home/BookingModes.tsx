"use client";

import { Building2, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingModes } from "@/data/bookingModes";
import { track } from "@/lib/analytics";
import { PRESELECT_ASSISTANCE_EVENT } from "@/lib/events";
import type { AssistanceType } from "@/lib/types";

const icons = { hospital: Building2, home: Home };
const modeEvent = { "meet-at-hospital": "carebuddy_mode_meet_hospital", "accompany-from-home": "carebuddy_mode_home" } as const;
const modeAssistance: Record<string, AssistanceType> = {
  "meet-at-hospital": "meet-at-hospital",
  "accompany-from-home": "accompany-from-home",
};

export function BookingModes() {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <SectionHeading title="Meet at Hospital or Accompany from Home." />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {bookingModes.map((mode) => {
            const Icon = icons[mode.icon];
            return (
              <button
                key={mode.id}
                type="button"
                className="rounded-2xl border border-border bg-white p-6 text-left transition-colors hover:bg-teal-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={() => {
                  track(modeEvent[mode.id as keyof typeof modeEvent]);
                  window.dispatchEvent(
                    new CustomEvent(PRESELECT_ASSISTANCE_EVENT, {
                      detail: { assistanceType: modeAssistance[mode.id] },
                    })
                  );
                  document.getElementById("prelaunch-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light">
                  <Icon className="h-7 w-7 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{mode.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{mode.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-teal">Request this &rarr;</span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
