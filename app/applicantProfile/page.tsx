'use client';
import Image from 'next/image';
import Link from 'next/link';
import AppProfileItem from '../components/applicantProfile/appProfileItem';
import ProfileItemArr from '../components/applicantProfile/profileItemArr';

const imageStyle = {
  borderRadius: '5%',
};

const Page = () => {
  const applicantData = {
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
  };

  const handleApproveClick = () => {
    console.log('Approved Data: ', applicantData);
  };

  const handleRejectClick = () => {
    console.log('Rejected Data: ', applicantData);
  };

  return (
    // Application Id and edit icon
    <main className="min-h-screen mr-8 xl:pt-14 w-[108rem]">
      <div className="flex max-w-5xl mx-auto">
        <div className="mt-6 flex-1 flex justify-start">
          <div className="font-bold text-2xl w-48">Application Id:</div>
          <div className="flex items-center">{applicantData.appId}</div>
        </div>
        <div className="flex-1">
          <div className="flex justify-end items-center pt-4">
            <Link href={'/edit-applicant'}>
              <div className="flex items-center justify-center ">
                <Image
                  src={'/editProfile.png'}
                  width={35}
                  height={35}
                  alt={'right'}
                />
              </div>
            </Link>
          </div>
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
          <div className="font-bold text-4xl">{applicantData.name}</div>
        </div>
      </div>

      {/* Form Contents */}
      <div className="flex-col justify-center max-w-5xl mx-auto">
        <div className="mt-6">
          <AppProfileItem
            title="Designation:"
            info={applicantData.designation}
          />
          <AppProfileItem title="Department:" info={applicantData.dept} />
          <AppProfileItem title="School:" info={applicantData.school} />
          <AppProfileItem
            title="Name of the Journal:"
            info={applicantData.journal}
          />
          <AppProfileItem
            title="Title of the Article:"
            info={applicantData.title}
          />

          <ProfileItemArr
            title="Authors order with affliation as in the article:"
            info={applicantData.affAuth}
          />
          <ProfileItemArr
            title="Name of the corresponding author:"
            info={applicantData.corAuth}
          />

          <AppProfileItem
            title="Number of articles submitted for incentive- 2024:"
            info={applicantData.artNum}
          />
          <AppProfileItem
            title="Q Index of the Article:"
            info={applicantData.qIndex}
          />
          <AppProfileItem
            title="Name and Address of Publisher:"
            info={applicantData.publisher}
          />
          <AppProfileItem
            title="Volume number with date:"
            info={applicantData.volNumDate}
          />
          <AppProfileItem
            title="Patent detail:"
            info={applicantData.patentDetail}
          />
        </div>
      </div>

      <div className="mb-20 max-w-5xl mx-auto flex justify-center align-center">
        {/* Approve Button */}
        <button
          onClick={handleApproveClick}
          className="flex items-center mx-4 my-7 px-4 py-1 font-bold shadow-lg border border-gray-500 hover:bg-green-300 focus:outline-none"
        >
          <div className="w-24 flex justify-center">Approve</div>
          <div>
            <Image
              src={'/approve.png'}
              width={30}
              height={30}
              alt={'approve'}
            />
          </div>
        </button>

        {/* Reject Button */}
        <button
          onClick={handleRejectClick}
          className="flex items-center mx-4 my-7 px-4 py-1 font-bold shadow-lg border border-gray-500 hover:bg-red-300 focus:outline-none"
        >
          <div className="w-24 flex justify-center">Reject</div>
          <div>
            <Image src={'/reject.png'} width={30} height={30} alt={'reject'} />
          </div>
        </button>
      </div>
    </main>
  );
};

export default Page;
