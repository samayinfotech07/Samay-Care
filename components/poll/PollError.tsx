import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PollError({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="text-center" role="alert">
      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-7 w-7 text-red-600" aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-2xl font-semibold text-navy">We couldn&rsquo;t submit your response.</h1>
      <p className="mx-auto mt-3 max-w-md text-base leading-7 text-text-muted">{message}</p>

      <div className="mt-7">
        <Button type="button" onClick={onRetry}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
