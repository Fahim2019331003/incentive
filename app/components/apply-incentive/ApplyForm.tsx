'use client';
import checkApplication from '@/app/actions/checkApplication';
import insertApplication from '@/app/actions/insertApplication';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FormDrop from './FormDrop';
import FormEmail from './FormEmail';
import FormInput from './FormInput';
import FormInputInt from './FormInputInt';
import FormMultiInput from './FormMultiInput';

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

const designationFields = ['Mr.', 'Ms.', 'Dr.', 'Mrs.'];

const qIndexFields = ['Q1', 'Q2', 'Q3', 'Q4'];

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

const ApplyForm = () => {
  const router = useRouter();
  // all states.
  const [applicantEmail, setApplicantEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [school, setSchool] = useState('');
  const [journalName, setJournalName] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [affiliatePersons, setAffiliatePersons] = useState([]);
  const [correspondingAuthor, setCorrespondingAuthor] = useState('');
  const [qIndex, setqIndex] = useState('');
  const [nameAndAddress, setNameAndAddress] = useState('');
  const [volumeDetail, setVolumeDetail] = useState('');
  const [awardDetail, setAwardDetails] = useState('');
  const [patentDetail, setPatentDetail] = useState('');
  const [totalAuthors, setTotalAuthors] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

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

    // console.log(totalAuthors);

    try {
      //checking if application is valid.
      const toastId = toast.loading('Loading...');
      const result: result = await checkApplication(Application);
      if (result.validity) {
        //insert the application into database.
        const res = await insertApplication(Application);
        toast.dismiss(toastId);
        if (res !== null || res !== undefined) {
          toast.success(result.message);
          //redirect to another page.
          router.push('/incentive');
        } else toast.error('Something occurred');
      } else {
        toast.dismiss(toastId);
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="min-w-7xl m-20 bg-gray-200 rounded-xl z-0"
    >
      <div className="pt-10">
        <FormEmail title={"Applicant's Email"} setInput={setApplicantEmail} />

        <FormDrop
          title={'Department'}
          options={deptFields}
          setKeys={setDepartment}
        />
        <FormDrop title={'School'} options={schoolFields} setKeys={setSchool} />
        <FormInput
          title={'Name of the Journal'}
          setInput={setJournalName}
          isRequired={true}
        />
        <FormInput
          title={'Title of the Article'}
          setInput={setArticleTitle}
          isRequired={true}
        />
        <FormInputInt
          title={
            'Total number of authors of this article  (Including non-SUST authors)'
          }
          setInput={setTotalAuthors}
          isRequired={true}
        />
        {/* Dynamic input */}
        <FormMultiInput
          
          setInput={setAffiliatePersons}
        />

        <FormEmail
          title={'Email of the Corresponding Author'}
          setInput={setCorrespondingAuthor}
        />
        <FormDrop
          title={'Q Index'}
          options={qIndexFields}
          setKeys={setqIndex}
        />
        <FormInput
          title={'Name & Address of the Publisher'}
          setInput={setNameAndAddress}
          isRequired={true}
        />
        <FormInput
          title={'Volume number with date'}
          setInput={setVolumeDetail}
          isRequired={true}
        />
        <FormInput
          title={'Have you received any award/incentive for this article?'}
          setInput={setAwardDetails}
          isRequired={false}
        />
        <FormInput
          title={'Patent Detail'}
          setInput={setPatentDetail}
          isRequired={false}
        />
      </div>
      <div className="flex justify-center py-10">
        <Button color="primary" variant="shadow" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ApplyForm;
