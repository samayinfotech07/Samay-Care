"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { useCity } from "@/components/site/CityContext";
import { track } from "@/lib/analytics";
import { CARE_BOOKING_URL } from "@/lib/care-booking";

type Props = {
  location: string;
  liveLabel?: string;
  notLiveLabel?: string;
  notLiveHref?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  onClick?: () => void;
};

/**
 * The one primary conversion button, everywhere on the site: "Book Now" to
 * the live care.samaycare.com platform for the live city (Delhi NCR by
 * default), or the existing pre-launch interest form for every other city.
 */
export function CityAwareCta({
  location,
  liveLabel = "Book Now",
  notLiveLabel = "I'm Interested",
  notLiveHref = "/#prelaunch-form",
  variant = "primary",
  size = "lg",
  className,
  onClick,
}: Props) {
  const { city } = useCity();

  if (city.isLive) {
    return (
      <Button
        href={CARE_BOOKING_URL}
        variant={variant}
        size={size}
        className={className}
        onClick={() => {
          track("book_now_click", { location, city: city.slug });
          onClick?.();
        }}
      >
        {liveLabel} &rarr;
      </Button>
    );
  }

  return (
    <Button
      href={notLiveHref}
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        track("hero_interest_click", { location, city: city.slug });
        onClick?.();
      }}
    >
      {notLiveLabel} &rarr;
    </Button>
  );
}
