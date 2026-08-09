export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 40 34" className="h-8 w-9" aria-hidden="true">
        <path
          d="M18 6.5C14.8 2.6 9.6 1.8 5.9 5c-4 3.5-3.9 9.4.3 13.3L18 29.5l3.6-3.3C17 21.8 13 17.6 10.4 14.1 8 10.9 8.4 7.6 10.6 5.9c2-1.6 4.9-1.2 7.4 1.7Z"
          fill={isLight ? "rgba(255,255,255,0.55)" : "#5FB8AD"}
        />
        <path
          d="M20 8.5C23.6 4 29.3 3.1 33.4 6.6c4.4 3.8 4.3 10.3-.3 14.5L20 33.5l-4-3.6c5-4.7 9.4-9.4 12.2-13.2 2.6-3.5 2.2-7.1-.2-9C25.8 5.9 22.6 6.4 20 9.4Z"
          fill={isLight ? "#FFFFFF" : "#087F73"}
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight">
          <span className={isLight ? "text-white" : "text-navy"}>Samay</span>{" "}
          <span className={isLight ? "text-white/90" : "text-teal"}>Care</span>
        </span>
        <span className={`text-[11px] font-medium ${isLight ? "text-white/75" : "text-text-muted"}`}>
          Time. Care. Always.
        </span>
      </span>
    </span>
  );
}
