import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

//gives a response with a valid email. otherwise returns error.

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email } = body.data;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'true' });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error.mesage);
  }
}
