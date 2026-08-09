import { HeartPulse } from "lucide-react";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <span className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
          isLight ? "bg-white/15" : "bg-teal-light"
        }`}
      >
        <HeartPulse
          className={isLight ? "h-5 w-5 text-white" : "h-5 w-5 text-teal"}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
      <span className={`text-lg ${isLight ? "text-white" : "text-navy"}`}>
        Samay Care
      </span>
    </span>
  );
}
