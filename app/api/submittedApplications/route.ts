import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await prisma.application.findMany({
      where: {
        status: "PENDING",
      },
      select: {
        id: true,
        title: true,
        department: true,
        journalName: true,
        applicant: {
          select: {
            name: true,
          },
        },
        affiliatedPersons: true,
        volAndDate: true,
        status: true,
        qIndex: true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
