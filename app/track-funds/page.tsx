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
