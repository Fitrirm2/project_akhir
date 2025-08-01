import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updated = await prisma.modul.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Modul tidak ditemukan atau gagal update" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.modul.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Gagal hapus modul" },
      { status: 500 }
    );
  }
}
