import axios from 'axios';
import { isValidUser } from './checkApplication';
import prisma from '@/app/libs/prismadb';


//Not a backend call

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export default async function getApplicationWithIdsClient(applicationId) {

    const data={
        applicationId,
    }
    const res = await axios
    .post('/api/getApplicationDetails', {data})
    .then(async (res) => {
      const data = res.data;
        // console.log(data);
        const dateObject = new Date(data.createdAt);
        const day = dateObject.getDate(); 
        const monthIndex = dateObject.getMonth(); 
        const month = months[monthIndex]; 
        const year = dateObject.getFullYear();

        const newData={
            ...data,
            createdAt:`${day} ${month}, ${year}`
        }
        return newData;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
    return res;
}
