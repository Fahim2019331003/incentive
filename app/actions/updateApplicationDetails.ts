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
  totalAuthors:string;
}

export default async function updateApplicationDetails(id ,Application: application) {
    
    const data={
        id,
        ...Application,
    }
    const res = await axios
    .put('/api/updateApplicationDetails', {
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
