"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditModulPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    judul: "",
    mataPelajaran: "",
    kelas: "",
    penulis: "",
    tahun: "",
    media: "",
    capaian: "",
    detailPenggunaan: "",
    rancangan: "",
    langkah: "",
    assessment: "",
  });

  useEffect(() => {
    fetch(`/api/modul/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setForm(data);
        }
      });
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/modul/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/dashboard/modul");
    } else {
      alert("Gagal update modul");
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-orange-700 text-center">
          Edit Modul Pembelajaran
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* kolom */}
          <div className="text-gray-500 space-y-4">
            <div>
              <label className="block text-orange-700 font-medium mb-1">Judul</label>
              <input
                name="judul"
                value={form.judul}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Mata Pelajaran</label>
              <input
                name="mataPelajaran"
                value={form.mataPelajaran}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Kelas/Fase</label>
              <input
                name="kelas"
                value={form.kelas}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Penulis</label>
              <input
                name="penulis"
                value={form.penulis}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Tahun</label>
              <input
                name="tahun"
                value={form.tahun}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="number"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Media Pembelajaran</label>
              <input
                name="media"
                value={form.media}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="text-gray-500 space-y-4">
            <div>
              <label className="block text-orange-700 font-medium mb-1">Capaian / Tujuan Pembelajaran</label>
              <textarea
                name="capaian"
                value={form.capaian}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Detail Penggunaan Pembelajaran</label>
              <textarea
                name="detailPenggunaan"
                value={form.detailPenggunaan}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Rancangan Modul</label>
              <textarea
                name="rancangan"
                value={form.rancangan}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Langkah Kegiatan</label>
              <textarea
                name="langkah"
                value={form.langkah}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-orange-700 font-medium mb-1">Assessment</label>
              <textarea
                name="assessment"
                value={form.assessment}
                onChange={handleChange}
                className="w-full border border-orange-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
