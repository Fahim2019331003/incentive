import axios from 'axios';

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
}

export default async function checkApplication(application: application) {
  const {
    applicantEmail,
    department,
    school,
    journalName,
    qIndex,
    title,
    affiliatedPersons,
    correspondingAuthor,
    PublishernameAndAddress,
    volAndDate,
    awardDetails,
    patentDetails,
  } = application;


  //any blank fields check
  if (department === '') {
    return {
      validity: false,
      message: 'Select Department',
    };
  }
  if (school === '') {
    return {
      validity: false,
      message: 'Select School',
    };
  }
  if (qIndex === '') {
    return {
      validity: false,
      message: 'Select QIndex',
    };
  }

  // applicant email verification
  const applicantValidation = await isValidUser(applicantEmail);
  if (applicantValidation?.data?.name === undefined) {
    return {
      validity: false,
      message: 'Enter valid email for applicant',
    };
  }

  //affiliated Person's email verification
  let affiliatedValidation = false;
  await Promise.all(
    affiliatedPersons.map(async (email) => {
      const response = await isValidUser(email);
      if (response?.data?.name === undefined) {
        affiliatedValidation = true;
      }
    })
  );

  if (affiliatedValidation) {
    return {
      validity: false,
      message: 'Enter all valid affiliated emails',
    };
  }

  //corresponding author email verification
  const correspondingValidation = await isValidUser(correspondingAuthor);
  if (correspondingValidation?.data?.name === undefined) {
    return {
      validity: false,
      message: 'Enter valid email for corresponding author',
    };
  }

  
  //all true. application is good to go
  return {
    validity: true,
    message: 'Successfully Entered!',
  };
}

export async function isValidUser(email) {
  const data = {
    email,
  };
  const res = await axios
    .post('/api/user', {
      data,
    })
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res;
}
