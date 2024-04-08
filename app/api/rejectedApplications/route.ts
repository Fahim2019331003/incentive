import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await prisma.application.findMany({
      where: {
        status: 'REJECTED',
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

    

    const response =await Promise.all( data.map(async (item) => {

      const evaluation = await prisma.evaluation.findFirst({
        where: {
          applicationId: item.id as string,
        },
        select: {
          feedback: true,
        },
      });
      const temp={
        ...item,
        feedback:evaluation?.feedback
      }
      return temp;
      
    }));
    // console.log(response);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
