import { forwardRef } from "react";
import type { ReactNode, InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error, id, className = "", ...rest },
  ref
) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={`mt-0.5 h-5 w-5 shrink-0 rounded-md border-border text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${className}`}
          {...rest}
        />
        <label htmlFor={id} className="text-sm leading-6 text-text">
          {label}
        </label>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
});
