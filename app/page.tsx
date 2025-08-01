export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-18 h-18" />
            <span className="text-xl font-bold text-orange-800">Dunia Anak-Anak</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col min-h-screen bg-orange-100">
        <div className="flex-1 px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 leading-tight">
              Selamat Datang di <span className="text-orange-500">Dunia Anak-Anak</span>
            </h2>
            <p className="text-gray-500 mt-4">Platform Edukasi Interaktif untuk Anak Usia Dini dan Pendidik.</p>
            <p className="text-gray-500 mt-4">Dunia Anak-Anak adalah portal pembelajaran yang dirancang khusus untuk mendukung perkembangan anak usia dini melalui materi edukatif yang menyenangkan dan berbasis teori perkembangan anak.</p>
            <p className="text-gray-500 mt-4">Bergabunglah dengan kami untuk pengalaman belajar yang menyenangkan dan bermanfaat untuk anak-anak.</p>
            <div className="mt-6 flex gap-4">
              <a
                href="/login"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow"
              >
                Masuk
              </a>
            </div>
          </div>

          {/* Gambar */}
          <div className="hidden md:flex items-center justify-end p-8 rounded-xl">
            <img
              src="/yaya.jpg"
              alt="gambar"
              width={700}
              height={700}
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white py-4 border-t bg-orange-500 border-orange-200">
          © {new Date().getFullYear()} by Fitri Ramadhani
        </footer>
      </main>
    </>
  );
}
