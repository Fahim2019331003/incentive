'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import TableAccepted from './TableAccepted';
import TableAll from './TableAll';
import TableAssigned from './TableAssigned';
import TablePaid from './TablePaid';
import TableProcessing from './TableProcessing';
import TableRejected from './TableRejected';
import TableSubmitted from './TableSubmitted';

const ApplicationTab = ({role}) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center pt-8 pb-6 text-3xl font-semibold mb-5">
        Application Page
      </div>
      {/* <div className="text-2xl mb-10">Application Page</div> */}
      <Tabs aria-label="Options">
        <Tab key="All" title="All">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications including accepted,
                rejected,on processing and pending applicaitons.
              </div>
              <TableAll />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Submitted" title="Submitted">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all submitted applications that are waiting
                to be processed.
              </div>
              <TableSubmitted />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="On Processing" title="On Processing">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are on processing
                phase. Admin will assign reviewer for each application.
              </div>
              <TableProcessing role={role}/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Assigned" title="Assigned">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are on assigned phase.
                Reviewers will review these applications.
              </div>
              <TableAssigned role={role}/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Accepted" title="Accepted">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications that are
                &apos;Accepted&apos; by reviewers, but not issued for payment.
                These applications are waiting to be issued for payment.
              </div>
              <TableAccepted role={role}/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Rejected" title="Rejected">
          <Card>
            <CardBody>
              This table contains all applications that are rejected by the
              reviewers. Reviewers wrote their cause of rejection.
              <TableRejected />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Paid" title="Paid">
          <Card>
            <CardBody>
              This table contains all applications that are down for payment.
              <TablePaid />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ApplicationTab;
