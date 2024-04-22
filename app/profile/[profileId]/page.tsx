import getCurrentUser from '@/app/actions/getCurrentUser';
import getProfileData from '@/app/actions/getProfileData';
import Loader from '@/app/components/Loader';
import ProfileClient from '@/app/components/profile/ProfileClient';
import UserProfile from '@/app/components/profile/UserProfile';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Page = async ({ params }) => {
  
  const user=await getCurrentUser();
  if( !(user?.role === "ADMIN" || user?.role === "COORDINATOR" || user?.id === params.profileId) ){
    // console.log(user?.role );
    // console.log(params.profileId );
    return (
      <main className="min-h-screen xl:px-10 xl:pt-10">
        You are not allowed to visit this page.
      </main>
    )
  }

  

  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <ProfileClient viewer={user} profileId={params.profileId}/>
    </main>
  );
};

export default Page;
