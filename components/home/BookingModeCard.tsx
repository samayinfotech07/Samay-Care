import { Building2, Home } from "lucide-react";
import { Card } from "@/components/ui/Card";

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
    <Card className="flex items-start gap-4 p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light">
        <Icon className="h-5 w-5 text-teal" strokeWidth={2} aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-base font-semibold text-navy">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-text-muted">{description}</p>
      </div>
    </Card>
  );
}
