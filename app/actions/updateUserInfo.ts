import axios from 'axios';

export default async function updateUserInfo(
  updateData
) {
  const data = {
    name: updateData.name,
    email: updateData.email,
    image: updateData.image ? updateData.image : '',
    designation: updateData.designation ? updateData.designation : '',
    department: updateData.department ? updateData.department : '',
    school: updateData.school ? updateData.school : '',
    bankinfo: updateData.bankinfo ? updateData.bankinfo : '',
    contact: updateData.contact ? updateData.contact : '',
  };
  const res = await axios
    .put('/api/updateUser', {
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
