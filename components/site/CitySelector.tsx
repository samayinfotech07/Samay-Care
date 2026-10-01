"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { cityOptions } from "@/lib/cities";
import { useCity } from "@/components/site/CityContext";

export function CitySelector() {
  const { city, setCitySlug } = useCity();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-[13px] font-medium text-navy hover:border-teal/40 hover:bg-teal-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
        {city.label}
        <ChevronDown className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-label="Select your city"
          className="absolute right-0 top-full z-50 mt-1.5 max-h-72 w-48 overflow-y-auto rounded-xl border border-border bg-white py-1.5 shadow-[0_12px_32px_rgba(16,43,58,0.14)]"
        >
          {cityOptions.map((option) => (
            <li key={option.slug}>
              <button
                type="button"
                role="option"
                aria-selected={option.slug === city.slug}
                onClick={() => {
                  setCitySlug(option.slug);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3.5 py-2 text-left text-sm hover:bg-teal-light/50 ${
                  option.slug === city.slug ? "font-semibold text-teal" : "text-text"
                }`}
              >
                {option.label}
                {option.isLive ? (
                  <span className="rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-dark">
                    Live
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
