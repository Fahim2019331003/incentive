import axios from "axios";

export interface application {
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

export default async function insertApplication(data: application) {
  
    const res = await axios
    .post('/api/application', {
      data,
    })
    .then((res) => {
    //   console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res;


  
}
