import LeftContent from '../components/monitor-application/LeftContent';
import RightContent from '../components/monitor-application/RightContent';

const page = () => {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-1 mt-20">
        <div className="w-1/4 flex flex-col">
          <LeftContent name={'Dr. Reza Selim'} role={'Admin'} />
        </div>

        <div className="w-3/4">
          <RightContent />
        </div>
      </div>
    </main>
  );
};

export default page;
