import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { familyUpdates } from "@/data/familyUpdates";

export function FamilyConnection() {
  return (
    <section className="py-10 lg:py-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            title="2,000 km away doesn't mean out of the loop."
            subtitle="Your loved one may be in Delhi while you're in Bengaluru. Or they may be in India while you're abroad. Distance should not mean losing visibility into their healthcare journey."
          />
          <p className="mt-5 text-lg font-semibold text-navy">
            You may not be there. But you can still stay involved.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(16,43,58,0.08)]" aria-hidden="true">
          <p className="text-sm font-semibold text-navy">Journey Updates</p>
          <ol className="mt-4 space-y-4">
            {familyUpdates.map((update) => (
              <li key={update.time} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-navy">{update.time}</p>
                  <p className="text-sm text-text-muted">{update.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[11px] text-text-muted">Illustrative example — not a real customer record.</p>
        </div>
      </Container>
    </section>
  );
}
