import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { search } = body.data;

    if (search === '') {
      const data = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          department: true,
        },
      });
      return NextResponse.json(data);
    } else {
      const data = await prisma.user.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              email: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          department: true,
        },
      });
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
