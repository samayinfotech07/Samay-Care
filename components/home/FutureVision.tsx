import { Container } from "@/components/ui/Container";

const journey = ["OPD + IPD", "Diagnostics", "Pharmacy", "Insurance", "Home Care", "Follow-up"];

export function FutureVision() {
  return (
    <section className="border-y border-border bg-surface py-10 lg:py-12">
      <Container className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          Starting with the journey. Building for everything around it.
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {journey.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
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

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-text-muted">
          We start by simplifying the patient journey. Over time, Samay Care can connect more of
          the healthcare experience around the patient and family.
        </p>
      </Container>
    </section>
  );
}
