import axios from 'axios';
import { isValidUser } from './checkApplication';
import prisma from '@/app/libs/prismadb';


//Not a backend call

export default async function getApplicationWithIds(applicationId) {

    
    try{
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
                },
              },
              affiliatedPersons: true,
              volAndDate: true,
              status: true,
              qIndex: true,
            },
          });
        // console.log(application);
        if(!application) return null;
      
        if(application?.status==="PENDING" || application?.status==="PROCESSING")
        {
            return application;
        }
    
        const evaluation=await prisma.evaluation.findFirst({
            where:{
                applicationId:applicationId as string,
                
            },
            select:{
                evaluatedBy:{
                    select: {
                        name: true,
                        id: true,
                        email: true,
                    },
                },
                feedback:true,
    
            }
        })

        if(!evaluation) return application;
    
    
        const data={
            ...application,
            ...evaluation
        }

        
        // const persons:any = data.affiliatedPersons;
        // const names = await Promise.all(
        // persons.map(async (person) => {
        //     const response = await isValidUser(person);
        //     return response?.data?.name;
        // })
        // );
              
           
          
    //   console.log(applicationData);
        return data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}
