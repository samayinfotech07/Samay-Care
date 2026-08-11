import type { AssistanceType, PreLaunchLead, RelationshipType } from "./types";

export type FieldErrors = Partial<
  Record<"name" | "phone" | "city" | "email" | "relationship" | "assistanceType" | "consent", string>
>;

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePhone(raw: string): string {
  let digits = raw.replace(/[\s-]/g, "").replace(/^\+/, "");
  // Only strip a country code / trunk prefix when the total length shows
  // one is actually present — otherwise a bare 10-digit number that happens
  // to start with "91" (e.g. 9123456789) gets corrupted by blindly removing
  // those leading digits.
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  return digits;
}

export function validatePreLaunchLead(
  input: Pick<PreLaunchLead, "name" | "phone" | "city" | "email" | "relationship" | "assistanceType" | "consent">
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

  // Relationship and assistance type are optional per the request form spec.

  if (!input.consent) {
    errors.consent = "Please provide consent to continue.";
  }

  return errors;
}

export function isValidAssistanceType(value: string): value is AssistanceType {
  return [
    "opd-hospital-visit",
    "ipd-admission-support",
    "accompany-from-home",
    "meet-at-hospital",
    "diagnostics-reports",
    "pharmacy-medicines",
    "insurance-documentation",
    "other",
  ].includes(value);
}

export function isValidRelationship(value: string): value is RelationshipType {
  return ["myself", "parent", "spouse", "child", "other-family-member"].includes(value);
}
