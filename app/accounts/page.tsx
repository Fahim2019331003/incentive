import { Card, CardBody } from '@nextui-org/react';
import getCurrentUser from '../actions/getCurrentUser';
import AccountsTable from '../components/accounts/AccountsTable';

const page = async () => {
  const user = await getCurrentUser();
  const role = user?.role ? user?.role : 'NONE';

  if (role !== 'ADMIN' && role !== 'COORDINATOR') {
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
    <main className="flex flex-col">
      <div className="m-16">
        <div className="min-h-screen">
          <div className="flex justify-center max-w-7xl mx-auto pb-4">
            <div className="flex justify-center pb-4 text-3xl font-semibold max-w-7xl">
              <h1>Accounts Page</h1>
            </div>
          </div>
          <Card>
            <CardBody>
              <p className='my-3'>This table contains all users.</p>
              <AccountsTable userRole={role}/>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default page;
