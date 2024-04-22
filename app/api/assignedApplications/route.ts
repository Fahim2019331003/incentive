import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const {
        userId
    }=body.data;

    switch(userId){
      case "":{
        const data = await prisma.application.findMany({
          where: {
            status: 'ASSIGNED',
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
    
        const application = await Promise.all(
          data.map(async (item) => {
            const evaluation = await prisma.evaluation.findFirst({
              where: {
                applicationId: item.id as string,
              },
              select: {
                evaluatedBy: true,
              },
            });
            
            
    
            if (!evaluation) {
              return;
            } else
              return {
                ...item,
                evaluatedBy: evaluation?.evaluatedBy,
              };
          })
        );
    
        return NextResponse.json(application);
      }
      default:{
        const evaluations = await prisma.evaluation.findMany({
          where:{
              evaluationId:userId,
          },
          select: {
            id:true,
            applicationId:true,
            evaluatedBy: true,
          },
        })

        if(!evaluations){
          return NextResponse.json([]);
        }
    
        const application = await Promise.all(
            evaluations.map(async (evaluation) => {
                const data = await prisma.application.findFirst({
                    where: {
                        id:evaluation.applicationId as string,
                        status: "ASSIGNED"
                    
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
                console.log(data);
                if(!data){
                    return;
                }else return {
                    ...data,
                    evaluatedBy:evaluation?.evaluatedBy,                     
                }
                
            })
        );
        const finalList = application.filter(item => typeof item !== 'undefined');
        // console.log(finalList);
    
        return NextResponse.json(finalList);
      }
    }

    
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
