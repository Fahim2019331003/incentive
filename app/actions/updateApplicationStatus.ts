import axios from 'axios';

export default async function updateApplicationStatus(
  applicationIds,
  applicationType,
  reviwerEmail,
  mode,
  slug,
) {
  const data = {
    applicationIds,
    applicationType,
    reviwerEmail: reviwerEmail ? reviwerEmail : '',
    mode,
    slug
  };
  const res = await axios
    .put('/api/updateApplications', {
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
