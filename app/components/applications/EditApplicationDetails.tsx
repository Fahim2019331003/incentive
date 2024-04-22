import { Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
import AppProfileItem from './AppProfileItem';
import FormDrop from './FormDrop';
import FormInput from './FormInput';
import FormInputInt from './FormInputInt';
import FormMultiInput from './FormMultiInput';
import FormEmail from './FormEmail';
import toast from 'react-hot-toast';
import checkApplication from '@/app/actions/checkApplication';
import updateApplicationDetails from '@/app/actions/updateApplicationDetails';

const deptFields = [
  'Computer Science and Engineering',
  'Electrical and Electronic Engineering',
  'Software Engineering',
  'Math',
  'Statistics',
  'Physics',
  'Political Studies',
  'Food Engineering and Tea Technology',
  'English',
  'Economics',
  'Social Science',
  'Sociology',
  'Genetical Engineering and Biotechnology',
  'Bangla',
  'Chemical Engineering & Polymer Science',
  'Civil & Environmental Engineering',
  'Industrial & Production Engineering',
  'Petroleum and Mining Engineering',
  'Mechanical Engineering',
];

const schoolFields = [
  'Agriculture & Mineral Sciences',
  'Applied Sciences & Technology',
  'Life Sciences',
  'Management & Business Administration',
  'Physical Sciences',
  'Social Sciences',
];

const qIndexFields = ['Q1', 'Q2', 'Q3', 'Q4'];

const imageStyle = {
  borderRadius: '5%',
};

interface application {
  applicantEmail: string;
  department: string;
  school: string;
  journalName: string;
  qIndex: string;
  title: string;
  affiliatedPersons: string[];
  correspondingAuthor: string;
  PublishernameAndAddress: string;
  volAndDate: string;
  awardDetails: string;
  patentDetails: string;
  totalAuthors: string;
}

interface result {
  validity: boolean;
  message: string;
  affiliatedPersonsNames?: string;
}

const EditApplicationDetails = ({
  application,
  user,
  changed,
  setChanged,
  isEditOpen,
  setEditOpen,
}) => {
  const [applicantEmail, setApplicantEmail] = useState(
    application.applicant.email
  );
  const [department, setDepartment] = useState(application.department);
  const [school, setSchool] = useState(application.school);
  const [journalName, setJournalName] = useState(application.journalName);
  const [articleTitle, setArticleTitle] = useState(application.title);
  const [affiliatePersons, setAffiliatePersons] = useState(
    application.affiliatedPersons
  );
  const [correspondingAuthor, setCorrespondingAuthor] = useState(
    application.correspondingAuthor.email
  );
  const [qIndex, setqIndex] = useState(application.qIndex);
  const [nameAndAddress, setNameAndAddress] = useState(
    application.PublishernameAndAddress
      ? application.PublishernameAndAddress
      : ''
  );
  const [volumeDetail, setVolumeDetail] = useState(
    application.volAndDate ? application.volAndDate : ''
  );
  const [awardDetail, setAwardDetails] = useState(
    application.awardDetails ? application.awardDetails : ''
  );
  const [patentDetail, setPatentDetail] = useState(
    application.patentDetails ? application.patentDetails : ''
  );
  const [totalAuthors, setTotalAuthors] = useState(application.totalAuthors);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const onClickHandler=async()=>{
    const Application: application = {
      applicantEmail: applicantEmail,
      department: department,
      school: school,
      journalName: journalName,
      qIndex: qIndex,
      title: articleTitle,
      affiliatedPersons: affiliatePersons,
      correspondingAuthor: correspondingAuthor,
      PublishernameAndAddress: nameAndAddress,
      volAndDate: volumeDetail,
      awardDetails: awardDetail,
      patentDetails: patentDetail,
      totalAuthors: totalAuthors,
    };
    // console.log(Application);
    try {
      //checking if application is valid.
      const toastId = toast.loading('Checking...');
      const result: result = await checkApplication(Application);
      if (result.validity) {
        //insert the application into database.
        onOpen();
        toast.dismiss(toastId);
      } else {
        toast.dismiss(toastId);
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onCloseHandler=async()=>{
    
    try{
      const Application: application = {
        applicantEmail: applicantEmail,
        department: department,
        school: school,
        journalName: journalName,
        qIndex: qIndex,
        title: articleTitle,
        affiliatedPersons: affiliatePersons,
        correspondingAuthor: correspondingAuthor,
        PublishernameAndAddress: nameAndAddress,
        volAndDate: volumeDetail,
        awardDetails: awardDetail,
        patentDetails: patentDetail,
        totalAuthors: totalAuthors,
      };
      const toastId = toast.loading('Updating...');
      const res = await updateApplicationDetails(application.id,Application);
      toast.dismiss(toastId);
      if (res !== null || res !== undefined) {
        toast.success("Successfully Updated!");
        setChanged(!changed);
        setEditOpen(!isEditOpen);
      } else toast.error('Something occurred');

    }catch(error){
      console.log(error);
      toast.error("Something Occurred!");
    }


  }

  return (
    
    <main className="min-h-screen mr-8 xl:pt-14 ">
      <div className="text-3xl mb-10">Application Details Page</div>

      <Card className="pt-5 pb-10">
      <CardBody>
        <div className="overflow-hidden">
          <div className="flex flex-col max-w-5xl mx-auto">
            <div className="flex-1 flex justify-start">
              <div className="font-bold text-2xl w-48">Application Id:</div>
              <div className="flex items-center">{application.id}</div>
            </div>
            <div className="flex-1 flex justify-start">
              <div className="font-bold text-2xl w-48">Status:</div>
              <div className="flex items-center">{application.status}</div>
            </div>
            <div className="flex-1">
              <div className="flex justify-end items-center pt-4">
                <div className="flex items-center justify-center ">
                  {user.role === 'COORDINATOR' &&
                    application.status === 'PENDING' && (
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
                  application.applicant.image ?
                     application.applicant.image
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
                {application.applicant.name}
              </div>
            </div>
          </div>

          {/* Form Contents */}
          <div className="flex-col justify-center max-w-5xl mx-auto">
            <div className="mt-6">
              <AppProfileItem
                title="Designation:"
                info={
                  application.applicant.designation
                    ? application.applicant.designation
                    : 'Not Assigned'
                }
              />
              <FormDrop title={"Department:"} setKeys={setDepartment} options={deptFields} selected={department}/>
              <FormDrop title={"School:"} setKeys={setSchool} options={schoolFields} selected={school}/>
              <FormInput title={"Name of the Journal:"} setInput={setJournalName} isRequired={true} selected={journalName}/>
              <FormInput title={"Title of the Article:"} setInput={setArticleTitle} isRequired={true} selected={articleTitle}/>
              <FormInputInt title={'Total number of authors of this article  (Including non-SUST authors):'} setInput={setTotalAuthors} isRequired={true} selected={totalAuthors}/>
              <FormMultiInput selected={affiliatePersons} setInput={setAffiliatePersons}/>
              <FormEmail title={"Email of the Corresponding Author:"} selected={correspondingAuthor} setInput={setCorrespondingAuthor}/>
              <FormDrop title={"Q Index of the article:"} options={qIndexFields} selected={qIndex} setKeys={setqIndex}/>
              <FormInput title={"Name and Address of Publisher:"} isRequired={true} selected={nameAndAddress} setInput={setNameAndAddress}/>
              <FormInput title={"Volume number with date:"} isRequired={true} selected={volumeDetail} setInput={setVolumeDetail}/>
              <FormInput title={"Have you received any award/incentive for this article?:"} isRequired={false} selected={awardDetail} setInput={setAwardDetails}/>
              <FormInput title={"Patent Detail:"} isRequired={false} selected={patentDetail} setInput={setPatentDetail}/>
              
              
              
            </div>
          </div>
          <div className="flex justify-center py-10">
        <Button color="primary" variant="shadow" type="submit" size="lg" onClick={onClickHandler}>
          Apply Changes
        </Button>
      </div>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update Application</ModalHeader>
              <ModalBody>
                <p> 
                  The application format is correct! Do you really want to update this application?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" onPress={onCloseHandler}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </CardBody>
      </Card>
    </main>
  );
};

export default EditApplicationDetails;




