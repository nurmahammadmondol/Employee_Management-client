import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EmployeWorkSheet from './EmployeWorkSheet';
import EmployeePaymentHistory from './EmployeePaymentHistory';

const RoutesForEmployees = () => {
  return (
    <div className="py-24 md:py-32 w-11/12 mx-auto">
      <h4 className="my-5 text-xl md:text-2xl  font-bold roboto-font">
        Nur Mohammad Mondal Rabiul, welcome back are you ready for the next
        task?
      </h4>

      <Tabs>
        <TabList>
          <Tab>Work Sheet</Tab>
          <Tab>Payment History</Tab>
        </TabList>

        <TabPanel className="mt-5 md:mt-10">
          <EmployeWorkSheet></EmployeWorkSheet>
        </TabPanel>
        <TabPanel>
          <EmployeePaymentHistory></EmployeePaymentHistory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RoutesForEmployees;
