import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { queryText, tableType } = body.data;

    switch (tableType) {
      case "assigned":{
        const data = await prisma.application.findMany({
          where: {
            status:"ASSIGNED",
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });

        return NextResponse.json(data);
      }
      case "paid":{
        const data = await prisma.application.findMany({
          where: {
            status:"PAID",
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            status:"REJECTED",
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });

        return NextResponse.json(data);
      }

      case "pending":{
        const data = await prisma.application.findMany({
          where: {
            status:"PENDING",
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });

        return NextResponse.json(data);
      }
        
      case "processing":{
        const data = await prisma.application.findMany({
          where: {
            status:"PROCESSING"
            ,
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });

        return NextResponse.json(data);

      }

      case "accepted":{
        const data = await prisma.application.findMany({
          where: {
            status:"ACCEPTED"
            ,
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            volAndDate: true,
            status: true,
            qIndex: true,
          },
        });

        return NextResponse.json(data);








      }
      case "dashboard": {
        const data = await prisma.application.findMany({
          where: {
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
            AND:[
              {
                OR:[
                  {
                    status:"ACCEPTED"
                  },
                  {
                    status:"PAID"
                  },
                ]
              }
            ]
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
      

      default: {
        const data = await prisma.application.findMany({
          where: {
            OR: [
              {
                applicant: {
                  name: {
                    contains: queryText,
                    mode: 'insensitive',
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
