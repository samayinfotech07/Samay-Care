import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`rounded-2xl border border-border bg-white shadow-[0_1px_2px_rgba(16,43,58,0.04),0_8px_24px_rgba(16,43,58,0.05)] ${className}`}
    >
      {children}
    </Tag>
  );
}
