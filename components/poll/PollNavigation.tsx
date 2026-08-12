import { Button } from "@/components/ui/Button";

export function PollNavigation({
  onBack,
  onNext,
  showBack,
  nextDisabled,
  nextLabel = "Next",
}: {
  onBack: () => void;
  onNext: () => void;
  showBack: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-3">
      {showBack ? (
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
      ) : (
        <span />
      )}
      <Button type="button" onClick={onNext} disabled={nextDisabled}>
        {nextLabel}
      </Button>
    </div>
  );
}
