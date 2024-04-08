'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import TableAll from './TableAll';
import TableProcessing from './TableProcessing';
import TableSubmitted from './TableSubmitted';
import TableRejected from './TableRejected';
import TableAccepted from './TableAccepted';
import TablePaid from './TablePaid';
import TableAssigned from './TableAssigned';

const ApplicationTab = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="text-2xl mb-10">Application Page</div>
      <Tabs aria-label="Options">
        <Tab key="All" title="All">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all applications including accepted, rejected,on
                processing and pending applicaitons.
              </div>
              <TableAll />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Submitted" title="Submitted">
          <Card>
            <CardBody>
              <div className="mt-5">
                This table contains all submitted applications that are waiting to be
                processed.
              </div>
              <TableSubmitted />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="On Processing"
          title="On Processing"
        >
          <Card>
            <CardBody>
              <div className="mt-5">
              This table contains all applications that are on processing phase.
                Admin will assign reviewer for each application.
              </div>
              <TableProcessing />
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
              <TableAssigned />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Accepted" title="Accepted">
          <Card>
            <CardBody>
            <div className="mt-5">
                This table contains all applications that are &apos;Accepted&apos; by reviewers, but not issued for payment.
                These applications are waiting to be issued for payment.
              </div>
              <TableAccepted />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Rejected" title="Rejected">
          <Card>
            <CardBody>
            This table contains all applications that are rejected by the reviewers.
                Reviewers wrote their cause of rejection.
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
