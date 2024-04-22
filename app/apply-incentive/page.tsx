import getCurrentUser from '../actions/getCurrentUser';
import ApplyForm from '../components/apply-incentive/ApplyForm';
import FormTitle from '../components/apply-incentive/FormTitle';

const page = async () => {
  const user = await getCurrentUser();
  const role = user?.role ? user?.role : 'NONE';

  if (!user) {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">Login to an account.</div>
        </div>
      </main>
    );
  }

  if (role === 'COORDINATOR') {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">
            You are not allowed to view this page.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col mt-20">
      <FormTitle title={'Incentive Application Form'} />
      <div className="flex justify-center">
        <ApplyForm />
      </div>
    </main>
  );
};

export default page;
