'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import TablePendingEvaluate from './TablePendingEvaluate';
import TableEvaluated from './TableEvaluated';



const ReviewApplicationTab = ({user}) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center pt-8 pb-6 text-3xl font-semibold mb-5">
        Evaluate Applications
      </div>
      {/* <div className="text-2xl mb-10">Application Page</div> */}
      <Tabs aria-label="Options">
        <Tab key="pending" title="Pending to Evaluate">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are pending to be evaluated.
              </div>
              <TablePendingEvaluate user={user}/>
            </CardBody>
          </Card>
          
        </Tab>
        <Tab key="evaluated" title="Evaluated">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are pending to be evaluated.
              </div>
              <TableEvaluated user={user}/>
            </CardBody>
          </Card>
          
        </Tab>
       
    
      </Tabs>
    </div>
  );
};

export default ReviewApplicationTab;
