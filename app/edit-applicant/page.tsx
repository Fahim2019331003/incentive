'use client';
import Image from 'next/image';
import { useState } from 'react';
import EditAppArr from '../components/edit-applicant/editAppArr';
import EditAppItem from '../components/edit-applicant/editAppItem';

const imageStyle = {
  borderRadius: '5%',
};

const Page = () => {
  const [updateApplicant, setUpdateApplicant] = useState({
    appId: 'AS/2023/65',
    name: 'MD. Peal Hassan',
    designation: 'Professor',
    dept: 'CSE',
    school: 'School of Applied Science',
    journal: 'Research Gate',
    title: 'An Intensive Research to Go India by Using Underground Tunnel',
    affAuth: [
      'zakaria43@student.sust.edu',
      'arjoy26@student.sust.edu',
      'lazim08@student.sust.edu',
      'mim24@student.sust.edu',
    ],
    corAuth: ['Zakaria Sarker', 'A R Joy', 'S H Lazim', 'Mustaq Mujahid Mim'],
    artNum: 2,
    qIndex: 'Q1',
    publisher: 'Md. Abullah, Persia, Bora Fact Finding Lab',
    volNumDate: 'Vol: 19(11), May 2022',
    awrd_rcg: 'No',
    patentDetail: 'Patent Detail will be added',
  });

  const handleChange = (fieldName, value) => {
    setUpdateApplicant({ ...updateApplicant, [fieldName]: value });
  };

  const handleSubmit = () => {
    console.log('Form data:', updateApplicant);
  };

  return (
    // Application Id and edit icon
    <main className="min-h-screen px-5 xl:px-10 xl:pt-10">
      <div className="flex max-w-5xl mx-auto">
        <div className="mt-6 flex-1 flex justify-start">
          <div className="font-bold text-2xl w-48">Application Id:</div>
          <div className="flex items-center">{updateApplicant.appId}</div>
        </div>
      </div>

      {/* Photo and Name */}
      <div className="flex items-center m-6 max-w-5xl mx-auto">
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            marginRight: '2rem',
          }}
        >
          <Image
            alt="person"
            src="/images/person2.jpg"
            layout="fill"
            objectFit="cover"
            style={imageStyle}
          />
        </div>
        <div
          className="flex-col py-2 max-w-4xl whitespace-normal"
          style={{ overflowWrap: 'break-word' }}
        >
          <div className="font-bold text-4xl">{updateApplicant.name}</div>
        </div>
      </div>

      {/* Form Contents */}
      <div className="flex-col justify-center max-w-5xl mx-auto">
        <div className="mt-6">
          <EditAppItem
            title="Name: "
            value={updateApplicant.name}
            onChange={(value) => handleChange('name', value)}
          />
          <EditAppItem
            title="Designation: "
            value={updateApplicant.designation}
            onChange={(value) => handleChange('designation', value)}
          />
          <EditAppItem
            title="Department: "
            value={updateApplicant.dept}
            onChange={(value) => handleChange('dept', value)}
          />
          <EditAppItem
            title="School: "
            value={updateApplicant.school}
            onChange={(value) => handleChange('school', value)}
          />
          <EditAppItem
            title="Name of the Journal: "
            value={updateApplicant.journal}
            onChange={(value) => handleChange('journal', value)}
          />
          <EditAppItem
            title="Title of the Article: "
            value={updateApplicant.title}
            onChange={(value) => handleChange('title', value)}
          />
          <EditAppArr
            title="Authors order with affliation as in the article:"
            value={updateApplicant.affAuth}
            onChange={(value) => handleChange('affAuth', value)}
          />
          <EditAppArr
            title="Name of the corresponding author:"
            value={updateApplicant.corAuth}
            onChange={(value) => handleChange('corAuth', value)}
          />
          <EditAppItem
            title="Number of articles submitted for incentive- 2024: "
            value={updateApplicant.artNum}
            onChange={(value) => handleChange('artNum', value)}
          />
          <EditAppItem
            title="Q Index of the Article: "
            value={updateApplicant.qIndex}
            onChange={(value) => handleChange('qIndex', value)}
          />
          <EditAppItem
            title="Name and Address of Publisher: "
            value={updateApplicant.publisher}
            onChange={(value) => handleChange('publisher', value)}
          />
          <EditAppItem
            title="Volume number with date: "
            value={updateApplicant.volNumDate}
            onChange={(value) => handleChange('volNumDate', value)}
          />
          <EditAppItem
            title="Patent detail: "
            value={updateApplicant.patentDetail}
            onChange={(value) => handleChange('patentDetail', value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center my-9 max-w-6xl mx-auto">
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
