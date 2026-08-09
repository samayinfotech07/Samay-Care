import Image from "next/image";
import { MapPin } from "lucide-react";

/**
 * Conceptual "CareBuddy on the way" visualization — a phone-map illustration
 * with a decorative outside route and car. No real location data; purely
 * illustrative per docs/SAMAY_CARE_PHASE1_WEBSITE_CLAUDE_CODE.md §19.
 */
export function PreLaunchVisual() {
  return (
    <div className="hidden h-full flex-col items-center justify-center lg:flex">
      <div className="relative aspect-[300/380] w-full max-w-[300px]" aria-hidden="true">
        <svg viewBox="0 0 300 380" className="absolute inset-0 h-full w-full">
          <circle cx="215" cy="300" r="95" fill="#E8F7F4" opacity="0.7" />
          <circle cx="70" cy="330" r="60" fill="#F2FAF8" opacity="0.8" />

          {/* ground + road for the car */}
          <path d="M40 345 Q150 320 300 355 L300 380 L40 380 Z" fill="#EAF3F1" />
          <path
            d="M50 350 Q160 328 295 358"
            fill="none"
            stroke="#DDEBE8"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M50 350 Q160 328 295 358"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />

          {/* decorative route arc from top pin down toward the car */}
          <path
            d="M255 65 C 285 110, 285 170, 255 215"
            fill="none"
            stroke="#0C9A87"
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* phone frame */}
          <rect x="18" y="14" width="172" height="292" rx="28" fill="#FFFFFF" stroke="#102B3A" strokeWidth="6" />
          <rect x="80" y="20" width="48" height="9" rx="4.5" fill="#102B3A" />

          {/* map, clipped to phone screen */}
          <clipPath id="mapScreen">
            <rect x="27" y="38" width="154" height="258" rx="18" />
          </clipPath>
          <g clipPath="url(#mapScreen)">
            <rect x="27" y="38" width="154" height="258" fill="#F3F1EA" />
            <path d="M35 60 L175 130" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
            <path d="M35 150 L175 90" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
            <path d="M45 296 L140 38" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
            <rect x="34" y="48" width="26" height="20" rx="4" fill="#D7E8DC" />
            <rect x="140" y="180" width="30" height="24" rx="4" fill="#D7E8DC" />
            <rect x="40" y="240" width="22" height="18" rx="4" fill="#D7E8DC" />
            <path
              d="M181 75 C 140 95, 150 130, 110 145 S 70 190, 90 230 S 60 270, 40 296"
              fill="none"
              stroke="#BFE0EC"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <g transform="translate(103, 128)">
              <path d="M0 0 C -9 0 -16 7 -16 16 C -16 27 0 40 0 40 C 0 40 16 27 16 16 C 16 7 9 0 0 0 Z" fill="#005E59" />
              <circle cx="0" cy="15" r="6" fill="#FFFFFF" />
            </g>
            <g transform="translate(88, 222)">
              <path d="M0 0 C -9 0 -16 7 -16 16 C -16 27 0 40 0 40 C 0 40 16 27 16 16 C 16 7 9 0 0 0 Z" fill="#087F73" />
              <circle cx="0" cy="15" r="6" fill="#FFFFFF" />
            </g>
          </g>

          {/* decorative pin above the avatar */}
          <g transform="translate(255, 50)">
            <path d="M0 0 C -10 0 -18 8 -18 18 C -18 30 0 45 0 45 C 0 45 18 30 18 18 C 18 8 10 0 0 0 Z" fill="#087F73" />
            <circle cx="0" cy="17" r="7" fill="#FFFFFF" />
          </g>

          {/* car */}
          <g transform="translate(160, 318)">
            <ellipse cx="54" cy="40" rx="58" ry="6" fill="#0B4A45" opacity="0.12" />
            <path
              d="M2 33 C 1 29 3 25 7 24 L15 23 C 18 16 24 5 30 3 C 38 0 70 0 78 3 C 84 5 90 16 93 23 L101 24 C 105 25 107 29 106 33 L104 34 L4 34 Z"
              fill="#0B4A45"
            />
            <path
              d="M32 21 L37 8 C 38 5 41 4 44 4 L64 4 C 67 4 70 5 71 8 L76 21 Z"
              fill="#BFDAD6"
              opacity="0.55"
            />
            <path d="M54 5 L53 21" stroke="#0B4A45" strokeWidth="1.5" />
            <rect x="0" y="30" width="108" height="7" rx="3.5" fill="#0B4A45" />
            <circle cx="25" cy="37" r="8.5" fill="#102B3A" />
            <circle cx="25" cy="37" r="3" fill="#6B8B87" />
            <circle cx="83" cy="37" r="8.5" fill="#102B3A" />
            <circle cx="83" cy="37" r="3" fill="#6B8B87" />
            <circle cx="9" cy="26" r="2.2" fill="#F4D9BE" />
            <circle cx="99" cy="26" r="2" fill="#8C3B34" />
          </g>
        </svg>

        <div className="absolute left-[68%] top-[19%] h-[68px] w-[68px] overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="/images/carebuddy-avatar.jpg"
            alt=""
            width={136}
            height={136}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-0 top-[45%] w-[56%] max-w-[150px] rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(16,43,58,0.12)]">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-light">
              <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            </span>
            <div className="text-xs leading-4">
              <p className="font-semibold text-navy">CareBuddy On the Way</p>
              <p className="text-text-muted">10 min away</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] text-text-muted">Conceptual visualization — not live location data.</p>
    </div>
  );
}
