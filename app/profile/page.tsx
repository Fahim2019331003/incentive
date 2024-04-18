import EditProfile from '../components/profile/editProfile';
import ProfileImage from '../components/profile/image';
import ProfileItem from '../components/profile/profileItem';
import { profileData } from './data';

const imageStyle = {
  borderRadius: '5%',
};

const Page = () => {
  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <div className="flex items-center m-10 max-w-6xl mx-auto">
        <ProfileImage />

        <div className="flex-col py-2 ml-6 max-w-4xl">
          <div className="font-bold text-6xl">{profileData[0].name}</div>
          <div className="font-semibold text-3xl mt-4">
            {profileData[0].designation} at Department of {profileData[0].dept}
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <EditProfile />
        </div>
      </div>

      <hr className="border-b border-gray-300 w-1/2 mx-auto my-4" />

      <div className="flex-col justify-center max-w-6xl mx-auto">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Personal Information</h1>
          <ProfileItem title="Name: " info={profileData[0].name} />
          <ProfileItem title="Email: " info={profileData[0].email} />
          <ProfileItem title="Phone: " info={profileData[0].phone} />
        </div>
      </div>

      <div className="flex-col justify-center max-w-6xl mx-auto my-6">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Professional Information</h1>
          <ProfileItem title="Department: " info={profileData[0].dept} />
          <ProfileItem title="School: " info={profileData[0].school} />
          <ProfileItem
            title="Designation: "
            info={profileData[0].designation}
          />
        </div>
      </div>

      <div className="flex-col justify-center max-w-6xl mx-auto my-6">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Bank Information</h1>
          <ProfileItem title="Account No: " info={profileData[0].acc} />
        </div>
      </div>
    </main>
  );
};

export default Page;
