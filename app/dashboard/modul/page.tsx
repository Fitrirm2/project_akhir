"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ModulPage() {
  const [moduls, setModuls] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/modul")
      .then((res) => res.json())
      .then(setModuls);
  }, []);

  async function handleDelete(id: string) {
    if (confirm("Yakin ingin hapus modul ini?")) {
      await fetch(`/api/modul/${id}`, { method: "DELETE" });
      setModuls(moduls.filter((m) => m.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          Daftar Modul Pembelajaran
        </h2>

        <div className="flex justify-end mb-4">
          <Link
            href="/dashboard/modul/new"
            className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            + Tambah Modul
          </Link>
        </div>

        <table className="w-full text-sm text-left border border-orange-200 rounded">
          <thead className="bg-orange-100 text-orange-800 uppercase">
            <tr>
              <th className="p-3 border">Judul</th>
              <th className="p-3 border">Mata Pelajaran</th>
              <th className="p-3 border">Kelas/Fase</th>
              <th className="p-3 border">Penulis</th>
              <th className="p-3 border">Tahun</th>
              <th className="p-3 border">Media Pembelajaran</th>
              <th className="p-3 border">Capaian Pembelajaran</th>
              <th className="p-3 border">Detail Penggunaan</th>
              <th className="p-3 border">Rancangan Modul</th>
              <th className="p-3 border">Langkah Kegiatan</th>
              <th className="p-3 border">Assessment</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {moduls.length === 0 ? (
              <tr>
                <td colSpan={12} className="p-4 text-center text-orange-600">
                  Belum ada modul yang ditambahkan.
                </td>
              </tr>
            ) : (
              moduls.map((modul) => (
                <tr key={modul.id} className="hover:bg-orange-50">
                  <td className="p-3 border">{modul.judul}</td>
                  <td className="p-3 border">{modul.mataPelajaran}</td>
                  <td className="p-3 border">{modul.kelas}</td>
                  <td className="p-3 border">{modul.penulis || "-"}</td>
                  <td className="p-3 border">{modul.tahun || "-"}</td>
                  <td className="p-3 border">{modul.media || "-"}</td>
                  <td className="p-3 border">{modul.capaian || "-"}</td>
                  <td className="p-3 border">{modul.detail || "-"}</td>
                  <td className="p-3 border">{modul.rancangan || "-"}</td>
                  <td className="p-3 border">{modul.langkah || "-"}</td>
                  <td className="p-3 border">{modul.assessment || "-"}</td>
                  <td className="p-3 border text-center space-x-2">
                    <Link
                      href={`/dashboard/modul/edit/${modul.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(modul.id)}
                      className="text-red-600 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
