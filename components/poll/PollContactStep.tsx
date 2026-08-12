import { Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { PollFieldErrors } from "@/lib/pollValidation";

export type PollContactValues = { name: string; email: string; phone: string };

export function PollContactStep({
  values,
  errors,
  onChange,
  onNext,
}: {
  values: PollContactValues;
  errors: PollFieldErrors;
  onChange: <K extends keyof PollContactValues>(key: K, value: PollContactValues[K]) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-navy sm:text-2xl">Before we start</h1>
      <p className="mt-2 text-sm leading-6 text-text-muted">
        We&rsquo;ll use this to follow up if we have questions about your responses &mdash; it won&rsquo;t be
        shared or used for anything else.
      </p>

      <div className="mt-5 space-y-4">
        <Input
          id="poll-name"
          label="Full Name"
          icon={User}
          required
          autoComplete="name"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
          error={errors.name}
        />

        <Input
          id="poll-email"
          label="Email Address"
          icon={Mail}
          required
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
        />

        <Input
          id="poll-phone"
          label="Phone Number (Optional)"
          icon={Phone}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          hint="10-digit Indian mobile number"
          value={values.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
