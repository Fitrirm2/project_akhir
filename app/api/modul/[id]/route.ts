import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params; 
  const data = await req.json();

  try {
    const updated = await prisma.modul.update({
      where: { id },
      data,
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Modul tidak ditemukan atau gagal update" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    await prisma.modul.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal hapus modul" },
      { status: 500 }
    );
  }
}
