import { pollQuestions } from "@/data/pollQuestions";
import { EMAIL_REGEX, INDIAN_MOBILE_REGEX, normalizePhone } from "./validation";
import type { PollSubmission } from "./types";

export type PollFieldErrors = Record<string, string | undefined>;

type PollAnswerValue = string | string[];

export type PollContactValues = { name: string; email: string; phone: string };

/**
 * Validates the contact step (Name/Email required, Phone optional) shown
 * right after the intro, before Q1.
 */
export function validatePollContact(input: PollContactValues): PollFieldErrors {
  const errors: PollFieldErrors = {};

  const name = input.name.trim();
  if (!name) {
    errors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    errors.name = "Please enter a valid name.";
  }

  const email = input.email.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = normalizePhone(input.phone ?? "");
  if (phone && !INDIAN_MOBILE_REGEX.test(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  return errors;
}

export function isPollQuestionAnswered(value: PollAnswerValue | undefined): boolean {
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value && value.trim());
}

/**
 * Validates a single question's answer against its own rules (required,
 * max selections) — used to gate the stepper's Next button per-question.
 */
export function validatePollQuestionAnswer(
  questionId: string,
  value: PollAnswerValue | undefined
): string | undefined {
  const question = pollQuestions.find((q) => q.id === questionId);
  if (!question) return undefined;

  if (question.required && !isPollQuestionAnswered(value)) {
    return question.type === "multi" ? "Please select at least one option." : "Please select an option.";
  }

  if (question.type === "multi" && question.maxSelections && Array.isArray(value)) {
    if (value.length > question.maxSelections) {
      return `Please select up to ${question.maxSelections}.`;
    }
  }

  return undefined;
}

/**
 * Full-submission validation, run server-side before accepting a poll
 * response — defensive re-check of everything the stepper UI already
 * enforces client-side, since the API must never trust the client alone.
 */
export function validatePollSubmission(
  input: Partial<PollSubmission>
): PollFieldErrors {
  const errors: PollFieldErrors = {
    ...validatePollContact({
      name: input.name ?? "",
      email: input.email ?? "",
      phone: input.phone ?? "",
    }),
  };

  for (const question of pollQuestions) {
    const value = (input as Record<string, PollAnswerValue | undefined>)[question.id];
    const error = validatePollQuestionAnswer(question.id, value);
    if (error) errors[question.id] = error;
  }

  if (!input.consent) {
    errors.consent = "Please provide consent to continue.";
  }

  return errors;
}
