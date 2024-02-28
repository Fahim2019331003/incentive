import { getTable } from '@/app/dashboard/getData';
import Carousel from '../components/dashboard/Carousel';
import Tabletest from '../components/dashboard/Tabletest';

const Page = async () => {
  const tableData = await getTable();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="pt-5">
        <Carousel />
      </div>

      <div className="mt-20">
        <Tabletest title={'Granted Incentives Report'} tableData={tableData} />
      </div>
    </main>
  );
};

export default Page;
