import axios from 'axios';

export default async function getProfileData(userId) {
  const data = {
    userId,
  };
  const res = await axios
    .post('/api/getUserWithId', {
      data,
    })
    .then(async (res) => {
      const data = res.data;

      if(data?.name){
        return data;
      }
      else{
        return null;
      }

    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return res;
}
