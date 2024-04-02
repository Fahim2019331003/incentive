import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const {
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
  } = body.data;

  try {
    const application = await prisma.application.create({
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
        applicant: {
          connect: {
            email: applicantEmail as string,
          },
        },
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

