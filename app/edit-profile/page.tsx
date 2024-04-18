'use client';
import { useState } from 'react';
import EditProfileItem from '../components/edit-profile/editProfileItem';
import ProfileImage from '../components/profile/image';

const imageStyle = {
  borderRadius: '5%',
};

const Page = () => {
  /* Data from the profile page */
  const [updateData, setUpdateData] = useState({
    appId: 'AS/2023/65',
    name: 'Peal Hassan',
    designation: 'Professor',
    dept: 'CSE',
    school: 'School of Applied Science',
    email: 'pealhasan45@gmail.com',
    phone: '+8801756291849',
    acc: '***********',
  });

  const handleChange = (fieldName, value) => {
    setUpdateData({ ...updateData, [fieldName]: value });
  };

  const handleSubmit = () => {
    console.log('Form data:', updateData);
  };

  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <div className="flex items-center m-10 max-w-6xl mx-auto">
        <ProfileImage />

        <div className="flex-col py-2 ml-6 max-w-4xl">
          <div className="font-bold text-6xl">{updateData.name}</div>
          <div className="font-semibold text-3xl mt-4">
            {updateData.designation} at Department of {updateData.dept}
          </div>
        </div>
      </div>

      <hr className="border-b border-gray-300 w-1/2 mx-auto my-4" />

      <div className="flex-col justify-center max-w-6xl mx-auto">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Personal Information</h1>
          <EditProfileItem
            title="Name: "
            value={updateData.name}
            onChange={(value) => handleChange('name', value)}
          />
          <EditProfileItem
            title="Email: "
            value={updateData.email}
            onChange={(value) => handleChange('email', value)}
          />
          <EditProfileItem
            title="Phone: "
            value={updateData.phone}
            onChange={(value) => handleChange('phone', value)}
          />
        </div>
      </div>

      <div className="flex-col justify-center max-w-6xl mx-auto my-6">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Professional Information</h1>
          <EditProfileItem
            title="Department: "
            value={updateData.dept}
            onChange={(value) => handleChange('dept', value)}
          />
          <EditProfileItem
            title="School: "
            value={updateData.school}
            onChange={(value) => handleChange('school', value)}
          />
          <EditProfileItem
            title="Designation: "
            value={updateData.designation}
            onChange={(value) => handleChange('designation', value)}
          />
        </div>
      </div>

      <div className="flex-col justify-center max-w-6xl mx-auto my-6">
        <div className="my-2">
          <h1 className="font-bold text-3xl mb-4">Bank Information</h1>
          <EditProfileItem
            title="Account No: "
            value={updateData.acc}
            onChange={(value) => handleChange('acc', value)}
          />
        </div>
      </div>

      <div className="flex justify-center my-4 max-w-6xl mx-auto">
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default Page;
