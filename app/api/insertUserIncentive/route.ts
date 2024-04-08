import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const users = await prisma.user.findMany();

    const data = await prisma.$transaction(async (prismaClient) => {
      for (const user of users) {
        const incentive = await prisma.incentive.create({
          data: {
            totalPaid: "0",
            totalPayment: "0",
            incentiveFor: {
              connect: {
                id: user.id,
              },
            },
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
