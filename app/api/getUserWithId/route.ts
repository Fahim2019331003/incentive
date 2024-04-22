import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

//gives a response with a valid email. otherwise returns error.

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userId } = body.data;

    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    });

    if (!user) {
      return NextResponse.json({error:"true"});
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
