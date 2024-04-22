import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const {
        userId
    }=body.data;

    const evaluations = await prisma.evaluation.findMany({
        where:{
            evaluationId:userId,
        }
    })

    const application = await Promise.all(
        evaluations.map(async (evaluation) => {
            const data = await prisma.application.findFirst({
                where: {
                    id:evaluation.applicationId as string,
                    AND:{
                        status: {
                            in: ["ACCEPTED", "REJECTED","PAID"],
                        },
                    },
                    
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
            if(!data){
                return;
            }else return {
                ...data,
                feedback:evaluation.feedback,                         
            }
            
        })
    );
    const finalList = application.filter(item => typeof item !== 'undefined');
    // console.log(finalList);

    return NextResponse.json(finalList);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
