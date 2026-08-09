"use client";

import { CircleCheck, PlayCircle, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookingModeCard } from "@/components/home/BookingModeCard";
import { HeroVisual } from "@/components/home/HeroVisual";
import { bookingModes, heroTrustIndicators } from "@/data/bookingModes";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-14 pb-28 lg:pt-20 lg:pb-36">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark">
            <Rocket className="h-4 w-4" aria-hidden="true" />
            Pre-Launch — Coming to Your City Soon!
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[64px]">
            Time matters in healthcare.
            <br />
            <span className="text-teal">We bring care on time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            Samay Care connects you with a trusted CareBuddy who can assist you at the hospital or
            accompany you from home &mdash; helping handle the queues, navigation, registration,
            coordination and other non-clinical hassles of the healthcare journey.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {bookingModes.map((mode) => (
              <BookingModeCard key={mode.id} icon={mode.icon} title={mode.title} description={mode.description} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#prelaunch-form"
              size="lg"
              onClick={() => track("hero_interest_click", { location: "hero" })}
            >
              I&rsquo;m Interested &rarr;
            </Button>
            <Button
              href="#how-it-works"
              variant="ghost"
              size="lg"
              onClick={() => track("how_it_works_click", { location: "hero" })}
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Watch How It Works
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-text sm:grid-cols-2">
            {heroTrustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up lg:pl-6" style={{ animationDelay: "120ms" }}>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
