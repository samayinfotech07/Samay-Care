"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { getCityOption, type CityOption } from "@/lib/cities";
import {
  getCitySlugSnapshot,
  getServerCitySlugSnapshot,
  setCitySlugInStore,
  subscribeToCityStore,
} from "@/lib/cityStore";
import { track } from "@/lib/analytics";

type CityContextValue = {
  city: CityOption;
  setCitySlug: (slug: string) => void;
};

const CityContext = createContext<CityContextValue | null>(null);

export function CityProvider({ children }: { children: ReactNode }) {
  const slug = useSyncExternalStore(subscribeToCityStore, getCitySlugSnapshot, getServerCitySlugSnapshot);

  const setCitySlug = (next: string) => {
    setCitySlugInStore(next);
    track("city_selected", { city: next });
  };

  const value = useMemo<CityContextValue>(() => ({ city: getCityOption(slug), setCitySlug }), [slug]);

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity(): CityContextValue {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error("useCity must be used within a CityProvider");
  return ctx;
}
