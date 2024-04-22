import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userEmail, tableType } = body.data;

    switch (tableType) {
      case 'all': {
        const data = await prisma.application.findMany({
          where: {
            OR: [
              {
                applicant: {
                  email: userEmail,
                },
              },
              {
                affiliatedPersons: {
                  has: userEmail,
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });
        return NextResponse.json(data);
      }
      case "rejected":{
        const data = await prisma.application.findMany({
          where: {
            OR: [
              {
                applicant: {
                  email: userEmail,
                },
              },
              {
                affiliatedPersons: {
                  has: userEmail,
                },
              },
            ],
            status:"REJECTED",
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
        
      }
      default: {

        const tableStatus = tableType.toUpperCase();
        const data = await prisma.application.findMany({
          where: {
            OR: [
              {
                applicant: {
                  email: userEmail,
                },
              },
              {
                affiliatedPersons: {
                  has: userEmail,
                },
              },
            ],
            status:tableStatus,
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
      }
    }

   
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
