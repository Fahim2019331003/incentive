import Link from 'next/link';
import LeftContent from '../components/monitor-application/LeftContent';
import { useRouter } from 'next/router';

const page = () => {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-1 mt-20">
        <div className="w-1/4 flex flex-col border border-red">
          <LeftContent name={'Dr. Reza Selim'} role={'Admin'} />
        </div>

        {/* Right section taking 2/3 of the space */}
        <div className="w-3/4">Right Section (2/3)</div>
      </div>
    </main>
  );
};

export default page;
