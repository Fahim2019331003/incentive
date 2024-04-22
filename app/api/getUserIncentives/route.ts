import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userEmail} = body.data;

    const applications = await prisma.application.findMany({
        where:{
            status:"PAID",
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
        }
    });

    const data= await Promise.all(
        applications.map(async (application) => {
            const payments= await prisma.payment.findMany({
                where:{
                    applicationId:application.id as string,
                }
            })
            const datas= await Promise.all(
                payments.map(async (payment)=>{
                    const user=await prisma.user.findFirst({
                        where:{
                            id:payment.userId as string,
                        }
                    })
                    return {
                        applicationId:application.id,
                        name:user?.name,
                        amount:payment.amount,
                        type:payment.type,
                    }
                })
            )
            return {
                applicationId:application.id,
                datas,
            }
        })
      );
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
