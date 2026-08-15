import { Resend } from 'resend';

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  text: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, text, replyTo }: SendEmailOptions) {
  const { data, error } = await getResendClient().emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to,
    subject,
    text,
    replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
