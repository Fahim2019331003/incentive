import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";



export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUserRole() {
  try {
    const session = await getSession();

    
    
    

    
    if(session){
        console.log(session.user);
    }
    else{
        console.log("No user found");
    }
  } catch (error: any) {
    return null;
  }
}
