import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendOtpEmail } from "@/lib/send-otp";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
    },
  });

  await sendOtpEmail(email, otp);

  return NextResponse.json({ message: "Registrasi berhasil, cek email untuk OTP" });
}
