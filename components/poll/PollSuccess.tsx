import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PollSuccess() {
  return (
    <div className="text-center" role="status">
      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-light">
        <CheckCircle2 className="h-7 w-7 text-teal" aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-2xl font-semibold text-navy">Thank you for sharing your experience.</h1>
      <p className="mx-auto mt-3 text-base leading-7 text-text-muted">
        Your feedback will help us understand the real challenges families face during healthcare
        journeys and help shape Samay Care.
      </p>
      <p className="mt-4 text-lg font-semibold text-navy">
        Together, we can make healthcare more convenient.
      </p>

      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button href="/" variant="secondary">
          Learn About Samay Care &rarr;
        </Button>
        <Button href="/#prelaunch-form">Want Samay Care in your city?</Button>
      </div>
    </div>
  );
}
