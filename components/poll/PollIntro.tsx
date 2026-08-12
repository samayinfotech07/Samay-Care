import { Clock3 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PollIntro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Help Us Make Healthcare More Convenient
      </h1>
      <p className="mt-4 text-base leading-7 text-text-muted">
        We&rsquo;re exploring how patients and families experience the hospital journey &mdash; and
        what kind of support would genuinely make it easier.
      </p>
      <p className="mt-3 text-base leading-7 text-text-muted">
        Your feedback will help us understand the real challenges families face and shape Samay
        Care around those needs.
      </p>

      <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-border bg-white p-6 text-left shadow-[0_1px_2px_rgba(16,43,58,0.04)]">
        <h2 className="text-lg font-semibold text-navy">
          Help Us Understand the Real Healthcare Journey
        </h2>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          Hospital visits can involve appointments, registration, queues, navigation, diagnostics,
          pharmacy, reports and follow-ups. We&rsquo;d like to understand where families experience
          the most difficulty and what kind of support would actually be useful.
        </p>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          Your responses will help us validate the problem before we scale Samay Care.
        </p>
      </div>

      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark">
        <Clock3 className="h-4 w-4" aria-hidden="true" />
        10 questions &middot; Takes about 3&ndash;5 minutes
      </p>

      <div className="mt-6">
        <Button type="button" size="lg" onClick={onStart}>
          Start Survey
        </Button>
      </div>
    </div>
  );
}
