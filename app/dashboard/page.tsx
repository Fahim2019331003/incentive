import getTableData from '../actions/getTableData';
import Tabletest from '../components/dashboard/Tabletest';
import Carousel from '../components/home/Carousel';

interface dashboardTableData {
  name: string;
  title: string;
  department: string;
  journalName: string;
  affiliatedPersons?: string[];
}

const Page = async () => {
  

  return (
    <main className="flex flex-col">
      <div className="my-16">
        <div className="mx-16">
          <Carousel />
          <div className="mt-20 min-h-screen">
            <Tabletest
              title={'Granted Incentives Report'}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
