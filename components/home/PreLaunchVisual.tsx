import Image from "next/image";
import { Bike } from "lucide-react";

/**
 * Conceptual "CareBuddy on the way" visualization, cropped directly from the
 * approved reference design (docs/Samay Care PreLaunch.png) rather than
 * redrawn, per docs/SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md §19 — no real
 * location data, purely illustrative. Further cropped to drop the car
 * illustration baked into that source photo; the bike tag below stands in
 * for it as a real HTML element since the vehicle can't be edited inside
 * the JPEG itself.
 */
export function PreLaunchVisual() {
  return (
    <div className="hidden h-full flex-col items-center justify-center lg:flex">
      <div className="relative aspect-[225/220] w-full max-w-[360px] overflow-hidden rounded-2xl">
        <Image
          src="/images/carebuddy-on-the-way.jpg"
          alt="Illustration of a map on a phone screen with a CareBuddy's photo, showing CareBuddy on the way, 10 minutes away"
          fill
          sizes="360px"
          className="object-contain"
        />
      </div>
      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-dark px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
        <Bike className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        On the way by bike
      </span>
      <p className="mt-2 text-center text-[11px] text-text-muted">Conceptual visualization — not live location data.</p>
    </div>
  );
}
