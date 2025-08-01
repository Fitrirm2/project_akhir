-- CreateTable
CREATE TABLE "Teori" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modul" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "guruEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Modul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materi" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Materi_pkey" PRIMARY KEY ("id")
);
