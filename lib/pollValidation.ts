import { pollQuestions } from "@/data/pollQuestions";
import type { PollSubmission } from "./types";

export type PollFieldErrors = Record<string, string>;

type PollAnswerValue = string | string[];

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
  const errors: PollFieldErrors = {};

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
