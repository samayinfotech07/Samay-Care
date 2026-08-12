"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { pollQuestions } from "@/data/pollQuestions";
import { validatePollContact, validatePollQuestionAnswer, type PollFieldErrors } from "@/lib/pollValidation";
import { submitPollResponse } from "@/lib/poll-service";
import { track, getUtmParams } from "@/lib/analytics";
import type { PollSubmission } from "@/lib/types";
import { PollIntro } from "./PollIntro";
import { PollContactStep, type PollContactValues } from "./PollContactStep";
import { PollProgress } from "./PollProgress";
import { PollQuestion } from "./PollQuestion";
import { PollNavigation } from "./PollNavigation";
import { PollProfileStep, type PollProfileValues } from "./PollProfileStep";
import { PollSuccess } from "./PollSuccess";
import { PollError } from "./PollError";

type Answers = Record<string, string | string[]>;

const TOTAL_QUESTIONS = pollQuestions.length;
const CONTACT_STEP = 1;
const FIRST_QUESTION_STEP = CONTACT_STEP + 1;
const PROFILE_STEP = FIRST_QUESTION_STEP + TOTAL_QUESTIONS;

const initialContact: PollContactValues = { name: "", email: "", phone: "" };

const initialProfile: PollProfileValues = {
  city: "",
  relationship: "",
  workingStatus: "",
  parentsSameCity: "",
  consent: false,
};

