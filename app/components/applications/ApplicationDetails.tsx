'use client';
import getApplicationWithIdsClient from '@/app/actions/getApplicationWithIdsClient';
import { Button, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AppProfileItem from './AppProfileItem';
import ModalAssignReviewer from './ModalAssignReviewer';
import ModalCoordinator from './ModalCoordinator';
import ModalEvaluator from './ModalEvaluator';
import ModalPayment from './ModalPayment';
import ProfileItemArr from './profileItemArr';

const imageStyle = {
  borderRadius: '5%',
};

const ApplicationDetails = ({
  application,
  user,
  changed,
  setChanged,
  isEditOpen,
  setEditOpen,
}) => {
  const [applicationDetails, setApplicationDetails] = useState({
    id: application.id,
    name: application.applicant.name,
    image: application.applicant.image ? application.applicant.image : '',
    date: application.createdAt,
    status: application.status,
    designation: application.applicant.designation
      ? application.applicant.designation
      : 'Not Assigned',
    department: application.department,
    school: application.school,
    journalName: application.journalName,
    title: application.title,
    affiliatedPersons: application.affiliatedPersons,
    correspondingAuthor: application.correspondingAuthor.name,
    totalAuthors: application.totalAuthors,
    qIndex: application.qIndex,
    PublishernameAndAddress: application.PublishernameAndAddress
      ? application.PublishernameAndAddress
      : 'N/A',
    volAndDate: application.volAndDate ? application.volAndDate : 'N/A',
    awardDetails: application.awardDetails ? application.awardDetails : 'N/A',
    patentDetails: application.patentDetails
      ? application.patentDetails
      : 'N/A',
    feedback: application.feedback ? application.feedback : '',
  });

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const application_temp: any = await getApplicationWithIdsClient(
          application.id
        );

        if (!application_temp) {
          router.push('/404');
        }

        setApplicationDetails({
          id: application_temp.id,
          name: application_temp.applicant.name,
          image: application_temp.applicant.image
            ? application_temp.applicant.image
            : '',
          date: application_temp.createdAt,
          status: application_temp.status,
          designation: application_temp.applicant.designation
            ? application_temp.applicant.designation
            : 'Not Assigned',
          department: application_temp.department,
          school: application_temp.school,
          journalName: application_temp.journalName,
          title: application_temp.title,
          affiliatedPersons: application_temp.affiliatedPersons,
          correspondingAuthor: application_temp.correspondingAuthor?.name
            ? application_temp.correspondingAuthor?.name
            : '',
          totalAuthors: application_temp.totalAuthors,
          qIndex: application_temp.qIndex,
          PublishernameAndAddress: application_temp.PublishernameAndAddress
            ? application_temp.PublishernameAndAddress
            : 'N/A',
          volAndDate: application_temp.volAndDate
            ? application_temp.volAndDate
            : 'N/A',
          awardDetails: application_temp.awardDetails
            ? application_temp.awardDetails
            : 'N/A',
          patentDetails: application_temp.patentDetails
            ? application_temp.patentDetails
            : 'N/A',
          feedback: application_temp.feedback ? application_temp.feedback : '',
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [changed]);

  //   const handleApproveClick = () => {
  //     console.log('Approved Data: ', applicationDetails);
  //   };

  //   const handleRejectClick = () => {
  //     console.log('Rejected Data: ', applicationDetails);
  //   };

  return (
    // Application Id and edit icon
    <main className="min-h-screen mr-8 xl:pt-14 ">
      <div className="text-3xl mb-10">Application Details Page</div>

      <Card className="pt-5 pb-10">
        <CardBody>
          <div className="overflow-hidden">
            <div className="flex flex-col max-w-5xl mx-auto">
              <div className="flex-1 flex justify-start">
                <div className="font-bold text-2xl w-48">Application Id:</div>
                <div className="flex items-center">{applicationDetails.id}</div>
              </div>
              <div className="flex-1 flex justify-start">
                <div className="font-bold text-2xl w-48">Status:</div>
                <div className="flex items-center">
                  {applicationDetails.status}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-end items-center pt-4">
                  <div className="flex items-center justify-center ">
                    {user.role === 'COORDINATOR' &&
                      applicationDetails.status === 'PENDING' && (
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
                      )}
                  </div>
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
                  src={
                    applicationDetails.image !== ''
                      ? applicationDetails.image
                      : '/images/person2.jpg'
                  }
                  layout="fill"
                  objectFit="cover"
                  style={imageStyle}
                />
              </div>
              <div
                className="flex-col py-2 max-w-4xl whitespace-normal"
                style={{ overflowWrap: 'break-word' }}
              >
                <div className="font-bold text-4xl">
                  {applicationDetails.name}
                </div>
              </div>
            </div>

            {/* Form Contents */}
            <div className="flex-col justify-center max-w-5xl mx-auto">
              <div className="mt-6">
                <AppProfileItem
                  title="Designation:"
                  info={applicationDetails.designation}
                />
                <AppProfileItem
                  title="Department:"
                  info={applicationDetails.department}
                />
                <AppProfileItem
                  title="School:"
                  info={applicationDetails.school}
                />
                <AppProfileItem
                  title="Name of the Journal:"
                  info={applicationDetails.journalName}
                />
                <AppProfileItem
                  title="Title of the Article:"
                  info={applicationDetails.title}
                />
                <AppProfileItem
                  title="Total authors in this article (Including non-SUST Authors):"
                  info={applicationDetails.totalAuthors}
                />
                <ProfileItemArr
                  title="Authors order with affliation as in the article:"
                  info={applicationDetails.affiliatedPersons}
                />
                <AppProfileItem
                  title="Name of the corresponding author:"
                  info={applicationDetails.correspondingAuthor}
                />

                <AppProfileItem
                  title="Q Index of the Article:"
                  info={applicationDetails.qIndex}
                />
                <AppProfileItem
                  title="Name and Address of Publisher:"
                  info={applicationDetails.PublishernameAndAddress}
                />
                <AppProfileItem
                  title="Volume number with date:"
                  info={applicationDetails.volAndDate}
                />
                <AppProfileItem
                  title="Have you received any award/incentive for this article?:"
                  info={applicationDetails.awardDetails}
                />
                <AppProfileItem
                  title="Patent detail:"
                  info={applicationDetails.patentDetails}
                />
                <AppProfileItem
                  title="Apply Date:"
                  info={applicationDetails.date}
                />
                {applicationDetails.status === 'REJECTED' && (
                  <AppProfileItem
                    title="Rejection Cause:"
                    info={applicationDetails.feedback}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center mt-16 mb-5">
              {(user.role === 'COORDINATOR' || user.role === 'ADMIN') &&
                application.status === 'PENDING' && (
                  <div className="mx-5">
                    <ModalCoordinator
                      applicationId={applicationDetails.id}
                      changed={changed}
                      setChanged={setChanged}
                    />
                  </div>
                )}
              {user.role === 'ADMIN' && application.status === 'PROCESSING' && (
                <div className="mx-5">
                  <ModalAssignReviewer
                    applicationId={applicationDetails.id}
                    changed={changed}
                    setChanged={setChanged}
                  />
                </div>
              )}
              {application.status === 'ASSIGNED' &&
                user.id === application.evaluatedBy.id && (
                  <div className="mx-5">
                    <ModalEvaluator
                      applicationId={applicationDetails.id}
                      changed={changed}
                      setChanged={setChanged}
                    />
                  </div>
                )}
              {user.role === 'ADMIN' && application.status === 'ACCEPTED' && (
                <div className="mx-5">
                  <ModalPayment
                    applicationId={applicationDetails.id}
                    changed={changed}
                    setChanged={setChanged}
                  />
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
};

export default ApplicationDetails;

{
  /* <div className="mb-20 max-w-5xl mx-auto flex justify-center align-center">

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

<button
    onClick={handleRejectClick}
    className="flex items-center mx-4 my-7 px-4 py-1 font-bold shadow-lg border border-gray-500 hover:bg-red-300 focus:outline-none"
>
    <div className="w-24 flex justify-center">Reject</div>
    <div>
    <Image src={'/reject.png'} width={30} height={30} alt={'reject'} />
    </div>
</button>
</div> */
}
