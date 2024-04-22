'use client';

import ProfileImage from '../../components/profile/image';
import ProfileItem from './ProfileItem';

import { Button, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const UserProfile = ({ user, isEditOpen, setEditOpen, changed, viewer }) => {
  const router = useRouter();
  const [profileData, setProfileData] = useState(user);
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response: any = await getProfileData(userId);
        // if (response.result === 'success') {
        //   setProfileData(response.data);
        // } else {
        //   router.replace('/404');
        // }
        const userString = {
          name: user.name,
          email: user.email,
          image: user.image ? user.image : '',
          designation: user.designation ? user.designation : '',
          department: user.department ? user.department : '',
          school: user.school ? user.school : '',
          bankinfo: user.bankinfo ? user.bankinfo : '',
          contact: user.contact ? user.contact : '',
          role: user.role,
        };
        setProfileData(userString);
        setLoading(0);
      } catch (error) {
        // console.error('Error fetching data:', error);
        // toast.error('No such user');
        // router.replace("/404");
        setLoading(0);
      }
    };
    fetchData();
  }, [changed, user]);

  return (
    <div>
      <Card className="mt-10 mb-10 px-10 pt-10 pb-16">
        <CardBody>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="flex items-center m-10 max-w-6xl mx-auto">
                <ProfileImage src={profileData?.image} />

                <div className="flex-col py-2 ml-6 max-w-4xl">
                  <div className="font-bold text-4xl">{profileData?.name}</div>
                  {profileData?.role !== '' && (
                    <div className="font-semibold text-md mt-4">
                      {profileData?.role}
                    </div>
                  )}
                </div>

                {(viewer?.role === 'ADMIN' || user.email === viewer.email) && (
                  <div className="flex-1 flex justify-end items-center">
                    <Button
                      onClick={(e) => setEditOpen(!isEditOpen)}
                      isIconOnly
                      className="bg-white"
                    >
                      <Image
                        src={'/editProfile.png'}
                        width={35}
                        height={35}
                        alt={'right'}
                      />
                    </Button>
                  </div>
                )}
              </div>

              <hr className="border-b border-gray-300 w-1/2 mx-auto my-4" />

              <div className="flex-col justify-center max-w-6xl mx-auto">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4 ">
                    Personal Information
                  </h1>
                  <ProfileItem title="Name: " info={profileData?.name} />
                  <ProfileItem title="Email: " info={profileData?.email} />
                  <ProfileItem title="Phone: " info={profileData?.contact} />
                </div>
              </div>

              <div className="flex-col justify-center max-w-6xl mx-auto my-6">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4">
                    Professional Information
                  </h1>
                  <ProfileItem
                    title="Department: "
                    info={profileData?.department}
                  />
                  <ProfileItem title="School: " info={profileData?.school} />
                  <ProfileItem
                    title="Designation: "
                    info={profileData?.designation}
                  />
                </div>
              </div>

              <div className="flex-col justify-center max-w-6xl mx-auto my-6">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4">Bank Information</h1>
                  <ProfileItem
                    title="Account No: "
                    info={profileData?.bankinfo}
                  />
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default UserProfile;
