const BRAND = {
  teal: "#087f73",
  tealDark: "#005e59",
  tealLight: "#e8f7f4",
  tealSoft: "#f2faf8",
  navy: "#102b3a",
  text: "#203746",
  textMuted: "#60727d",
  border: "#ddebe8",
};

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://samaycare.com";
}

/**
 * Shared branded shell for all transactional emails. Table-based layout on
 * purpose — it's the one markup style that renders consistently across
 * Gmail, Zoho Mail, and Outlook's various HTML engines. Inline styles only;
 * email clients strip <style> blocks or ignore classes.
 */
export function renderEmailShell({
  previewText,
  bodyHtml,
}: {
  previewText: string;
  bodyHtml: string;
}): string {
  const logoUrl = `${siteUrl()}/brand/logo-email.png`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Samay Care</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.tealSoft};font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${previewText}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.tealSoft};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 20px;text-align:center;border-bottom:1px solid ${BRAND.border};">
                <img src="${logoUrl}" alt="Samay Care" height="36" style="height:36px;display:inline-block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;text-align:center;background-color:${BRAND.tealSoft};">
                <p style="margin:0;font-size:13px;font-weight:600;color:${BRAND.navy};">Samay Care</p>
                <p style="margin:2px 0 0;font-size:12px;color:${BRAND.textMuted};">Time. Care. Always.</p>
                <p style="margin:12px 0 0;font-size:11px;color:${BRAND.textMuted};">
                  <a href="${siteUrl()}" style="color:${BRAND.teal};text-decoration:none;">samaycare.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function emailButton(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
    <tr>
      <td style="border-radius:10px;background-color:${BRAND.teal};">
        <a href="${href}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">${label}</a>
      </td>
    </tr>
  </table>`;
}

export { BRAND };
