import { Container } from "@/components/ui/Container";
import { journeySteps } from "@/data/journeySteps";

export function ProblemSection() {
  return (
    <section className="bg-surface py-10 lg:py-14">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Healthcare is complicated. Being away makes it harder.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-text-muted">
          A hospital visit can involve much more than meeting a doctor.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2" aria-hidden="true">
          {journeySteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy">
                {step}
              </span>
              {index < journeySteps.length - 1 ? <span className="text-teal">&rarr;</span> : null}
            </div>
          ))}
        </div>
        <p className="sr-only">{journeySteps.join(" → ")}</p>

        <p className="mx-auto mt-8 max-w-lg text-lg font-semibold text-navy">
          And someone still has to coordinate it all.
        </p>
      </Container>
    </section>
  );
}
