import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EmployeWorkSheet from './EmployeWorkSheet';
import EmployeePaymentHistory from './EmployeePaymentHistory';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Logo from '../../../../assets/Photo/EmpowerHubLogo.png';

const RoutesForEmployees = () => {
  const { User } = useContext(AuthContext);

  return (
    <div className="py-20 md:py-28 w-11/12 mx-auto">
      <Helmet>
        <title>EmpowerHub || Employee Home</title>
      </Helmet>
      <div className="my-5 text-xl md:text-2xl   font-bold lobster-regular-font ">
        <div>
          {User ? (
            <h4>
              <span className="text-[#22d3ee]">{User?.displayName},</span>{' '}
              welcome back are you ready for the next task ?
            </h4>
          ) : (
            `welcome back are you ready for the next task`
          )}
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Work Sheet</Tab>
          <Tab>Payment History</Tab>
        </TabList>

        <TabPanel className="mt-5 md:mt-8">
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
