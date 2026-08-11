"use client";

import { Briefcase, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { partnerChannels } from "@/data/partners";
import { track } from "@/lib/analytics";

const icons = { users: Users, shieldCheck: ShieldCheck, briefcase: Briefcase };

export function PartnerCTA() {
  return (
    <section id="partner-with-us" className="py-10 lg:py-14">
      <Container className="text-center">
        <SectionHeading title="Healthcare convenience can reach families in more than one way." />

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {partnerChannels.map((channel) => {
            const Icon = icons[channel.icon];
            return (
              <div key={channel.title} className="rounded-2xl border border-border bg-white p-6">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{channel.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{channel.description}</p>
              </div>
            );
          })}
        </div>

        <Button
          href="#prelaunch-form"
          size="lg"
          className="mt-8"
          onClick={() => track("partner_cta_click")}
        >
          Partner with Samay Care
        </Button>
      </Container>
    </section>
  );
}
