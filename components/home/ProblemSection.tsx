"use client";

import { useEffect, useRef, useState } from "react";
import {
  BedDouble,
  CalendarCheck,
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Navigation,
  Pill,
  Stethoscope,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { journeyStages, type JourneyStage } from "@/data/journeyStages";

const icons = {
  calendarCheck: CalendarCheck,
  clipboardCheck: ClipboardCheck,
  users: Users,
  navigation: Navigation,
  stethoscope: Stethoscope,
  flaskConical: FlaskConical,
  pill: Pill,
  bedDouble: BedDouble,
  fileText: FileText,
  calendarClock: CalendarClock,
};

export function ProblemSection() {
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
    <section ref={sectionRef} className="bg-surface py-10 lg:py-14">
      <Container>
        <SectionHeading
          title="Healthcare is complicated. Being away makes it harder."
          subtitle="A hospital visit can involve much more than meeting a doctor."
        />

        <p className="sr-only">
          The healthcare journey: {journeyStages.map((stage) => stage.title).join(" → ")}.
        </p>

        {/* Mobile (<640px): vertical timeline, one stage per row. */}
        <ol className="mt-10 flex flex-col sm:hidden">
          {journeyStages.map((stage, index) => (
            <JourneyTimelineNode
              key={stage.number}
              stage={stage}
              isLast={index === journeyStages.length - 1}
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
            aria-label="Healthcare journey stages"
          >
            {journeyStages.map((stage, index) => (
              <div key={stage.number} className="flex shrink-0 snap-start items-start" role="listitem">
                <JourneyCard
                  stage={stage}
                  width="w-[152px]"
                  revealed={hasRevealed}
                  delayMs={index * 60}
                />
                {index < journeyStages.length - 1 ? <Connector width="w-8" /> : null}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[calc(100%-0.5rem)] w-12 bg-gradient-to-l from-surface to-transparent"
          />
        </div>

        {/* Desktop (1280px+): full single-row journey, no scrolling. */}
        <div className="mt-10 hidden xl:flex xl:items-start">
          {journeyStages.map((stage, index) => (
            <div key={stage.number} className="flex flex-1 items-start">
              <JourneyCard
                stage={stage}
                width="flex-1"
                revealed={hasRevealed}
                delayMs={index * 60}
              />
              {index < journeyStages.length - 1 ? <Connector width="w-5" /> : null}
            </div>
          ))}
        </div>

        {/* Transition into the Samay Care / CareBuddy solution. */}
        <div className="mx-auto mt-12 max-w-lg border-t border-border pt-10 text-center sm:mt-14 sm:pt-12">
          <p className="text-xl font-semibold text-navy sm:text-2xl">
            And someone still has to coordinate it all.
          </p>
          <p className="mt-3 text-base leading-7 text-text-muted">
            For patients and families, navigating every step can be stressful — especially when
            you cannot be there.
          </p>
          <div className="mt-6">
            <Button href="#meet-carebuddy" variant="secondary">
              See How CareBuddy Helps &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Connector({ width }: { width: string }) {
  return (
    <div className={`mt-[48px] flex shrink-0 items-center ${width}`} aria-hidden="true">
      <span className="h-0 flex-1 border-t-2 border-dashed border-teal/45" />
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-teal/70" strokeWidth={2.5} />
    </div>
  );
}

function JourneyCard({
  stage,
  width,
  revealed,
  delayMs,
}: {
  stage: JourneyStage;
  width: string;
  revealed: boolean;
  delayMs: number;
}) {
  const Icon = icons[stage.icon];
  return (
    <div
      className={`${width} px-1.5 text-center ${revealed ? "fade-up" : ""}`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <div className="flex flex-col items-center">
        <span className="mb-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-semibold text-white">
          {stage.number}
        </span>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/25 bg-teal-light">
          <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-2.5 text-xs font-semibold leading-tight text-navy">{stage.title}</h3>
      <p className="mt-1 text-[11px] leading-snug text-text-muted">{stage.description}</p>
    </div>
  );
}

function JourneyTimelineNode({
  stage,
  isLast,
  revealed,
  delayMs,
}: {
  stage: JourneyStage;
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
          className="absolute left-6 top-[76px] bottom-2 w-0 border-l-2 border-dashed border-teal/40"
        />
      ) : null}
      <div className="flex shrink-0 flex-col items-center">
        <span className="mb-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-semibold text-white">
          {stage.number}
        </span>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/25 bg-teal-light">
          <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] font-semibold text-navy">{stage.title}</h3>
        <p className="mt-1 text-sm leading-6 text-text-muted">{stage.description}</p>
      </div>
    </li>
  );
}
