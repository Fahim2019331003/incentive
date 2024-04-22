import getCurrentUser from '../actions/getCurrentUser';
import ApplicationTab from '../components/applications/ApplicationTab';

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
          <ApplicationTab role={role} />
        </div>
      </div>
    </main>
  );
};

export default page;
