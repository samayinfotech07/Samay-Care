import type { PreLaunchLead } from "@/lib/types";
import { assistanceTypeOptions } from "@/data/assistanceTypes";
import { relationshipOptions } from "@/data/relationshipOptions";
import { escapeHtml } from "./escapeHtml";
import { BRAND, renderEmailShell } from "./layout";

function labelFor<T extends string>(options: { value: T; label: string }[], value: T | ""): string {
  if (!value) return "—";
  return options.find((option) => option.value === value)?.label ?? value;
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;font-size:13px;color:${BRAND.textMuted};white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:8px 0 8px 16px;font-size:14px;color:${BRAND.text};font-weight:600;">${value || "—"}</td>
  </tr>`;
}

export function buildLeadNotificationEmail(lead: PreLaunchLead): { subject: string; html: string; text: string } {
  const name = escapeHtml(lead.name.trim());
  const city = escapeHtml(lead.city.trim());
  const phone = escapeHtml(lead.phone.trim());
  const email = lead.email ? escapeHtml(lead.email.trim()) : "";
  const relationship = escapeHtml(labelFor(relationshipOptions, lead.relationship));
  const assistanceType = escapeHtml(labelFor(assistanceTypeOptions, lead.assistanceType));
  const source = escapeHtml(lead.source ?? "website");
  const submittedAt = new Date(lead.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const utmParts = [
    lead.utmSource && `source=${lead.utmSource}`,
    lead.utmMedium && `medium=${lead.utmMedium}`,
    lead.utmCampaign && `campaign=${lead.utmCampaign}`,
    lead.utmContent && `content=${lead.utmContent}`,
    lead.utmTerm && `term=${lead.utmTerm}`,
  ].filter(Boolean);
  const utm = utmParts.length ? escapeHtml(utmParts.join(", ")) : "";

  const subject = `New Samay Care lead: ${lead.name.trim()} (${lead.city.trim()})`;

  const bodyHtml = `
    <h1 style="margin:0 0 4px;font-size:20px;font-weight:800;color:${BRAND.navy};">New pre-launch lead</h1>
    <p style="margin:0 0 20px;font-size:13px;color:${BRAND.textMuted};">${submittedAt} IST</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND.border};">
      ${detailRow("Name", name)}
      ${detailRow("Phone", phone)}
      ${email ? detailRow("Email", email) : ""}
      ${detailRow("City", city)}
      ${detailRow("Relationship", relationship)}
      ${detailRow("Assistance needed", assistanceType)}
      ${detailRow("Source", source)}
      ${utm ? detailRow("UTM", utm) : ""}
    </table>
  `;

  const html = renderEmailShell({
    previewText: `New lead: ${lead.name.trim()} in ${lead.city.trim()} — ${lead.phone.trim()}`,
    bodyHtml,
  });

  const text = [
    `New pre-launch lead (${submittedAt} IST)`,
    ``,
    `Name: ${lead.name.trim()}`,
    `Phone: ${lead.phone.trim()}`,
    lead.email ? `Email: ${lead.email.trim()}` : null,
    `City: ${lead.city.trim()}`,
    `Relationship: ${labelFor(relationshipOptions, lead.relationship)}`,
    `Assistance needed: ${labelFor(assistanceTypeOptions, lead.assistanceType)}`,
    `Source: ${lead.source ?? "website"}`,
    utmParts.length ? `UTM: ${utmParts.join(", ")}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return { subject, html, text };
}
