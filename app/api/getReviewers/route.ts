import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await prisma.user.findMany({
      where: {
        role: 'EVALUATOR',
      },
      select: {
        id: true,
        name:true,
        email:true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
