import axios from 'axios';

export default async function getReviwersData() {
  const res = await axios
    .post('/api/getReviewers', {})
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return res;
}
