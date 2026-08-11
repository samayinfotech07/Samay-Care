"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Circle,
  Handshake,
  Route,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  accompanyModes,
  careBuddyCapabilities,
  journeyUpdatePreview,
  navigateJourneyChips,
  type CareBuddyCapability,
} from "@/data/careBuddyCapabilities";

const icons = { handshake: Handshake, route: Route, bellRing: BellRing };

const journeyNodes = ["Patient", "CareBuddy", "Samay Care", "Family"];

export function MeetCareBuddy() {
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
    <section id="meet-carebuddy" ref={sectionRef} className="bg-surface py-10 lg:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div
            className={`relative mx-auto aspect-[373/484] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_rgba(16,43,58,0.1)] lg:max-w-none ${
              hasRevealed ? "fade-up" : ""
            }`}
          >
            <Image
              src="/images/hero-carebuddy.jpg"
              alt="A CareBuddy in a teal polo shirt with an ID badge walking alongside a patient in a hospital corridor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[34px]">
              Meet your CareBuddy.
            </h2>
            <p className="mt-3 text-lg font-semibold text-navy">
              A trusted person on the ground when you can&apos;t be there.
            </p>
            <p className="mt-2 text-base leading-7 text-text-muted">
              Your CareBuddy helps your loved one navigate the non-clinical healthcare journey while
              keeping the family informed every step of the way.
            </p>

            <div className="mt-8 space-y-4">
              {careBuddyCapabilities.map((capability, index) => (
                <CapabilityCard
                  key={capability.key}
                  capability={capability}
                  revealed={hasRevealed}
                  delayMs={100 + index * 80}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mx-auto mt-12 flex max-w-2xl flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3 ${
            hasRevealed ? "fade-up" : ""
          }`}
          aria-hidden="true"
        >
          {journeyNodes.map((node, index) => (
            <div key={node} className="flex flex-col items-center gap-2 sm:flex-row">
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy shadow-sm">
                {node}
              </span>
              {index < journeyNodes.length - 1 ? (
                <ChevronRight
                  className="h-4 w-4 shrink-0 rotate-90 text-teal/60 sm:rotate-0"
                  strokeWidth={2.5}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-navy px-8 py-10 text-center sm:mt-12">
          <p className="text-lg font-semibold text-white sm:text-xl">
            You may not be there. But you can still stay involved.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
            Samay Care helps put someone you trust on the ground while keeping you connected to the
            healthcare journey.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-lg font-semibold text-navy">One journey. One CareBuddy. Less hassle.</p>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            Your loved one has someone beside them. Your family knows what&apos;s happening.
          </p>
          <div className="mt-5">
            <Button href="#how-it-works" variant="primary">
              See How It Works &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CapabilityCard({
  capability,
  revealed,
  delayMs,
}: {
  capability: CareBuddyCapability;
  revealed: boolean;
  delayMs: number;
}) {
  const Icon = icons[capability.icon];
  return (
    <div
      className={`rounded-2xl p-5 ${capability.emphasize ? "bg-teal-light" : "bg-white"} ${
        revealed ? "fade-up" : ""
      }`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            capability.emphasize ? "bg-teal text-white" : "bg-teal-light text-teal"
          }`}
        >
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
            {capability.title}
          </h3>
          <p className="mt-0.5 text-base font-semibold text-navy">{capability.headline}</p>
          <p className="mt-1.5 text-sm leading-6 text-text-muted">{capability.description}</p>

          {capability.key === "accompany" ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {accompanyModes.map((mode) => (
                <span
                  key={mode}
                  className="inline-flex items-center rounded-full border border-teal/25 bg-teal-soft px-2.5 py-1 text-[11px] font-medium text-teal-dark"
                >
                  {mode}
                </span>
              ))}
            </div>
          ) : null}

          {capability.key === "navigate" ? (
            <div className="mt-3 flex flex-wrap items-center gap-1">
              {navigateJourneyChips.map((chip, i) => (
                <span key={chip} className="flex items-center gap-1">
                  <span className="text-[11px] font-medium text-text-muted">{chip}</span>
                  {i < navigateJourneyChips.length - 1 ? (
                    <ChevronRight className="h-3 w-3 text-teal/50" strokeWidth={2.5} aria-hidden="true" />
                  ) : null}
                </span>
              ))}
            </div>
          ) : null}

          {capability.key === "update" ? <JourneyUpdatePreview /> : null}
        </div>
      </div>
    </div>
  );
}

function JourneyUpdatePreview() {
  return (
    <div className="mt-4 rounded-xl border border-teal/20 bg-white p-3" aria-hidden="true">
      <p className="text-[11px] font-semibold text-navy">Journey Update</p>
      <ul className="mt-2 space-y-1.5">
        {journeyUpdatePreview.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-[11px]">
            {item.status === "done" ? (
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal" />
            ) : item.status === "current" ? (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-teal" />
            ) : (
              <Circle className="h-3.5 w-3.5 shrink-0 text-text-muted/50" />
            )}
            <span className={item.status === "upcoming" ? "text-text-muted" : "text-navy"}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[10px] text-text-muted">
        Conceptual preview &mdash; illustrative journey updates.
      </p>
    </div>
  );
}
