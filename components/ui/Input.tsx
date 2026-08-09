import { forwardRef } from "react";
import type { ComponentType, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  hideLabel?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, id, required, className = "", icon: Icon, hideLabel, ...rest },
  ref
) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={hideLabel ? "sr-only" : "text-sm font-medium text-navy"}>
        {label}
        {required ? <span aria-hidden="true" className="text-teal"> *</span> : null}
      </label>
      <div className="relative">
        {Icon ? (
          <Icon
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
            strokeWidth={2}
            aria-hidden
          />
        ) : null}
        <input
          ref={ref}
          id={id}
          required={required}
          placeholder={hideLabel ? label : rest.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-base text-navy placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
            Icon ? "pl-10" : ""
          } ${error ? "border-red-400" : "border-border"} ${className}`}
          {...rest}
        />
      </div>
      {hint && !error ? (
        <p id={hintId} className="text-xs text-text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
});
