import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb"

export async function POST(request: Request) {
  const body = await request.json();
  const currentUser = await getCurrentUser();
  // console.log(currentUser);
  const {
    department,
    school,
    title,
    qIndex,
    PublishernameAndAddress,
    volAndDate,
  } = body.data;

  try {
    

    const application = await prisma.application.create({
      data: {
        department,
        school,
        title,
        qIndex,
        PublishernameAndAddress,
        volAndDate,
        applicant: {},
      },

    });
    // need to check this.
    if (currentUser) {
      const applicationWithApplicant = await prisma.application.update({
        where: {
          id: application.id as string,
        },
        data: {
          applicant: {
            connect: {
              email: currentUser.email as string,
            },
          },
        },
      });

      return NextResponse.json(applicationWithApplicant);
    }

    return NextResponse.json(application);
    // return NextResponse.json({ message: 'Hello' });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.mesage);
  }
}
