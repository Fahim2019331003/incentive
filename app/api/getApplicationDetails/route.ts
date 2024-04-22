import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

//returns details of each applications



export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { applicationId } = body.data;

    const application = await prisma.application.findUnique({
      where: {
        id: applicationId as string,
      },
      select: {
        id: true,
        title: true,
        department: true,
        journalName: true,
        applicant: {
          select: {
            name: true,
            id: true,
            email: true,
            designation:true,
            image:true,
          },
        },
        affiliatedPersons: true,
        volAndDate: true,
        status: true,
        qIndex: true,
        totalAuthors:true,
        PublishernameAndAddress:true,
        awardDetails:true,
        patentDetails:true,
        createdAt:true,
        school:true,
        correspondingAuthor:{
          select:{
            email:true,
            id:true,
            name:true,
          }
        }
      },
    });

    

    // console.log(application);
    if (!application) return NextResponse.json(application);

    

    if (
      application?.status === 'PENDING' ||
      application?.status === 'PROCESSING'
    ) {
      return NextResponse.json(application);
    }

    const evaluation = await prisma.evaluation.findFirst({
      where: {
        applicationId: applicationId as string,
      },
      select: {
        evaluatedBy: {
          select: {
            name: true,
            id: true,
            email: true,
          },
        },
        feedback: true,
      },
    });

    if (!evaluation) return NextResponse.json(application);

    const data = {
      ...application,
      ...evaluation,
    };

    // const persons:any = data.affiliatedPersons;
    // const names = await Promise.all(
    // persons.map(async (person) => {
    //     const response = await isValidUser(person);
    //     return response?.data?.name;
    // })
    // );

    //   console.log(applicationData);
    // return data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
