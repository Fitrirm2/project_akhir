"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Daftar gagal, silahkan coba lagi");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white-100">
      {/* Left Form */}
      <div className="flex items-center justify-center p-10">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-orange-700">Selamat Datang Kembali</h1>
          <p className="text-sm text-gray-500">Masuk untuk mengelola materi dan mendampingi tumbuh kembang anak-anak hebat!
</p>

          <input
            type="email"
            placeholder="Email"
            className="text-gray-600 w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="text-gray-600 w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" /> Ingat aku
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-200"
          >
            Masuk
          </button>

          <p className="text-gray-600 text-center text-sm">
            Belum punya akun?{" "}
            <a href="/register" className="text-orange-600 hover:underline">Daftar Yuk!</a>
          </p>
        </form>
      </div>

      {/* Right Illustration */}
      <div className="hidden md:flex items-center justify-center bg-orange-100 p-8">
        <Image
          src="/anak.jpg"
          alt="Login Illustration"
          width={550}
          height={550}
          className="object-contain"
        />
      </div>
    </div>
  );
}
