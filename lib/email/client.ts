import nodemailer, { type Transporter } from "nodemailer";

let cachedTransporter: Transporter | null = null;

function isConfigured(): boolean {
  return Boolean(
    process.env.ZOHO_SMTP_HOST &&
      process.env.ZOHO_SMTP_USER &&
      process.env.ZOHO_SMTP_PASS
  );
}

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");
  cachedTransporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });
  return cachedTransporter;
}

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

/**
 * Sends via Zoho Mail SMTP if ZOHO_SMTP_HOST/USER/PASS are set (see
 * .env.example); otherwise logs and no-ops, matching the fallback pattern
 * used for the other optional integrations in this project (see
 * docs/PENDING_INTEGRATIONS.md).
 */
export async function sendEmail(input: SendEmailInput): Promise<boolean> {
  if (!isConfigured()) {
    console.info("[email] Zoho SMTP not configured; skipping send to", input.to, "-", input.subject);
    return false;
  }

  const fromName = process.env.EMAIL_FROM_NAME ?? "Samay Care";
  const fromAddress = process.env.ZOHO_SMTP_USER;

  try {
    await getTransporter().sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: input.to,
      replyTo: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text,
    });
    return true;
  } catch (err) {
    console.error("[email] failed to send:", input.subject, "to", input.to, err);
    return false;
  }
}
