"use client";

import { Clock, Heart, PlayCircle, Rocket, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookingModeCard } from "@/components/home/BookingModeCard";
import { HeroVisual } from "@/components/home/HeroVisual";
import { bookingModes, heroTrustIndicators } from "@/data/bookingModes";
import { track } from "@/lib/analytics";

const trustIcons = { users: Users, shieldCheck: ShieldCheck, heart: Heart, clock: Clock };

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-6 pb-10 lg:pt-8 lg:pb-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Pre-Launch — Coming to Your City Soon!
            </span>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[42px] xl:text-[48px]">
              Time matters in healthcare.
              <br />
              <span className="font-bold text-teal">We bring care on time.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
              Samay Care connects you with a trusted CareBuddy who assists you at the hospital or
              accompanies you from home &mdash; and handles the hassle.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {bookingModes.map((mode) => (
                <BookingModeCard key={mode.id} icon={mode.icon} title={mode.title} description={mode.description} />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button
                href="#prelaunch-form"
                size="lg"
                onClick={() => track("hero_interest_click", { location: "hero" })}
              >
                I&rsquo;m Interested &rarr;
              </Button>
              <a
                href="#how-it-works"
                onClick={() => track("how_it_works_click", { location: "hero" })}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-teal hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              >
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Watch How It Works
              </a>
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>

        <div className="fade-up mt-6 flex flex-col divide-y divide-border rounded-2xl border border-border bg-white p-4 shadow-[0_1px_2px_rgba(16,43,58,0.04)] sm:flex-row sm:divide-x sm:divide-y-0 sm:p-5">
          {heroTrustIndicators.map((item) => {
            const Icon = trustIcons[item.icon];
            return (
              <div key={item.line1} className="flex items-center gap-3 py-3 sm:flex-1 sm:justify-center sm:py-0">
                <Icon className="h-5 w-5 shrink-0 text-teal" strokeWidth={2} aria-hidden="true" />
                <p className="text-sm leading-5 text-text">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
