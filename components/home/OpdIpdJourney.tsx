import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ipdJourney } from "@/data/opdIpdJourney";

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
          title="When healthcare becomes more than a hospital visit."
          subtitle="One CareBuddy stays with the journey — from admission through discharge and beyond."
          maxWidthClassName="max-w-2xl sm:max-w-4xl lg:max-w-6xl"
        />

        <div className="mt-10">
          <JourneyRow steps={ipdJourney} />
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
