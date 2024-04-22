'use client';

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import UserTableAll from './UserTableAll';

const UserApplicationTab = async ({ userEmail }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center pt-8 pb-6 text-3xl font-semibold mb-5">
        User Applications Page
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
              <UserTableAll userEmail={userEmail} tableType={'all'} />
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
              <UserTableAll userEmail={userEmail} tableType={'pending'} />
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
              <UserTableAll userEmail={userEmail} tableType={'processing'} />
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
              <UserTableAll userEmail={userEmail} tableType={'assigned'} />
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
              <UserTableAll userEmail={userEmail} tableType={'accepted'} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Rejected" title="Rejected">
          <Card>
            <CardBody>
              This table contains all applications that are rejected by the
              reviewers. Reviewers wrote their cause of rejection.
              <UserTableAll userEmail={userEmail} tableType={'rejected'} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Paid" title="Paid">
          <Card>
            <CardBody>
              This table contains all applications that are down for payment.
              <UserTableAll userEmail={userEmail} tableType={'paid'} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserApplicationTab;
