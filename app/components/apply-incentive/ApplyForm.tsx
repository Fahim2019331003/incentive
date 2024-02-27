'use client';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FormDrop from './FormDrop';
import FormInput from './FormInput';
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

const qIndexFields = ['Q1', 'Q2', 'Q3', 'Q4'];

const ApplyForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [dept, setDept] = useState('');
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

  // const []

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(designation);
    console.log(journalName);
    console.log(articleTitle);
    console.log(correspondingAuthor);
    console.log(nameAndAddress);
    console.log(volumeDetail);
    console.log(awardDetail);
    console.log(patentDetail);
    console.log(qIndex);
    console.log(dept);
    console.log(school);
    console.log(affiliatePersons);
    if (dept === '' || school === '' || qIndex === '') {
      toast.error('Select All Fields');
      console.log('dhukse');
    }
    else{
      toast.success('Successfully Entered');
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="min-w-7xl m-20 bg-gray-200 rounded-xl z-0"
    >
      <div className="pt-10">
        <FormInput title={"Applicant's Name"} setInput={setName} />
        <FormInput title={'Designation'} setInput={setDesignation} />
        <FormDrop title={'Department'} options={deptFields} setKeys={setDept} />
        <FormDrop title={'School'} options={schoolFields} setKeys={setSchool} />
        <FormInput title={'Name of the Journal'} setInput={setJournalName} />
        <FormInput title={'Title of the Article'} setInput={setArticleTitle} />
        {/* Dynamic input */}
        <FormMultiInput
          title={'Authors order with affliation as in the article'}
          setInput={setAffiliatePersons}
        />

        <FormInput
          title={'Name of the Corresponding Author'}
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
        />
        <FormInput
          title={'Volume number with date'}
          setInput={setVolumeDetail}
        />
        <FormInput
          title={'Have you received any award/incentive for this article?'}
          setInput={setAwardDetails}
        />
        <FormInput title={'Patent Detail'} setInput={setPatentDetail} />
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
