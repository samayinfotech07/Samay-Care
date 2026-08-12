import { Check } from "lucide-react";

export function PollOption({
  id,
  name,
  type,
  label,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  name: string;
  type: "radio" | "checkbox";
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-base leading-6 transition-colors focus-within:ring-2 focus-within:ring-teal focus-within:ring-offset-2 ${
        disabled
          ? "cursor-not-allowed border-border bg-surface text-text-muted/70"
          : "cursor-pointer hover:border-teal/50"
      } ${checked ? "border-teal bg-teal-light font-medium text-navy" : disabled ? "" : "border-border bg-white text-text"}`}
    >
      <input
        type={type}
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 ${
          type === "radio" ? "rounded-full" : "rounded-[5px]"
        } ${checked ? "border-teal bg-teal" : "border-border bg-white"}`}
      >
        {checked ? (
          type === "radio" ? (
            <span className="h-2 w-2 rounded-full bg-white" />
          ) : (
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
          )
        ) : null}
      </span>
      {label}
    </label>
  );
}
