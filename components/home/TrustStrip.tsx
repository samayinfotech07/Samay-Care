import { Heart, MapPin, Shield, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { trustItems } from "@/data/trustItems";

const icons = { mapPin: MapPin, userCheck: UserCheck, shield: Shield, heart: Heart };

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface py-16 lg:py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          Trusted care starts with the right support.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className="text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
