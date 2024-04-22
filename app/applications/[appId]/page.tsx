import getApplicationWithId from '@/app/actions/getApplicationWithId';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ApplicationClient from '@/app/components/applications/ApplicationClient';

const applicationDetails = async ({ params }) => {
  const user = await getCurrentUser();
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

  const applicationDetails: any = await getApplicationWithId(params.appId);
  if (!applicationDetails) {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">No such application.</div>
        </div>
      </main>
    );
  }

  let flag = 1;
  if (applicationDetails.applicant?.email === userEmail) flag = 0;
  for (const email of applicationDetails.affiliatedPersons) {
    if (email === userEmail) flag = 0;
  }

  if (
    applicationDetails?.status === 'PENDING' ||
    applicationDetails?.status === 'PROCESSING'
  ) {
    if (
      (flag && user?.role === 'APPLICANT') ||
      (flag && user?.role === 'EVALUATOR')
    ) {
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
  } else {
    if (applicationDetails?.evaluatedBy?.email === userEmail) flag = 0;
    if (
      (flag && user?.role === 'APPLICANT') ||
      (flag && user?.role === 'EVALUATOR')
    ) {
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
  }

  return (
    <main className="flex flex-col">
      <div className="m-16">
        <div className="min-h-screen">
          <ApplicationClient
            user={user}
            applicationDetails={applicationDetails}
          />
        </div>
      </div>
    </main>
  );
};

export default applicationDetails;
