import Image from "next/image";

/**
 * Conceptual "CareBuddy on the way" visualization, cropped directly from the
 * approved reference design (docs/Samay Care PreLaunch.png) rather than
 * redrawn, per docs/SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md §19 — no real
 * location data, purely illustrative.
 */
export function PreLaunchVisual() {
  return (
    <div className="hidden h-full flex-col items-center justify-center lg:flex">
      <div className="relative aspect-[225/263] w-full max-w-[280px] overflow-hidden rounded-2xl">
        <Image
          src="/images/carebuddy-on-the-way.jpg"
          alt="Illustration of a map on a phone screen with a CareBuddy's photo, showing CareBuddy on the way, 10 minutes away"
          fill
          sizes="280px"
          className="object-contain"
        />
      </div>
      <p className="mt-3 text-center text-[11px] text-text-muted">Conceptual visualization — not live location data.</p>
    </div>
  );
}
