/*
  Warnings:

  - You are about to drop the `Materi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modul` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teori` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Materi";

-- DropTable
DROP TABLE "Modul";

-- DropTable
DROP TABLE "Teori";

-- CreateTable
CREATE TABLE "TeoriPerkembangan" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeoriPerkembangan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModulPembelajaran" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModulPembelajaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MateriEdukasi" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MateriEdukasi_pkey" PRIMARY KEY ("id")
);
