import Image from "next/image";
import { Building2, ChevronRight, FileText, Home, Pill, ShieldCheck, Signal, Wifi } from "lucide-react";

const bookingRows = [
  { icon: Building2, title: "Meet at Hospital", subtitle: "Meets you there" },
  { icon: Home, title: "Accompany from Home", subtitle: "Travels with you" },
];

const popularServices = [
  { icon: FileText, title: "Diagnostics", subtitle: "Book tests" },
  { icon: Pill, title: "Medicines", subtitle: "Home delivery" },
  { icon: FileText, title: "Reports", subtitle: "Collect reports" },
  { icon: ShieldCheck, title: "Insurance", subtitle: "Assistance" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[336px] sm:pr-20 lg:mx-0 lg:max-w-[80%] lg:pr-28">
      <div className="relative aspect-[373/484] w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_60px_rgba(16,43,58,0.1)]">
        <Image
          src="/images/hero-carebuddy.jpg"
          alt="A CareBuddy in a teal polo shirt with an ID badge assisting an elderly woman through a hospital corridor"
          fill
          sizes="(min-width: 1024px) 480px, 373px"
          className="object-cover"
          priority
        />
      </div>

      {/* Stacked below the photo on mobile (nothing occluded); overlaps the
          photo's edge from sm+ where there's enough room, matching the
          reference composition. */}
      <PhoneMockup />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="relative mx-auto mt-6 w-[260px] rounded-[1.75rem] border-4 border-navy bg-white p-2 shadow-[0_20px_45px_rgba(16,43,58,0.22)] sm:absolute sm:-right-8 sm:top-1/2 sm:mx-0 sm:mt-0 sm:w-[200px] sm:-translate-y-1/2"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between px-1.5 pb-1.5 text-[10px] font-medium text-navy sm:text-[9px]">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Signal className="h-3 w-3 sm:h-2.5 sm:w-2.5" aria-hidden="true" />
          <Wifi className="h-3 w-3 sm:h-2.5 sm:w-2.5" aria-hidden="true" />
        </span>
      </div>

      <div className="rounded-2xl bg-surface p-3">
        <p className="text-[13px] font-semibold text-navy sm:text-[12px]">Hello, Anita 👋</p>
        <p className="mt-0.5 text-[11px] text-text-muted sm:text-[10px]">How can we help you today?</p>

        <p className="mt-3 text-[12px] font-semibold text-navy sm:text-[11px]">Book a CareBuddy</p>
        <p className="text-[10px] text-text-muted sm:text-[9px]">Choose how you need assistance</p>

        <div className="mt-2 space-y-1.5">
          {bookingRows.map((row) => (
            <div
              key={row.title}
              className="flex items-center gap-2 rounded-lg border border-border bg-white p-2"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal-light">
                <row.icon className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold leading-tight text-navy sm:text-[10px]">{row.title}</p>
                <p className="text-[9px] text-text-muted sm:text-[8px]">{row.subtitle}</p>
              </div>
              <ChevronRight className="h-3 w-3 shrink-0 text-text-muted" />
            </div>
          ))}
        </div>

        <p className="mt-3 text-[12px] font-semibold text-navy sm:text-[11px]">Popular Services</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {popularServices.map((service) => (
            <div key={service.title} className="rounded-lg border border-border bg-white p-2">
              <service.icon className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
              <p className="mt-1 text-[10px] font-semibold text-navy sm:text-[9px]">{service.title}</p>
              <p className="text-[8px] text-text-muted sm:text-[7px]">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
