import { Container } from "@/components/ui/Container";

const journey = [
  "CareBuddy",
  "Hospital Assistance",
  "Diagnostics",
  "Medicines",
  "Insurance",
  "Home Care",
  "Follow-up",
];

export function FutureVision() {
  return (
    <section className="border-y border-border bg-surface py-16 lg:py-20">
      <Container className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          Starting with a CareBuddy. Building for the complete healthcare journey.
        </h2>

        <div className="mt-10 -mx-6 flex snap-x gap-2 overflow-x-auto px-6 sm:justify-center sm:overflow-visible sm:flex-wrap">
          {journey.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-2 snap-start">
              <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy">
                {step}
              </span>
              {index < journey.length - 1 ? (
                <span aria-hidden="true" className="text-teal">
                  &rarr;
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-text-muted">
          Today we start by making hospital visits easier. Over time, Samay Care will connect more
          of the healthcare journey around you.
        </p>
      </Container>
    </section>
  );
}
