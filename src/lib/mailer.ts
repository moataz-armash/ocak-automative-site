import nodemailer from "nodemailer";
export async function sendMail({
  from,
  subject,
  text,
}: {
  from: string;
  subject: string;
  text: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    secure: false,
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
    replyTo: from,
  });
}
