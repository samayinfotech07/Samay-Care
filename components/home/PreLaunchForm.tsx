"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { PreLaunchVisual } from "@/components/home/PreLaunchVisual";
import { assistanceTypeOptions } from "@/data/assistanceTypes";
import { relationshipOptions } from "@/data/relationshipOptions";
import { validatePreLaunchLead, type FieldErrors } from "@/lib/validation";
import { submitPreLaunchLead } from "@/lib/lead-service";
import { track, getUtmParams } from "@/lib/analytics";
import { PRESELECT_ASSISTANCE_EVENT, type PreselectAssistanceDetail } from "@/lib/events";
import type { AssistanceType, RelationshipType } from "@/lib/types";

const benefits = [
  "Be the first to know when we launch in your city",
  "Get early access when available",
  "Help us design a better CareBuddy experience",
  "Receive only important launch updates",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  relationship: RelationshipType | "";
  assistanceType: AssistanceType | "";
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  relationship: "",
  assistanceType: "",
  consent: false,
};

export function PreLaunchForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isRequest, setIsRequest] = useState(false);
  const hasStartedRef = useRef(false);
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    const onPreselect = (event: Event) => {
      const detail = (event as CustomEvent<PreselectAssistanceDetail>).detail;
      if (detail?.assistanceType) {
        setForm((prev) => ({ ...prev, assistanceType: detail.assistanceType }));
      }
    };
    window.addEventListener(PRESELECT_ASSISTANCE_EVENT, onPreselect);
    return () => window.removeEventListener(PRESELECT_ASSISTANCE_EVENT, onPreselect);
  }, []);

  function markStarted() {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track("prelaunch_form_start");
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    markStarted();
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmittingRef.current) return;

    const fieldErrors = validatePreLaunchLead(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      track("prelaunch_form_error", { reason: "validation" });
      return;
    }

    isSubmittingRef.current = true;
    setStatus("submitting");
    setSubmitError(null);
    track("prelaunch_form_submit");

    if (form.city) track("city_selected", { city: form.city });
    if (form.relationship) track("relationship_selected", { relationship: form.relationship });
    if (form.assistanceType) track("assistance_type_selected", { assistanceType: form.assistanceType });

    const utm = getUtmParams();
    const result = await submitPreLaunchLead({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      city: form.city.trim(),
      relationship: form.relationship,
      assistanceType: form.assistanceType,
      consent: form.consent,
      source: "website",
      submittedAt: new Date().toISOString(),
      ...utm,
    });

    isSubmittingRef.current = false;

    if (result.ok) {
      // A specific assistance type turns this into a request rather than
      // general interest — per docs/SAMAY_CARE_PHASE1_WEBSITE_V2.md §19.
      setIsRequest(Boolean(form.assistanceType));
      setStatus("success");
      track("prelaunch_form_success");
    } else {
      setStatus("error");
      setSubmitError(result.error);
      track("prelaunch_form_error", { reason: "submit" });
    }
  }

  return (
    <section id="prelaunch-form" className="bg-teal-soft py-10 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.85fr] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">We&rsquo;re Pre-Launch</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Want Samay Care in your city?
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-text-muted">
              Tell us where you are and what kind of healthcare assistance you need. Your interest
              helps us decide where to launch next.
            </p>

            <ul className="mt-5 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-text">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(16,43,58,0.08)]">
            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center" role="status">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-light">
                  <CheckCircle2 className="h-7 w-7 text-teal" aria-hidden="true" />
                </span>
                {isRequest ? (
                  <>
                    <h3 className="mt-5 text-xl font-semibold text-navy">We&rsquo;ve received your request.</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
                      Our team will review your location and assistance requirement and contact you
                      regarding availability.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="mt-5 text-xl font-semibold text-navy">You&rsquo;re on the Samay Care list.</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">
                      Thank you for helping us understand where healthcare assistance is needed.
                      We&rsquo;ll keep you updated as Samay Care comes to your city.
                    </p>
                  </>
                )}
                <button
                  type="button"
                  className="mt-6 text-sm font-medium text-teal hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                  onClick={() => {
                    setForm(initialState);
                    setStatus("idle");
                    hasStartedRef.current = false;
                  }}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-navy">Show Your Interest</h3>
                <p className="mt-1.5 text-sm text-text-muted">Tell us where we should launch first.</p>

                <form className="mt-4 space-y-3" onSubmit={handleSubmit} noValidate>
                  {status === "error" && submitError ? (
                    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {submitError}
                    </p>
                  ) : null}

                  <Input
                    id="lead-name"
                    label="Full Name"
                    hideLabel
                    icon={User}
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    error={errors.name}
                  />

                  <Input
                    id="lead-phone"
                    label="Mobile Number"
                    hideLabel
                    icon={Phone}
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    hint="10-digit Indian mobile number"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    error={errors.phone}
                  />

                  <Input
                    id="lead-city"
                    label="City"
                    hideLabel
                    icon={MapPin}
                    required
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    onBlur={() => form.city && track("city_selected", { city: form.city })}
                    error={errors.city}
                  />

                  <Input
                    id="lead-email"
                    label="Email Address"
                    hideLabel
                    icon={Mail}
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    error={errors.email}
                  />

                  <Select
                    id="lead-relationship"
                    label="Who needs assistance?"
                    placeholder="Who needs assistance?"
                    options={relationshipOptions}
                    value={form.relationship}
                    onChange={(e) => {
                      const value = e.target.value as RelationshipType;
                      updateField("relationship", value);
                      track("relationship_selected", { relationship: value });
                    }}
                    error={errors.relationship}
                  />

                  <Select
                    id="lead-assistance"
                    label="What kind of help are you looking for?"
                    placeholder="Select assistance"
                    options={assistanceTypeOptions}
                    value={form.assistanceType}
                    onChange={(e) => {
                      const value = e.target.value as AssistanceType;
                      updateField("assistanceType", value);
                      track("assistance_type_selected", { assistanceType: value });
                    }}
                    error={errors.assistanceType}
                  />

                  <Checkbox
                    id="lead-consent"
                    label="I agree to receive updates from Samay Care."
                    checked={form.consent}
                    onChange={(e) => updateField("consent", e.target.checked)}
                    error={errors.consent}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Submitting&hellip;
                      </>
                    ) : (
                      "Show Interest"
                    )}
                  </Button>

                  <p className="text-center text-xs text-text-muted">We respect your privacy. No spam, ever.</p>
                </form>
              </>
            )}
          </div>

          <PreLaunchVisual />
        </div>
      </Container>
    </section>
  );
}
