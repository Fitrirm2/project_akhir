import nodemailer from "nodemailer";

export async function sendOtpEmail(to: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Modul App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verifikasi Email",
    html: `<p>Kode OTP kamu: <b>${otp}</b></p>`,
  });
}
