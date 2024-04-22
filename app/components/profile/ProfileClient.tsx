"use client";
import getProfileData from '@/app/actions/getProfileData';
import Loader from '@/app/components/Loader';
import UserProfile from '@/app/components/profile/UserProfile';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EditProfile from './EditProfile';

const ProfileClient = ({profileId ,viewer}) => {
    const router = useRouter();
  const [datas,setDatas]=useState(null);
  const [loading,setLoading]=useState(1);
  const [isEditOpen,setEditOpen]=useState(0);
  const [changed,setChanged]=useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user: any = await getProfileData(profileId);
       
        
        if (!user) {
          router.push('/404');
        }
        setDatas(user);
        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [changed]);
  return (
    <div>
        {loading?<Loader/> :( 
            <div>
                {isEditOpen?(<EditProfile user={datas} isEditOpen={isEditOpen} setEditOpen={setEditOpen} changed={changed} setChanged={setChanged} viewer={viewer}/>):
                (<UserProfile user={datas} isEditOpen={isEditOpen} setEditOpen={setEditOpen} changed={changed} viewer={viewer}/>)
                }

            </div>



        )}
    </div>
  )
}

export default ProfileClient