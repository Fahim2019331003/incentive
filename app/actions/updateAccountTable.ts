import axios from 'axios';

export default async function updateAccountTable(
  accountIds,
  role
) {
  const data = {
    accountIds,
    role,
  };
  const res = await axios
    .put('/api/updateAccounts', {
      data,
    })
    .then(async (res) => {
      console.log(res);
      return {
        result: 'success',
        message: 'Successfully Changed',
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        result: 'error',
        message: 'Something Occurred',
      };
    });
  return res;
}
