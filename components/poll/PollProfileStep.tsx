import type { FormEvent } from "react";
import { Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { pollProfileRelationshipOptions } from "@/data/pollQuestions";

const yesNoOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export type PollProfileValues = {
  city: string;
  relationship: string;
  workingStatus: string;
  parentsSameCity: string;
  consent: boolean;
};

export function PollProfileStep({
  values,
  onChange,
  onBack,
  onSubmit,
  submitting,
  consentError,
}: {
  values: PollProfileValues;
  onChange: <K extends keyof PollProfileValues>(key: K, value: PollProfileValues[K]) => void;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  consentError?: string;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1 className="text-xl font-semibold text-navy sm:text-2xl">One last thing (optional)</h1>
      <p className="mt-2 text-sm leading-6 text-text-muted">
        These help us understand different family situations. Feel free to skip any of them.
      </p>

      <div className="mt-5 space-y-4">
        <Input
          id="poll-city"
          label="Your city"
          icon={MapPin}
          autoComplete="address-level2"
          value={values.city}
          onChange={(e) => onChange("city", e.target.value)}
        />

        <Select
          id="poll-relationship"
          label="Your relationship to the person who needs healthcare support"
          placeholder="Select an option"
          options={pollProfileRelationshipOptions.map((o) => ({ value: o.id, label: o.label }))}
          value={values.relationship}
          onChange={(e) => onChange("relationship", e.target.value)}
        />

        <Select
          id="poll-working-status"
          label="Are you currently working?"
          placeholder="Select an option"
          options={yesNoOptions}
          value={values.workingStatus}
          onChange={(e) => onChange("workingStatus", e.target.value)}
        />

        <Select
          id="poll-parents-same-city"
          label="Are you currently living in the same city as your parents?"
          placeholder="Select an option"
          options={yesNoOptions}
          value={values.parentsSameCity}
          onChange={(e) => onChange("parentsSameCity", e.target.value)}
        />
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <Checkbox
          id="poll-consent"
          label="I understand that my responses will be used for Samay Care's market research and product development."
          checked={values.consent}
          onChange={(e) => onChange("consent", e.target.checked)}
          error={consentError}
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting&hellip;
            </>
          ) : (
            "Submit My Response"
          )}
        </Button>
      </div>
    </form>
  );
}