export function PollFlow() {
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState<PollContactValues>(initialContact);
  const [contactErrors, setContactErrors] = useState<PollFieldErrors>({});
  const [answers, setAnswers] = useState<Answers>({});
  const [profile, setProfile] = useState<PollProfileValues>(initialProfile);
  const [consentError, setConsentError] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isSubmittingRef = useRef(false);
  const hasTrackedViewRef = useRef<number | null>(null);

  useEffect(() => {
    track("poll_page_view");
  }, []);

  useEffect(() => {
    if (step === hasTrackedViewRef.current) return;
    hasTrackedViewRef.current = step;
    if (step >= FIRST_QUESTION_STEP && step < PROFILE_STEP) {
      track("poll_question_view", { questionId: pollQuestions[step - FIRST_QUESTION_STEP].id, step });
    }
  }, [step]);

  useEffect(() => {
    function onVisibilityChange() {
      if (document.visibilityState === "hidden" && step > 0 && status !== "success") {
        track("poll_form_abandon", { step });
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [step, status]);

  function handleStart() {
    track("poll_start");
    setStep(CONTACT_STEP);
  }

  function updateContact<K extends keyof PollContactValues>(key: K, value: PollContactValues[K]) {
    setContact((prev) => ({ ...prev, [key]: value }));
    if (contactErrors[key]) setContactErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleContactNext() {
    const errors = validatePollContact(contact);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }
    setContactErrors({});
    setStep(FIRST_QUESTION_STEP);
  }

  function updateAnswer(questionId: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    track("poll_question_answered", { questionId });
  }

  function updateProfile<K extends keyof PollProfileValues>(key: K, value: PollProfileValues[K]) {
    setProfile((prev) => ({ ...prev, [key]: value }));
    if (key === "consent" && consentError) setConsentError(undefined);
  }

  function goBack() {
    const question = pollQuestions[step - FIRST_QUESTION_STEP];
    track("poll_question_back", { step, questionId: question?.id });
    setStep((s) => Math.max(0, s - 1));
  }

  function goNext() {
    const question = pollQuestions[step - FIRST_QUESTION_STEP];
    track("poll_question_next", { step, questionId: question?.id });
    setStep((s) => s + 1);
  }

  async function handleSubmit() {
    if (isSubmittingRef.current) return;

    if (!profile.consent) {
      setConsentError("Please provide consent to continue.");
      return;
    }

    isSubmittingRef.current = true;
    setStatus("submitting");
    setSubmitError(null);
    track("poll_submit");

    const utm = getUtmParams();
    const submission: PollSubmission = {
      surveyVersion: "samay-care-market-validation-v1",
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim() || undefined,
      q1_hospitalVisitFrequency: (answers.q1_hospitalVisitFrequency as string) ?? "",
      q2_usualCompanion: (answers.q2_usualCompanion as string) ?? "",
      q3_hospitalChallenges: (answers.q3_hospitalChallenges as string[]) ?? [],
      q4_workCommitmentImpact: (answers.q4_workCommitmentImpact as string) ?? "",
      q5_postponedHospitalVisit: (answers.q5_postponedHospitalVisit as string) ?? "",
      q6_opdVisitDuration: (answers.q6_opdVisitDuration as string) ?? "",
      q7_careBuddyUsefulness: (answers.q7_careBuddyUsefulness as string) ?? "",
      q8_useSituations: (answers.q8_useSituations as string[]) ?? [],
      q9_trustFactors: (answers.q9_trustFactors as string[]) ?? [],
      q10_willingnessToPay: (answers.q10_willingnessToPay as string) ?? "",
      city: profile.city.trim() || undefined,
      relationship: profile.relationship || undefined,
      workingStatus: profile.workingStatus || undefined,
      parentsSameCity: profile.parentsSameCity || undefined,
      consent: profile.consent,
      source: "poll",
      submittedAt: new Date().toISOString(),
      ...utm,
    };

    const result = await submitPollResponse(submission);
    isSubmittingRef.current = false;

    if (result.ok) {
      setStatus("success");
      track("poll_submit_success");
    } else {
      setStatus("error");
      setSubmitError(result.error);
      track("poll_submit_error", { reason: "submit" });
    }
  }

  if (status === "success") {
    return (
      <Container className="max-w-4xl py-14 lg:py-20">
        <PollSuccess />
      </Container>
    );
  }

  if (status === "error") {
    return (
      <Container className="max-w-2xl py-14 lg:py-20">
        <PollError
          message={submitError ?? "Please check your connection and try again."}
          onRetry={() => setStatus("idle")}
        />
      </Container>
    );
  }

  if (step === 0) {
    return (
      <Container className="max-w-2xl py-14 lg:py-20">
        <PollIntro onStart={handleStart} />
      </Container>
    );
  }

  if (step === CONTACT_STEP) {
    return (
      <Container className="max-w-2xl py-10 lg:py-14">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(16,43,58,0.04)] sm:p-8">
          <PollContactStep
            values={contact}
            errors={contactErrors}
            onChange={updateContact}
            onNext={handleContactNext}
          />
        </div>
      </Container>
    );
  }

  if (step === PROFILE_STEP) {
    return (
      <Container className="max-w-2xl py-10 lg:py-14">
        <PollProgress current={TOTAL_QUESTIONS} total={TOTAL_QUESTIONS} />
        <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(16,43,58,0.04)] sm:p-8">
          <PollProfileStep
            values={profile}
            onChange={updateProfile}
            onBack={() => setStep(PROFILE_STEP - 1)}
            onSubmit={handleSubmit}
            submitting={status === "submitting"}
            consentError={consentError}
          />
        </div>
      </Container>
    );
  }

  const question = pollQuestions[step - FIRST_QUESTION_STEP];
  const currentValue = answers[question.id];
  const nextDisabled = Boolean(validatePollQuestionAnswer(question.id, currentValue));

  return (
    <Container className="max-w-2xl py-10 lg:py-14">
      <PollProgress current={step - FIRST_QUESTION_STEP + 1} total={TOTAL_QUESTIONS} />
      <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(16,43,58,0.04)] sm:p-8">
        <PollQuestion
          question={question}
          value={currentValue}
          onChange={(value) => updateAnswer(question.id, value)}
        />
        <PollNavigation onBack={goBack} onNext={goNext} showBack nextDisabled={nextDisabled} />
      </div>
    </Container>
  );
}
