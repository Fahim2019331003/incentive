import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const data = await prisma.application.updateMany({
      data:{
        totalAuthors:"2",
      }
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
