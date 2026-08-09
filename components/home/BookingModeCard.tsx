import { Building2, Home } from "lucide-react";

const icons = { hospital: Building2, home: Home };

export function BookingModeCard({
  icon,
  title,
  description,
}: {
  icon: keyof typeof icons;
  title: string;
  description: string;
}) {
  const Icon = icons[icon];
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-light">
        <Icon className="h-4 w-4 text-teal" strokeWidth={2} aria-hidden="true" />
      </span>
      <h2 className="mt-2.5 text-[15px] font-semibold leading-snug text-navy">{title}</h2>
      <p className="mt-1 text-[13px] leading-5 text-text-muted">{description}</p>
    </div>
  );
}
