/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `MateriEdukasi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModulPembelajaran` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeoriPerkembangan` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "emailVerified",
DROP COLUMN "password";

-- DropTable
DROP TABLE "MateriEdukasi";

-- DropTable
DROP TABLE "ModulPembelajaran";

-- DropTable
DROP TABLE "TeoriPerkembangan";

-- CreateTable
CREATE TABLE "Modul" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "mataPelajaran" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "capaian" TEXT NOT NULL,
    "detailPenggunaan" TEXT NOT NULL,
    "rancangan" TEXT NOT NULL,
    "langkah" TEXT NOT NULL,
    "media" TEXT NOT NULL,
    "assessment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Modul_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modul" ADD CONSTRAINT "Modul_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
