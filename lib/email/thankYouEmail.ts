import type { PreLaunchLead } from "@/lib/types";
import { escapeHtml } from "./escapeHtml";
import { BRAND, emailButton, renderEmailShell } from "./layout";

export function buildThankYouEmail(lead: PreLaunchLead): { subject: string; html: string; text: string } {
  const firstName = escapeHtml(lead.name.trim().split(/\s+/)[0] || lead.name.trim());
  const city = escapeHtml(lead.city.trim());
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samaycare.com";

  const subject = "Thanks for your interest in Samay Care!";

  const bodyHtml = `
    <h1 style="margin:0 0 12px;font-size:22px;font-weight:800;color:${BRAND.navy};">Thank you, ${firstName}.</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.text};">
      We've received your interest in Samay Care for <strong>${city}</strong>. A trusted CareBuddy on the
      ground, keeping your family informed &mdash; that's what we're building, and you've just helped us
      decide where to bring it next.
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.text};">
      We'll reach out as soon as Samay Care is ready to launch in your city. Until then, there's nothing
      else you need to do.
    </p>
    <p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.text};">
      You may not be there. But you can still stay involved.
    </p>
    <div style="text-align:center;">
      ${emailButton("Visit Samay Care", siteUrl)}
    </div>
    <p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:${BRAND.textMuted};text-align:center;">
      Privacy-first. We'll only email you about your Samay Care interest.
    </p>
  `;

  const html = renderEmailShell({
    previewText: `Thanks for your interest in Samay Care, ${firstName} — we'll be in touch as we launch in ${city}.`,
    bodyHtml,
  });

  const text = [
    `Thank you, ${lead.name.trim()}.`,
    ``,
    `We've received your interest in Samay Care for ${lead.city.trim()}. A trusted CareBuddy on the ground, keeping your family informed - that's what we're building, and you've just helped us decide where to bring it next.`,
    ``,
    `We'll reach out as soon as Samay Care is ready to launch in your city. Until then, there's nothing else you need to do.`,
    ``,
    `You may not be there. But you can still stay involved.`,
    ``,
    siteUrl,
    ``,
    `Samay Care -- Time. Care. Always.`,
  ].join("\n");

  return { subject, html, text };
}
