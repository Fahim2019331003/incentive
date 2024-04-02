'use client';
import getTableData from '@/app/actions/getTableData';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import TableAll from './TableAll';

const ApplicationTab = () => {
  

  return (
    <div className="flex w-full flex-col">
      <div className="text-2xl mb-10">Application Page</div>
      <Tabs aria-label="Options">
        <Tab key="All Applications" title="All Applications">
          <Card>
            <CardBody>
              <div className="mt-5">
                This contains all applications including accepted, rejected,on
                processing and pending applicaitons.
              </div>
              <TableAll/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Accepted Applications" title="Accepted Applications">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Pending Applications" title="Pending Applications">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="On Processing Applications"
          title="On Processing Applications"
        >
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ApplicationTab;
