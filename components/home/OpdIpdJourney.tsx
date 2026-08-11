import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { opdJourney, ipdJourney } from "@/data/opdIpdJourney";

function JourneyRow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2" aria-hidden="true">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-white px-3.5 py-2 text-sm font-medium text-navy">
            {step}
          </span>
          {index < steps.length - 1 ? <span className="text-teal">&rarr;</span> : null}
        </div>
      ))}
    </div>
  );
}

export function OpdIpdJourney() {
  return (
    <section id="opd-ipd-journey" className="py-10 lg:py-14">
      <Container className="text-center">
        <SectionHeading
          title="One CareBuddy. One connected healthcare journey."
          maxWidthClassName="max-w-2xl sm:max-w-4xl lg:max-w-6xl"
        />

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-teal">OPD Visits</h3>
          <div className="mt-4">
            <JourneyRow steps={opdJourney} />
          </div>
          <p className="sr-only">{opdJourney.join(" → ")}</p>
        </div>

        <p className="mx-auto mt-6 max-w-md text-sm font-medium text-navy">
          CareBuddy assists. Family stays informed.
        </p>

        <div className="mt-10 border-t border-border pt-10">
          <h3 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            When healthcare becomes more than a hospital visit.
          </h3>
          <div className="mt-6">
            <JourneyRow steps={ipdJourney} />
          </div>
          <p className="sr-only">{ipdJourney.join(" → ")}</p>
          <p className="mx-auto mt-6 max-w-md text-sm text-text-muted">
            CareBuddy provides non-clinical assistance throughout. Clinical decisions remain with
            qualified healthcare professionals.
          </p>
        </div>
      </Container>
    </section>
  );
}
