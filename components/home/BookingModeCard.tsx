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
    <div className="rounded-2xl border border-border bg-white p-5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-light">
        <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
      </span>
      <h2 className="mt-3 text-base font-semibold text-navy">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-text-muted">{description}</p>
    </div>
  );
}
