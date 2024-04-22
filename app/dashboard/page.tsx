import { Card, CardBody } from '@nextui-org/react';
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
        <div className="mx-16 min-h-screen">
          <Carousel />
          <div className="mt-20">
            <div className='text-center my-5 text-3xl font-semibold'>
              Granted Incentives
            </div>
            <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are being accepted for incentives.
              </div>
              <Tabletest />
            </CardBody>
          </Card>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;