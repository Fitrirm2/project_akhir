import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await req.json();

  try {
    const updated = await prisma.modul.update({
      where: { id },
      data,
    });

    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Modul tidak ditemukan atau gagal update" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.modul.delete({
      where: { id },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Gagal hapus modul" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
