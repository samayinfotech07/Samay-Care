import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-tight text-navy sm:text-4xl ${
          align === "center" ? "lg:text-[42px]" : "lg:text-[34px]"
        }`}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base leading-7 text-text-muted">{subtitle}</p> : null}
    </div>
  );
}
