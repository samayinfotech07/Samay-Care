import {
  Briefcase,
  Building2,
  CalendarX,
  ClipboardList,
  HeartHandshake,
  IndianRupee,
  Landmark,
  MapPin,
  ShieldCheck,
  Timer,
  User,
  Users,
} from "lucide-react";
import { POLL_EMERGENCY_NOTE, type PollQuestion as PollQuestionType } from "@/data/pollQuestions";
import { PollOption } from "./PollOption";

const questionIcons = {
  building2: Building2,
  users: Users,
  clipboardList: ClipboardList,
  briefcase: Briefcase,
  calendarX: CalendarX,
  timer: Timer,
  heartHandshake: HeartHandshake,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
  indianRupee: IndianRupee,
  user: User,
  landmark: Landmark,
};

export function PollQuestion({
  question,
  value,
  onChange,
}: {
  question: PollQuestionType;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}) {
  const selectedIds = question.type === "multi" ? ((value as string[]) ?? []) : [];
  const atMax = Boolean(
    question.type === "multi" && question.maxSelections && selectedIds.length >= question.maxSelections
  );
  const Icon = questionIcons[question.icon];

  return (
    <div>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-light">
        <Icon className="h-6 w-6 text-teal" strokeWidth={2} aria-hidden="true" />
      </span>
      <h1 className="mt-3 text-xl font-semibold leading-snug text-navy sm:text-2xl">{question.question}</h1>
      {question.supportingText ? (
        <p className="mt-2 text-sm text-text-muted">{question.supportingText}</p>
      ) : null}

      <div className="mt-5 space-y-2.5" role={question.type === "multi" ? "group" : "radiogroup"}>
        {question.options.map((option) => {
          if (question.type === "single") {
            const checked = value === option.id;
            return (
              <PollOption
                key={option.id}
                id={`${question.id}-${option.id}`}
                name={question.id}
                type="radio"
                label={option.label}
                checked={checked}
                onChange={(isChecked) => {
                  if (isChecked) onChange(option.id);
                }}
              />
            );
          }

          const checked = selectedIds.includes(option.id);
          return (
            <PollOption
              key={option.id}
              id={`${question.id}-${option.id}`}
              name={`${question.id}-${option.id}`}
              type="checkbox"
              label={option.label}
              checked={checked}
              disabled={!checked && atMax}
              onChange={(isChecked) => {
                const next = isChecked
                  ? [...selectedIds, option.id]
                  : selectedIds.filter((id) => id !== option.id);
                onChange(next);
              }}
            />
          );
        })}
      </div>

      {question.id === "q8_useSituations" ? (
        <p className="mt-4 text-xs leading-5 text-text-muted">{POLL_EMERGENCY_NOTE}</p>
      ) : null}
    </div>
  );
}
