import type { RelationshipType } from "@/lib/types";

export const relationshipOptions: { value: RelationshipType; label: string }[] = [
  { value: "myself", label: "Myself" },
  { value: "parent", label: "Parent" },
  { value: "spouse", label: "Spouse" },
  { value: "child", label: "Child" },
  { value: "other-family-member", label: "Other family member" },
];
