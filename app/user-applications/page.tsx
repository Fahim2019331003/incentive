import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import UserApplicationTab from '../components/user-applications/UserApplicationTab';

const page = async () => {

  const session = await getServerSession(authOptions);
  const userEmail = session?.user.email ? session?.user.email : 'NONE';
  const role = session?.user.role ? session?.user.role : 'NONE';

  if (userEmail === 'NONE') {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">Log In to an account.</div>
        </div>
      </main>
    );
  }

  if (role !== 'APPLICANT' && role !== 'EVALUATOR') {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">Log In to an Applicant or an Evaluator account.</div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <div className="m-16">
        <div className="min-h-screen">
          <UserApplicationTab userEmail={userEmail} />
        </div>
      </div>
    </main>
  );
};

export default page;
