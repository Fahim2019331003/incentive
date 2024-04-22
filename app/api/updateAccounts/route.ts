import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { accountIds, role } = body.data;

    const data = await prisma.$transaction(async (prismaClient) => {
      for (const id of accountIds) {
        const updatedRecord = await prismaClient.user.update({
          where: {
            id: id,
          },
          data: {
            role: role,
          },
        });
      }
    });
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
