import axios from 'axios';

export default async function getUserIncentiveTableData(userEmail) {

    const data={
        userEmail,
    }
  const res = await axios
    .post('/api/getUserIncentives', {
        data,
    })
    .then((res) => {
    //   console.log(res);
      const response=res.data;
    //   let tableRows:any=[];
    //   const rows=response.map((item)=>{
    //     item.datas.map((temp)=>{
    //         tableRows.push({
    //             ...temp,
    //         })
    //     })
    //   })
      return response;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return res;
}
