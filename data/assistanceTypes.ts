import type { AssistanceType } from "@/lib/types";

export const assistanceTypeOptions: { value: AssistanceType; label: string }[] = [
  { value: "opd-hospital-visit", label: "OPD / Hospital Visit" },
  { value: "ipd-admission-support", label: "IPD / Admission Support" },
  { value: "senior-citizen-assistance", label: "Senior Citizen Assistance" },
  { value: "accompany-from-home", label: "Accompany from Home" },
  { value: "diagnostics-reports", label: "Diagnostics / Reports" },
  { value: "medicine-assistance", label: "Medicine Assistance" },
  { value: "insurance-documentation", label: "Insurance / Documentation" },
  { value: "other", label: "Other" },
];
