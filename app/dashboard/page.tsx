import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen bg-orange-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md rounded-r-3xl">
        <div className="text-center">
          <Image src="/avatar.jpg" alt="Profile" width={64} height={64} className="mx-auto rounded-full" />
          <h2 className="mt-4 font-semibold text-orange-400">{session?.user?.name}</h2>
          <p className="text-sm text-orange-500">{session?.user?.email}</p>
        </div>

        {/* Menu */}
        <nav className="mt-10 space-y-4 text-orange-600 font-medium">
          <Link href="/dashboard/modul" className="block hover:text-orange-800">Modul Pembelajaran</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-orange-700">Dashboard</h1>
        </header>

        {/* Konten Awal */}
        <p className="text-orange-700">Silakan pilih fitur dari sidebar.</p>
      </main>
    </div>
  );
}
