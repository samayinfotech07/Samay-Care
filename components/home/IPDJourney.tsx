"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Building2,
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  FileText,
  FlaskConical,
  LogOut,
  Pill,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ipdJourneyStages, type IpdJourneyStage } from "@/data/ipdJourneyStages";

const icons = {
  clipboardCheck: ClipboardCheck,
  building2: Building2,
  flaskConical: FlaskConical,
  stethoscope: Stethoscope,
  pill: Pill,
  fileText: FileText,
  bell: Bell,
  logOut: LogOut,
  calendarClock: CalendarClock,
};

export function IPDJourney() {
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
    <section id="ipd-journey" ref={sectionRef} className="py-10 lg:py-14">
      <Container>
        <SectionHeading
          title="When healthcare becomes more than a hospital visit."
          subtitle="During an IPD journey, there are many things to coordinate beyond the medical care itself. A CareBuddy can help navigate the non-clinical journey and keep the family informed."
          maxWidthClassName="max-w-2xl sm:max-w-3xl"
        />
        <p className="mx-auto mt-4 max-w-lg text-center text-sm font-semibold text-teal-dark">
          One person on the ground. A family that stays connected.
        </p>

        <p className="sr-only">
          The IPD journey: {ipdJourneyStages.map((stage) => stage.title).join(" → ")}.
        </p>

        {/* Mobile (<640px): vertical timeline, one stage per row. */}
        <ol className="mt-10 flex flex-col sm:hidden">
          {ipdJourneyStages.map((stage, index) => (
            <IpdTimelineNode
              key={stage.number}
              stage={stage}
              isLast={index === ipdJourneyStages.length - 1}
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
          >
            {ipdJourneyStages.map((stage, index) => (
              <div key={stage.number} className="flex shrink-0 snap-start items-start">
                <IpdCard
                  stage={stage}
                  width="w-[168px]"
                  revealed={hasRevealed}
                  delayMs={index * 60}
                />
                {index < ipdJourneyStages.length - 1 ? <Connector width="w-8" /> : null}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[calc(100%-0.5rem)] w-12 bg-gradient-to-l from-white to-transparent"
          />
        </div>

        {/* Desktop (1280px+): full single-row journey, no scrolling. */}
        <div className="mt-10 hidden xl:flex xl:items-start">
          {ipdJourneyStages.map((stage, index) => (
            <div key={stage.number} className="flex flex-1 items-start">
              <IpdCard
                stage={stage}
                width="flex-1"
                revealed={hasRevealed}
                delayMs={index * 60}
              />
              {index < ipdJourneyStages.length - 1 ? <Connector width="w-5" /> : null}
            </div>
          ))}
        </div>

        {/* Close the loop. */}
        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <p className="text-xl font-semibold text-navy sm:text-2xl">
            A complex hospital stay. A simpler journey.
          </p>
          <p className="mt-3 text-base leading-7 text-text-muted">
            With a CareBuddy on the ground and family kept informed, Samay Care helps
            <br className="hidden sm:inline" /> reduce the non-clinical coordination burden around
            the IPD journey.
          </p>
          <p className="mt-4 text-sm font-semibold text-navy">
            You may not be at the hospital. You can still stay involved.
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
      <span className="h-0 flex-1 border-t-2 border-dashed border-teal/45" />
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-teal/70" strokeWidth={2.5} />
    </div>
  );
}

function StayConnectedTag() {
  return (
    <span className="mt-2 inline-flex items-center rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
      Stay Connected
    </span>
  );
}

function StageIcon({ stage }: { stage: IpdJourneyStage }) {
  const Icon = icons[stage.icon];
  return (
    <span
      className={`inline-flex h-14 w-14 items-center justify-center rounded-full border ${
        stage.isFamilyUpdate ? "border-teal bg-teal" : "border-teal/25 bg-teal-light"
      }`}
    >
      <Icon
        className={`h-6 w-6 ${stage.isFamilyUpdate ? "text-white" : "text-teal"}`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </span>
  );
}

function IpdCard({
  stage,
  width,
  revealed,
  delayMs,
}: {
  stage: IpdJourneyStage;
  width: string;
  revealed: boolean;
  delayMs: number;
}) {
  return (
    <div
      className={`${width} px-1.5 text-center ${revealed ? "fade-up" : ""}`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <div className="flex flex-col items-center">
        <span className="mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
          {stage.number}
        </span>
        <StageIcon stage={stage} />
      </div>
      <h3 className="mt-2.5 text-xs font-semibold leading-tight text-navy">{stage.title}</h3>
      <p className="mt-1 text-[11px] leading-snug text-text-muted">{stage.description}</p>
      {stage.isFamilyUpdate ? <StayConnectedTag /> : null}
    </div>
  );
}

function IpdTimelineNode({
  stage,
  isLast,
  revealed,
  delayMs,
}: {
  stage: IpdJourneyStage;
  isLast: boolean;
  revealed: boolean;
  delayMs: number;
}) {
  return (
    <li
      className={`relative flex gap-4 pb-8 last:pb-0 ${revealed ? "fade-up" : ""}`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-7 top-[84px] bottom-2 w-0 border-l-2 border-dashed border-teal/40"
        />
      ) : null}
      <div className="flex shrink-0 flex-col items-center">
        <span className="mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
          {stage.number}
        </span>
        <StageIcon stage={stage} />
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] font-semibold text-navy">{stage.title}</h3>
        <p className="mt-1 text-sm leading-6 text-text-muted">{stage.description}</p>
        {stage.isFamilyUpdate ? <StayConnectedTag /> : null}
      </div>
    </li>
  );
}
