import type { AssistanceType } from "@/lib/types";

export const assistanceTypeOptions: { value: AssistanceType; label: string }[] = [
  { value: "opd-hospital-visit", label: "OPD / Hospital Visit" },
  { value: "ipd-admission-support", label: "IPD / Admission Support" },
  { value: "accompany-from-home", label: "Accompany from Home" },
  { value: "meet-at-hospital", label: "Meet at Hospital" },
  { value: "diagnostics-reports", label: "Diagnostics / Reports" },
  { value: "pharmacy-medicines", label: "Pharmacy / Medicines" },
  { value: "insurance-documentation", label: "Insurance / Documentation" },
  { value: "other", label: "Other" },
];
