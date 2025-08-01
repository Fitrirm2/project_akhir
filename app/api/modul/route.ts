import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const data = await req.json();

  console.log("SESSION:", session);
  console.log("DATA:", data);

  if (!session || !session.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const modul = await prisma.modul.create({
    data: {
      ...data,
      userId: session.user.id,
    },
  });

  return Response.json(modul);
}

export async function GET() {
  const moduls = await prisma.modul.findMany({
    orderBy: { createdAt: "desc" },
  });
  return Response.json(moduls);
}
