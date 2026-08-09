import type { AssistanceType, PreLaunchLead } from "./types";

export type FieldErrors = Partial<
  Record<"name" | "phone" | "city" | "email" | "assistanceType" | "consent", string>
>;

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePhone(raw: string): string {
  return raw.replace(/[\s-]/g, "").replace(/^(\+91|91|0)/, "");
}

export function validatePreLaunchLead(
  input: Pick<PreLaunchLead, "name" | "phone" | "city" | "email" | "assistanceType" | "consent">
): FieldErrors {
  const errors: FieldErrors = {};

  const name = input.name.trim();
  if (!name) {
    errors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    errors.name = "Please enter a valid name.";
  }

  const phone = normalizePhone(input.phone);
  if (!phone) {
    errors.phone = "Please enter your mobile number.";
  } else if (!INDIAN_MOBILE_REGEX.test(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  const city = input.city.trim();
  if (!city) {
    errors.city = "Please tell us your city.";
  }

  const email = (input.email ?? "").trim();
  if (email && !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!input.assistanceType) {
    errors.assistanceType = "Please select the kind of help you need.";
  }

  if (!input.consent) {
    errors.consent = "Please provide consent to continue.";
  }

  return errors;
}

export function isValidAssistanceType(value: string): value is AssistanceType {
  return [
    "opd-hospital-visit",
    "ipd-admission-support",
    "senior-citizen-assistance",
    "accompany-from-home",
    "diagnostics-reports",
    "medicine-assistance",
    "insurance-documentation",
    "other",
  ].includes(value);
}
