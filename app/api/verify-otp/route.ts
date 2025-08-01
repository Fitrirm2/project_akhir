import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.otp !== otp) {
      return NextResponse.json({ error: "OTP tidak valid" }, { status: 400 });
    }

    if (user.otpExpires && user.otpExpires < new Date()) {
      return NextResponse.json({ error: "OTP sudah kadaluarsa" }, { status: 400 });
    }

    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        otp: null,
        otpExpires: null,
      },
    });

    return NextResponse.json({ message: "Akun berhasil diverifikasi" });
  } catch (error) {
    console.error("Verifikasi OTP error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
