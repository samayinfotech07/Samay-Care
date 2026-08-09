import { ShieldCheck } from "lucide-react";

/**
 * Illustrated hero scene (CareBuddy assisting a patient at a hospital) plus
 * an app-concept mockup. Built as vector shapes rather than a stock photo —
 * no licensed Indian healthcare photography asset is available in this repo
 * yet. Swap for real photography per brand guidelines §22 when available;
 * keep this component's structure (illustration + phone mockup) as a
 * fallback.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-teal-soft to-white shadow-[0_20px_60px_rgba(16,43,58,0.08)]"
        role="img"
        aria-label="Illustration of a CareBuddy assisting an elderly patient at a hospital"
      >
        <svg viewBox="0 0 480 560" className="h-full w-full" aria-hidden="true">
          <circle cx="70" cy="90" r="120" fill="#E8F7F4" />
          <circle cx="420" cy="460" r="150" fill="#F2FAF8" />

          {/* Hospital facade */}
          <rect x="60" y="120" width="360" height="300" rx="16" fill="#FFFFFF" stroke="#DDEBE8" strokeWidth="2" />
          <rect x="60" y="120" width="360" height="46" rx="16" fill="#087F73" />
          <rect x="216" y="138" width="48" height="10" rx="4" fill="#FFFFFF" />
          <rect x="235" y="130" width="10" height="26" rx="4" fill="#FFFFFF" />

          <rect x="96" y="196" width="72" height="72" rx="10" fill="#E8F7F4" />
          <rect x="204" y="196" width="72" height="72" rx="10" fill="#E8F7F4" />
          <rect x="312" y="196" width="72" height="72" rx="10" fill="#E8F7F4" />

          <rect x="140" y="320" width="200" height="100" rx="10" fill="#F8FCFB" stroke="#DDEBE8" strokeWidth="2" />
          <rect x="220" y="360" width="40" height="60" rx="6" fill="#DDEBE8" />

          {/* Wheelchair */}
          <g transform="translate(150 390)">
            <circle cx="0" cy="60" r="26" fill="none" stroke="#102B3A" strokeWidth="4" />
            <circle cx="80" cy="70" r="14" fill="none" stroke="#102B3A" strokeWidth="4" />
            <path d="M20 20 L20 60 L80 60" fill="none" stroke="#102B3A" strokeWidth="4" strokeLinecap="round" />
            <path d="M20 20 L60 20" fill="none" stroke="#102B3A" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Patient seated */}
          <g transform="translate(150 300)">
            <circle cx="35" cy="20" r="22" fill="#F4D9BE" />
            <path d="M10 45 q25 -20 50 0 l0 45 q-25 15 -50 0 Z" fill="#CBD8DC" />
          </g>

          {/* CareBuddy standing */}
          <g transform="translate(255 260)">
            <circle cx="35" cy="20" r="22" fill="#C98A5B" />
            <path d="M8 48 q27 -22 54 0 l6 130 q-33 18 -66 0 Z" fill="#087F73" />
            <rect x="24" y="70" width="22" height="14" rx="3" fill="#FFFFFF" />
          </g>
        </svg>

        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-3.5 py-2 text-xs font-semibold text-navy shadow-sm">
          <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
          Verified CareBuddy
        </div>
      </div>

      <AppMockup />
    </div>
  );
}

function AppMockup() {
  return (
    <div
      className="absolute -bottom-8 -left-4 w-[220px] rounded-[2rem] border border-border bg-white p-3 shadow-[0_16px_40px_rgba(16,43,58,0.14)] sm:-left-10 sm:w-[240px]"
      aria-hidden="true"
    >
      <div className="rounded-[1.5rem] bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-navy">Hello, Anita 👋</span>
          <span className="rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
            Coming soon
          </span>
        </div>
        <p className="text-[11px] text-text-muted">How can we help you today?</p>

        <p className="mt-3 text-[11px] font-semibold text-navy">Book a CareBuddy</p>
        <div className="mt-2 space-y-1.5">
          <div className="rounded-lg bg-teal px-3 py-2 text-[11px] font-medium text-white">
            Meet at Hospital
          </div>
          <div className="rounded-lg border border-teal/30 bg-white px-3 py-2 text-[11px] font-medium text-navy">
            Accompany from Home
          </div>
        </div>

        <p className="mt-3 text-[11px] font-semibold text-navy">Popular Services</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {["Diagnostics", "Medicines", "Reports", "Insurance"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-white px-2 py-1.5 text-center text-[10px] font-medium text-text-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
