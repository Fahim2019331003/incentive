import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const notices = await prisma.notice.findMany({
        orderBy: {
            createdAt: 'desc',
          },
    });

    
    return NextResponse.json(notices);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
