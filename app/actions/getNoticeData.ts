import axios from 'axios';
import { isValidUser } from './checkApplication';
import { Notice } from '@prisma/client';

const monthNamesShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

export default async function getNoticeData() {
  const res = await axios
    .post('/api/getNotice', {})
    .then(async (res) => {
      const data = res.data;
      const notices = data.map((item:Notice)=>{
        const dateObject = new Date(item.createdAt);
        const day = dateObject.getDate(); 
        const monthIndex = dateObject.getMonth(); 
        const shortMonth = monthNamesShort[monthIndex]; 
        const year = dateObject.getFullYear();

        return {
            data:item.text,
            day:day,
            month:shortMonth,
            year:year,
        }
      })
    //   console.log(notices);
      return notices;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res;
}
