import { Card, CardBody } from '@nextui-org/react';
import UserIncentiveTable from '../components/user-funds/UserIncentiveTable';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import getCurrentUser from '../actions/getCurrentUser';

const page = async() => {
    const user =await getCurrentUser();
    const userEmail = user?.email ? user?.email : 'NONE';

    if (userEmail === 'NONE') {
        return (
          <main className="flex flex-col">
            <div className="m-16">
              <div className="mt-20 min-h-screen">Log In to an account.</div>
            </div>
          </main>
        );
    }
    

  return (
    <main className="min-h-screen mr-8 xl:pt-14">
      <div className="flex justify-center max-w-7xl mx-auto pb-4">
        <div className="flex justify-center pt-8 pb-4 text-3xl font-semibold max-w-7xl">
          <h1>User Incentives</h1>
        </div>
      </div>

      <Card>
        <CardBody>
          This Table tracks all kind of incentives.
          <UserIncentiveTable userEmail={userEmail}/>
        </CardBody>
      </Card>
    </main>
  );
};

export default page;

/*
import { Card, CardBody } from '@nextui-org/react';
import IncentiveTable from '../components/track-funds/IncentiveTable';

const page = () => {
  return (
    <main className="flex flex-col">
      <div className="my-16">
        <div className="mx-16">
          <div className="text-2xl mb-10">Track Incentive (Experimental)</div>
          <div className="mt-16 min-h-screen">
            <Card>
              <CardBody>
                This Table tracks all kind of incentives.
                <IncentiveTable />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
*/
