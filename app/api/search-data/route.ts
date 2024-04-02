import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const queryText = body.data;

    const data = await prisma.application.findMany({
      where: {
        OR: [
          {
            applicant: {
              name: {
                contains: queryText,
                mode: "insensitive"
              },
            },
          },
          {
            applicant: {
              email: {
                contains: queryText,
              },
            },
          },
        ],
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
      },
    });
    
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
