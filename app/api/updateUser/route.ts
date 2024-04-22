import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { 
        name,
    email,
    image,
    designation,
    department,
    school,
    bankinfo,
    contact,
     } =
      body.data;

    
        const data = await prisma.$transaction(async (prismaClient) => {

            const user= await prismaClient.user.findUnique({
                where:{
                    email:email,
                }
            })
            if(!user){
                return NextResponse.json({ message: 'failure' });
            }
            

            const updatedUser =await prismaClient.user.update({
                where:{
                    id:user.id as string,
                },
                data:{
                    name:name,
                    image:image,
                    designation:designation,
                    department:department,
                    school:school,
                    bankinfo:bankinfo,
                    contact:contact,
                }
            })
          
        });
        return NextResponse.json({ message: 'success' });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
