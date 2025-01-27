import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableData from './TableData';
import TableJustHR from './TableJustHR';
import TableJustEmployees from './TableJustEmployees';

const AllEmployeeList = () => {
  return (
    <div>
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <i class="fa-solid fa-users-line mr-2"></i>
              All Employee List
            </Tab>
            <Tab>
              <i class="fa-solid fa-user-group mr-2"></i>(HR)
            </Tab>
            <Tab>
              <i class="fa-solid fa-users-gear mr-2"></i>(Employee)
            </Tab>
          </TabList>

          <TabPanel className="mt-5 md:mt-8">
            {/* <h4>All Employee List</h4> */}
            <TableData></TableData>
          </TabPanel>

          <TabPanel>
            {/* <p>HR List</p> */}
            <TableJustHR></TableJustHR>
          </TabPanel>

          <TabPanel>
            {/* <p>Employee List</p> */}
            <TableJustEmployees></TableJustEmployees>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllEmployeeList;
