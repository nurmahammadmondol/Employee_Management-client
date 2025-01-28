import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableData from './TableData';
import TableJustHR from './TableJustHR';
import TableJustEmployees from './TableJustEmployees';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllEmployeeList = () => {
  const AxiosSeccur = useAxiosSecuur();

  const [HrData, setHrData] = useState([]);
  const [EmployeeData, setEmployeeData] = useState([]);

  const {
    isPending,
    error,
    refetch,
    data: { employees = [], paymentRequests = [] } = {}, // Destructure data
  } = useQuery({
    queryKey: ['User', 'Payment_Request'],
    queryFn: async () => {
      const [userResponse, paymentResponse] = await Promise.all([
        AxiosSeccur.get('/User'), // Fetch User data
        AxiosSeccur.get('/Payment_Request'), // Fetch Payment Request data
      ]);

      // Filter HR Data
      const FilterHRData = userResponse.data.filter(
        data => data.UserRole === 'HR'
      );
      setHrData(FilterHRData);

      // Filter Employee Data
      const FilterEmployeeData = userResponse.data.filter(
        data => data.UserRole === 'Employee'
      );
      setEmployeeData(FilterEmployeeData);

      // Filter Combined Data (HR + Employee)
      const FilterEmployeeAndHr = userResponse.data.filter(
        data => data.UserRole === 'HR' || data.UserRole === 'Employee'
      );

      // Return both user data and payment requests data
      return {
        employees: FilterEmployeeAndHr,
        paymentRequests: paymentResponse.data, // Assuming /Payment_Request provides data
      };
    },
  });

  // console.log(paymentRequests);

  const makeHR = employeeData => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to promote this Employee to HR. This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CFF0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, promote to HR',
    }).then(result => {
      if (result.isConfirmed) {
        // যদি ব্যবহারকারী নিশ্চিত করে

        const UserRole = {
          UserRole: 'HR',
        };

        AxiosSeccur.patch(`/User/${employeeData?._id}`, UserRole)
          .then(res => {
            console.log(res.data);
            refetch();
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: 'Promoted!',
                text: 'The Employee has been successfully promoted to HR.',
                icon: 'success',
                confirmButtonColor: '#89CFF0',
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  const fireEmployee = employeeData => {
    // console.log(employeeData?._id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to dismiss this employee. This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CFF0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Dismiss',
      cancelButtonText: 'Cancel',
    }).then(result => {
      if (result.isConfirmed) {
        // যদি ব্যবহারকারী নিশ্চিত করে

        const addDismiss = {
          ...employeeData,
          Dismiss: true,
        };

        AxiosSeccur.patch(`/User/${employeeData?._id}`, addDismiss)
          .then(res => {
            console.log(res.data);
            refetch();
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: 'Dismiss !',
                text: `${employeeData?.Name} has been dismissed successfully.`,
                icon: 'success',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#89CFF0',
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  const adjustSalary = ID => {
    const FilterAdjustSalary = paymentRequests.find(
      RequestID => RequestID.id == ID && RequestID.request !== true
    );
    // console.log(ID, FilterAdjustSalary?._id);
    // console.log(FilterAdjustSalary?.salary, FilterAdjustSalary);
    if (!FilterAdjustSalary) {
      // alert('request nai');
      Swal.fire(
        'No requests.',
        'Request has been not sent from HR yet !',
        'info'
      );
    } else {
      Swal.fire({
        title: 'Adjust Salary',
        html: `<div class="text-sm flex justify-center items-center gap-5">
      <span>Current Salary: <strong>${
        FilterAdjustSalary?.salary || 'N/A'
      }</strong></span>
      <span>Date: <strong>${FilterAdjustSalary?.date || 'N/A'}</strong></span>
      </div>`,
        input: 'number', // Input field for new salary
        inputPlaceholder: 'Enter new salary',
        inputAttributes: {
          min: '0', // Salary can't be negative
        },
        showCancelButton: true,
        confirmButtonColor: '#89CFF0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Update Salary',
        cancelButtonText: 'Cancel',
      }).then(result => {
        if (result.isConfirmed) {
          const Salary = result.value; // New salary from the input
          const newSelary = { salary: Salary }; // Pass the salary inside an object
          console.log('New Salary Object:', newSelary); // Check the newSelary object

          if (Salary) {
            // Call the function to update the salary in the database
            AxiosSeccur.patch(
              `Payment_Request/${FilterAdjustSalary?._id}`,
              newSelary // Send the object with salary field
            )
              .then(res => {
                console.log(res.data);
                refetch();

                if (res.data.modifiedCount > 0) {
                  Swal.fire({
                    title: 'Salary updated !',
                    text: `This employee's salary has been updated.`,
                    icon: 'success',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#89CFF0',
                  });
                }
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            Swal.fire('Invalid Input', 'Salary must be a number!', 'error');
          }
        }
      });
    }
  };

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

          {/* All Employee List */}
          <TabPanel className="mt-5 md:mt-8">
            <TableData
              employees={employees}
              makeHR={makeHR}
              fireEmployee={fireEmployee}
              adjustSalary={adjustSalary}
            ></TableData>
          </TabPanel>

          {/* HR List */}
          <TabPanel>
            <TableJustHR
              HrData={HrData}
              fireEmployee={fireEmployee}
              adjustSalary={adjustSalary}
            ></TableJustHR>
          </TabPanel>

          {/* Employee List */}
          <TabPanel>
            <TableJustEmployees
              EmployeeData={EmployeeData}
              fireEmployee={fireEmployee}
              adjustSalary={adjustSalary}
            ></TableJustEmployees>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllEmployeeList;
