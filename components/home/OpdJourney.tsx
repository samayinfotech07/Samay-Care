"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarCheck,
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  FileText,
  FlaskConical,
  MapPin,
  Pill,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { opdJourneyStages, type OpdJourneyStage } from "@/data/opdJourneyStages";

const icons = {
  calendarCheck: CalendarCheck,
  mapPin: MapPin,
  clipboardCheck: ClipboardCheck,
  stethoscope: Stethoscope,
  flaskConical: FlaskConical,
  pill: Pill,
  fileText: FileText,
  calendarClock: CalendarClock,
};

export function OpdJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="opd-journey" ref={sectionRef} className="bg-teal-light py-10 lg:py-14">
      <Container>
        <SectionHeading
          title="Your OPD journey. Simplified."
          subtitle="From booking the appointment to collecting reports and planning the next step, your CareBuddy helps you navigate the journey."
        />
        <p className="mx-auto mt-4 max-w-lg text-center text-sm font-semibold text-teal-dark">
          You focus on your health. Your CareBuddy helps with the rest.
        </p>

        <p className="sr-only">
          The simplified OPD journey: {opdJourneyStages.map((stage) => stage.title).join(" → ")}.
        </p>

        {/* Mobile (<640px): vertical timeline, one stage per row. */}
        <ol className="mt-10 flex flex-col sm:hidden">
          {opdJourneyStages.map((stage, index) => (
            <OpdTimelineNode
              key={stage.number}
              stage={stage}
              isLast={index === opdJourneyStages.length - 1}
              revealed={hasRevealed}
              delayMs={index * 60}
            />
          ))}
        </ol>

        {/* Tablet (640-1279px): horizontal scroll, snap-aligned, edge fade signals more content. */}
        <div className="relative mt-10 hidden sm:block xl:hidden">
          <div
            className="scrollbar-hide flex snap-x snap-mandatory gap-0 overflow-x-auto pb-2"
            role="list"
            tabIndex={0}
            aria-label="OPD journey stages"
          >
            {opdJourneyStages.map((stage, index) => (
              <div key={stage.number} className="flex shrink-0 snap-start items-start" role="listitem">
                <OpdCard
                  stage={stage}
                  width="w-[168px]"
                  revealed={hasRevealed}
                  delayMs={index * 60}
                />
                {index < opdJourneyStages.length - 1 ? <Connector width="w-8" /> : null}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[calc(100%-0.5rem)] w-12 bg-gradient-to-l from-teal-light to-transparent"
          />
        </div>

        {/* Desktop (1280px+): full single-row journey, no scrolling. */}
        <div className="mt-10 hidden xl:flex xl:items-start">
          {opdJourneyStages.map((stage, index) => (
            <div key={stage.number} className="flex flex-1 items-start">
              <OpdCard
                stage={stage}
                width="flex-1"
                revealed={hasRevealed}
                delayMs={index * 60}
              />
              {index < opdJourneyStages.length - 1 ? <Connector width="w-6" /> : null}
            </div>
          ))}
        </div>

        {/* Close the loop: reinforce the CareBuddy connection. */}
        <div className="mx-auto mt-12 max-w-lg text-center sm:mt-14">
          <p className="text-xl font-semibold text-navy sm:text-2xl">
            One journey. One CareBuddy. Less hassle.
          </p>
          <p className="mt-3 text-base leading-7 text-text-muted">
            Your CareBuddy helps coordinate the non-clinical parts of the journey so you can
            focus on what matters.
          </p>
          <p className="mt-4 text-sm font-semibold text-navy">
            You focus on what matters. We help with the journey.
          </p>
          <div className="mt-6">
            <Button href="#meet-carebuddy" variant="primary">
              Meet Your CareBuddy &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Connector({ width }: { width: string }) {
  return (
    <div className={`mt-[62px] flex shrink-0 items-center ${width}`} aria-hidden="true">
      <span className="h-0 flex-1 border-t-2 border-dashed border-teal/50" />
      <ChevronRight className="h-4 w-4 shrink-0 text-teal/80" strokeWidth={2.5} />
    </div>
  );
}

function CareBuddyTag() {
  return (
    <span className="mt-2 inline-flex items-center rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
      CareBuddy assists
    </span>
  );
}

function OpdCard({
  stage,
  width,
  revealed,
  delayMs,
}: {
  stage: OpdJourneyStage;
  width: string;
  revealed: boolean;
  delayMs: number;
}) {
  const Icon = icons[stage.icon];
  return (
    <div
      className={`${width} px-2 text-center ${revealed ? "fade-up" : ""}`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <div className="flex flex-col items-center">
        <span className="mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
          {stage.number}
        </span>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal/25 bg-white">
          <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-2.5 text-xs font-semibold leading-tight text-navy">{stage.title}</h3>
      <p className="mt-1 text-[11px] leading-snug text-text-muted">{stage.description}</p>
      {stage.careBuddyAssists ? <CareBuddyTag /> : null}
    </div>
  );
}

function OpdTimelineNode({
  stage,
  isLast,
  revealed,
  delayMs,
}: {
  stage: OpdJourneyStage;
  isLast: boolean;
  revealed: boolean;
  delayMs: number;
}) {
  const Icon = icons[stage.icon];
  return (
    <li
      className={`relative flex gap-4 pb-8 last:pb-0 ${revealed ? "fade-up" : ""}`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-7 top-[84px] bottom-2 w-0 border-l-2 border-dashed border-teal/45"
        />
      ) : null}
      <div className="flex shrink-0 flex-col items-center">
        <span className="mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
          {stage.number}
        </span>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal/25 bg-white">
          <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] font-semibold text-navy">{stage.title}</h3>
        <p className="mt-1 text-sm leading-6 text-text-muted">{stage.description}</p>
        {stage.careBuddyAssists ? <CareBuddyTag /> : null}
      </div>
    </li>
  );
}
