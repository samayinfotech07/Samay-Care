"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bell,
  Building2,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Heart,
  Home,
  IdCard,
  MapPin,
  Pill,
  ShieldCheck,
  Signal,
  Smartphone,
  Ticket,
  User,
  Users,
  Wifi,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  accompanyModes,
  careBuddyCapabilities,
  journeyConnectionNodes,
  journeyUpdatePreview,
  navigateJourneySteps,
  type CareBuddyCapability,
} from "@/data/careBuddyCapabilities";

const capabilityIcons = { users: Users, mapPin: MapPin, smartphone: Smartphone };
const accompanyIcons = { pin: MapPin, home: Home };
const navigateIcons = {
  clipboardCheck: ClipboardCheck,
  ticket: Ticket,
  building2: Building2,
  flaskConical: FlaskConical,
  pill: Pill,
  fileText: FileText,
};
const connectionIcons = { user: User, idCard: IdCard, heart: Heart, users: Users };

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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[30%_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0 lg:col-start-2 lg:row-start-1">
            <span className="inline-flex items-center rounded-full bg-teal-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-dark">
              Meet Your CareBuddy
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[46px]">
              Meet your <span className="text-teal">CareBuddy.</span>
            </h2>
            <p className="mt-2 text-lg font-semibold text-navy">
              A trusted person on the ground when you can&apos;t be there.
            </p>
            <p className="mt-1.5 text-base leading-7 text-text-muted">
              Your CareBuddy helps your loved one navigate the non-clinical healthcare journey while
              keeping the family informed every step of the way.
            </p>
          </div>

          <div
            className={`relative mx-auto aspect-[53/62] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_rgba(16,43,58,0.1)] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-none lg:sticky lg:top-24 ${
              hasRevealed ? "fade-up" : ""
            }`}
          >
            <Image
              src="/images/hero-carebuddy.jpg"
              alt="A CareBuddy in a teal polo shirt with an ID badge walking alongside a patient in a hospital corridor"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-dark/95 px-3.5 py-2 text-xs font-semibold text-white shadow-lg">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Trusted CareBuddy
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:items-start lg:col-start-2 lg:row-start-2">
            {careBuddyCapabilities.map((capability, index) => (
              <div
                key={capability.key}
                className={capability.key === "update" ? "sm:col-span-2 xl:col-span-1" : ""}
              >
                <CapabilityCard
                  capability={capability}
                  revealed={hasRevealed}
                  delayMs={100 + index * 80}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mx-auto mt-6 flex flex-col gap-4 rounded-3xl bg-teal-soft p-5 sm:mt-8 sm:p-6 lg:flex-row lg:items-center lg:gap-6 ${
            hasRevealed ? "fade-up" : ""
          }`}
        >
          <div className="flex items-center gap-3 lg:shrink-0">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal">
              <Users className="h-6 w-6 text-white" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-base font-semibold leading-snug text-navy sm:text-lg">
              You may not be there.
              <br />
              <span className="text-teal">But you can still stay involved.</span>
            </p>
          </div>

          <div className="hidden self-stretch border-l border-teal/20 lg:block" aria-hidden="true" />

          <p className="text-sm leading-6 text-text-muted lg:max-w-xs">
            Samay Care helps put someone you trust on the ground while keeping you connected to the
            healthcare journey.
          </p>

          <div className="flex flex-1 flex-wrap items-center justify-center gap-y-3 gap-x-2 sm:gap-x-3 lg:justify-end">
            {journeyConnectionNodes.map((node, index) => {
              const Icon = connectionIcons[node.icon];
              return (
                <div key={node.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex shrink-0 flex-col items-center gap-1.5">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                        node.tone === "outline" ? "border-2 border-teal bg-white" : "bg-teal"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${node.tone === "outline" ? "text-teal" : "text-white"}`}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="whitespace-nowrap text-[11px] font-semibold text-navy">
                      {node.label}
                    </span>
                  </div>
                  {index < journeyConnectionNodes.length - 1 ? (
                    <span
                      className="h-0 w-4 shrink-0 border-t-2 border-dashed border-teal/50 sm:w-6"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-lg text-center sm:mt-10">
          <p className="text-lg font-semibold text-navy sm:text-xl">
            One journey. One CareBuddy. <span className="text-teal">Less hassle.</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            Your loved one has someone beside them. Your family knows what&apos;s happening.
          </p>
          <div className="mt-5">
            <Button href="#how-it-works" variant="primary">
              See How It Works &rarr;
            </Button>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            Privacy-first. Only important updates, only with your consent.
          </p>
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
  const Icon = capabilityIcons[capability.icon];
  const isUpdate = capability.key === "update";

  return (
    <div
      className={`h-full min-w-0 overflow-hidden rounded-2xl border border-teal/20 bg-white p-5 ${
        revealed ? "fade-up" : ""
      }`}
      style={revealed ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      <div className={isUpdate ? "flex flex-col gap-4 sm:flex-row sm:items-start xl:flex-col" : ""}>
        <div className={isUpdate ? "min-w-0 sm:flex-1" : ""}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal">
              <Icon className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold text-teal">{capability.title}</h3>
          </div>
          <p className="mt-3 text-[15px] font-semibold text-navy">{capability.headline}</p>
          <p className="mt-1.5 text-sm leading-6 text-text-muted">{capability.description}</p>

          {capability.key === "accompany" ? <AccompanyModes /> : null}
          {capability.key === "navigate" ? <NavigateSteps /> : null}
        </div>

        {isUpdate ? <PhoneMockup /> : null}
      </div>
    </div>
  );
}

function AccompanyModes() {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {accompanyModes.map((mode) => {
        const Icon = accompanyIcons[mode.icon];
        return (
          <span
            key={mode.label}
            className="inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal-soft px-3 py-2 text-sm font-medium text-navy"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-light">
              <Icon className="h-3.5 w-3.5 text-teal" strokeWidth={2} aria-hidden="true" />
            </span>
            {mode.label}
          </span>
        );
      })}
    </div>
  );
}

function NavigateSteps() {
  return (
    <div
      className="mt-4 grid grid-cols-3 gap-x-2 gap-y-3"
      role="list"
      aria-label="Non-clinical journey steps a CareBuddy helps coordinate"
    >
      {navigateJourneySteps.map((step) => {
        const Icon = navigateIcons[step.icon];
        return (
          <div key={step.label} className="flex flex-col items-center gap-1 text-center" role="listitem">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-light">
              <Icon className="h-4 w-4 text-teal" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="text-[9px] font-medium leading-tight text-text-muted">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="mx-auto w-[172px] shrink-0 rounded-[1.4rem] border-[3px] border-navy bg-white p-1.5 shadow-[0_16px_36px_rgba(16,43,58,0.18)] sm:mx-0 xl:mx-auto"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between px-1.5 pb-1 text-[7px] font-medium text-navy">
        <span>9:41</span>
        <span className="flex items-center gap-0.5">
          <Signal className="h-2 w-2" />
          <Wifi className="h-2 w-2" />
        </span>
      </div>
      <div className="rounded-xl bg-surface p-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-navy">Samay Care</p>
          <Bell className="h-2.5 w-2.5 text-text-muted" />
        </div>
        <p className="mt-1.5 text-[8px] font-semibold text-navy">Journey Update</p>
        <ul className="mt-1.5 space-y-1.5">
          {journeyUpdatePreview.map((item) => (
            <li key={item.label} className="flex flex-col gap-0.5 text-[7px]">
              <span className="flex min-w-0 items-center gap-1">
                {item.status === "done" ? (
                  <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-teal" />
                ) : item.status === "current" ? (
                  <span className="inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-teal">
                    <span className="h-1 w-1 rounded-full bg-white" />
                  </span>
                ) : (
                  <Circle className="h-2.5 w-2.5 shrink-0 text-border" />
                )}
                <span
                  className={
                    item.status === "upcoming" ? "text-text-muted" : "font-medium text-navy"
                  }
                >
                  {item.label}
                </span>
              </span>
              <span
                className={`pl-3.5 ${
                  item.status === "current" ? "font-semibold text-teal" : "text-text-muted"
                }`}
              >
                {item.time}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-[8px] font-semibold text-teal">View All Updates</p>
      </div>
      <p className="mt-1.5 text-center text-[7px] leading-tight text-text-muted">
        Conceptual preview &mdash; illustrative journey updates.
      </p>
    </div>
  );
}
