import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';



export async function POST(request: Request) {
  try {
    const data= await request.json();

    const { email } = data;
    // console.log(email);
    // return NextResponse.json(email);

    const user = await prisma.user.findFirst({
      where: {
        email: email ,
      },
    });

    // console.log(user);

    if (!user) {
      return NextResponse.json({ error: 'true' });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error.mesage);
  }
}
