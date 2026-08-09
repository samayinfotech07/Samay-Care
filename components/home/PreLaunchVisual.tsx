import Image from "next/image";
import { Car, MapPin } from "lucide-react";

export function PreLaunchVisual() {
  return (
    <div className="hidden h-full flex-col items-center justify-center lg:flex">
      <div className="relative flex h-full min-h-[340px] w-full items-center justify-center" aria-hidden="true">
        <div className="absolute inset-4 rounded-full bg-teal-light/60" />

        <div className="relative h-[300px] w-[170px] rounded-[1.75rem] border-4 border-navy bg-white p-1.5 shadow-[0_20px_45px_rgba(16,43,58,0.18)]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-teal-soft">
            <svg viewBox="0 0 170 290" className="absolute inset-0 h-full w-full opacity-70">
              <path
                d="M10 235 C 55 180, 35 125, 90 100 S 145 55, 135 15"
                fill="none"
                stroke="#0C9A87"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <MapPin className="absolute left-7 top-14 h-5 w-5 fill-teal-dark text-teal-dark" strokeWidth={1.5} />
            <MapPin className="absolute left-20 top-28 h-5 w-5 fill-teal text-teal" strokeWidth={1.5} />
            <MapPin className="absolute left-12 top-[195px] h-5 w-5 fill-teal-dark text-teal-dark" strokeWidth={1.5} />
          </div>
        </div>

        <div className="absolute right-4 top-8 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="/images/carebuddy-avatar.jpg"
            alt=""
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-2 top-24 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_24px_rgba(16,43,58,0.12)]">
          <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
          <div className="text-xs leading-4">
            <p className="font-semibold text-navy">CareBuddy On the Way</p>
            <p className="text-text-muted">10 min away</p>
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-navy shadow-lg">
          <Car className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] text-text-muted">Conceptual visualization — not live location data.</p>
    </div>
  );
}
