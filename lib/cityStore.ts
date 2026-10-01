import { cityOptions, DEFAULT_CITY_SLUG } from "@/lib/cities";

/**
 * Tiny external store for the selected city, backed by localStorage.
 * Plain pub-sub + useSyncExternalStore (components/site/CityContext.tsx) —
 * not useState+useEffect, which would call setState synchronously inside an
 * effect just to sync from a browser-only external source (localStorage
 * isn't available during SSR), a pattern the React Compiler/eslint-plugin-
 * react-hooks flags for good reason: it causes an extra cascading render.
 * useSyncExternalStore is the tool actually designed for this.
 */
const STORAGE_KEY = "samaycare_city";

let currentSlug = DEFAULT_CITY_SLUG;
let hasReadStorage = false;
const listeners = new Set<() => void>();

function readFromStorage(): string {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && cityOptions.some((c) => c.slug === saved)) return saved;
  } catch {
    // Private browsing / blocked storage — fall back to the default city.
  }
  return DEFAULT_CITY_SLUG;
}

export function getCitySlugSnapshot(): string {
  if (!hasReadStorage) {
    currentSlug = readFromStorage();
    hasReadStorage = true;
  }
  return currentSlug;
}

export function getServerCitySlugSnapshot(): string {
  return DEFAULT_CITY_SLUG;
}

export function setCitySlugInStore(next: string): void {
  currentSlug = next;
  hasReadStorage = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Selection still works for this page view via the in-memory store.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToCityStore(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
