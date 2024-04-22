import axios from 'axios';

export default async function getAccountsTableData(search) {

 const data={
    search,
 }

  const res = await axios
    .post('/api/getAllUser', {data})
    .then((res) => {
      // console.log(res);
      const data=res.data;

        const users=data.map((item)=>{
            return {
                id:item.id,
                department:item.department?item.department:"Not assigned",
                role:item.role,
                email:item.email,
                name:item.name,
            };
        })

      return users;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return res;
}
