"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewModulPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    judul: "",
    mataPelajaran: "",
    kelas: "",
    penulis: "",
    tahun: "",
    capaian: "",
    detailPenggunaan: "",
    rancangan: "",
    langkah: "",
    media: "",
    assessment: "",
    userId: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    await fetch("/api/modul", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/dashboard/modul");
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-orange-700 text-center mb-6">
          Tambah Modul Pembelajaran
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-gray-500">
          {[
            { label: "Judul", name: "judul", type: "text" },
            { label: "Mata Pelajaran", name: "mataPelajaran", type: "text" },
            { label: "Kelas/Fase", name: "kelas", type: "text" },
            { label: "Penulis", name: "penulis", type: "text" },
            { label: "Tahun", name: "tahun", type: "number" },
            { label: "Media Pembelajaran", name: "media", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-orange-800 mb-1">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
          ))}

          {[
            { label: "Capaian / Tujuan Pembelajaran", name: "capaian" },
            { label: "Detail Penggunaan", name: "detailPenggunaan" },
            { label: "Rancangan Modul", name: "rancangan" },
            { label: "Langkah Kegiatan", name: "langkah" },
            { label: "Assessment", name: "assessment" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-orange-800 mb-1">{field.label}</label>
              <textarea
                name={field.name}
                rows={4}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
            >
              Simpan Modul
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
