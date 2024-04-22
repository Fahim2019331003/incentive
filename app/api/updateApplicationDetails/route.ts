import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const body = await request.json();

  const {
    id,
    applicantEmail,
    department,
    school,
    journalName,
    qIndex,
    title,
    affiliatedPersons,
    correspondingAuthor,
    PublishernameAndAddress,
    volAndDate,
    awardDetails,
    patentDetails,
    totalAuthors,
  } = body.data;

  try {
    const application = await prisma.application.update({
        where:{
            id:id as string,
        },
      data: {
        department,
        school,
        journalName,
        title,
        qIndex,
        PublishernameAndAddress,
        volAndDate,
        awardDetails,
        patentDetails,
        affiliatedPersons,
        totalAuthors,
        correspondingAuthor: {
          connect: {
            email: correspondingAuthor as string,
          },
        },
      },
    });

    return NextResponse.json(application);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
