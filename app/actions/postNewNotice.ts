import { Notice } from "@prisma/client";
import axios from "axios";



export default async function insertApplication(noticeText) {
    
    const data={
        noticeText,
    }

    const res = await axios
    .post('/api/newNotice', {
      data,
    })
    .then((res) => {
      
      return {
        result:"success",
        message:"New notice posted!"
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        result: "failure",
        message: err.message,
      };
    });
  return res;


  
}
