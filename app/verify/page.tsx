"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("verifyEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    if (res.ok) {
      alert("Verifikasi berhasil, silakan login.");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(data.error || "OTP salah atau kadaluarsa.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4 text-gray-500">
      <form onSubmit={handleVerify} className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-4">
        <h1 className="text-xl font-bold text-orange-700">Verifikasi Email</h1>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kode OTP"
          required
          className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded">
          Verifikasi
        </button>
      </form>
    </div>
  );
}
