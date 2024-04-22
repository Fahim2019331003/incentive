import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    
    const body = await request.json();
    const { noticeText} = body.data;


    const notice = await prisma.notice.create({
        data: {
        text:noticeText,
        },
    });
   
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
