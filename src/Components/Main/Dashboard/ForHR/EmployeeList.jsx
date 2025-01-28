import React, { useContext, useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';

const EmployeeList = () => {
  const { AllUser } = useContext(AuthContext); // Fetching all user data from context
  const AxiosSeccur = useAxiosSecuur();
  const [data, setData] = useState([]);
  // console.log(AllUser);

  const handleSelaryPay = ID => {
    console.log('pay success', ID);
    Swal.fire({
      title: 'Payment Request',
      text: "Provide the details for the employee's payment request.",
      icon: 'question',
      html: `
    <div>
      <label for="salary" style="display: block; margin-bottom: 5px;">Salary:</label>
      <input id="salary" type="number" placeholder="Enter salary" class="swal2-input" />

      <label for="date" style="display: block; margin-top: 15px; margin-bottom: 5px;">Select Month and Year:</label>
      <input id="date" type="month" class="swal2-input" />
    </div>
  `,
      showCancelButton: true,
      confirmButtonColor: '#49e1f1',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Send Request',
    }).then(result => {
      if (result.isConfirmed) {
        // ইনপুট মান সংগ্রহ করা
        const salary = document.getElementById('salary').value;
        const date = document.getElementById('date').value;

        // const Data = { salary, date, ID };

        const { id, name, email, photo, isVerified, bankAccount } = ID;

        const Payment_RequestUser = {
          id,
          name,
          email,
          photo,
          isVerified,
          bankAccount,
          request: false,
          salary: salary,
          date: date,
        };

        // ইনপুট চেক করা
        if (salary && date) {
          AxiosSeccur.post('/Payment_Request', Payment_RequestUser)
            .then(res => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  title: 'Request Sent!',
                  text: `Salary: ${salary}, Date: ${date}`,
                  icon: 'success',
                  confirmButtonText: 'Done',
                  confirmButtonColor: '#49e1f1',
                });
              }
            })
            .catch(error => {
              console.log(error.messsage);
            });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Please fill out all fields before submitting.',
            icon: 'error',
            confirmButtonColor: '#b6f3f9',
          });
        }
      }
    });
  };
  const handleEmplayeeDetailss = ID => {
    console.log('Details success open', ID);
  };

  // Sync data from AuthContext and filter Employee roles
  useEffect(() => {
    if (AllUser && Array.isArray(AllUser)) {
      const employees = AllUser.filter(user => user.UserRole === 'Employee'); // Filter employees
      console.log(employees);
      const formattedData = employees.map((user, index) => ({
        id: user._id || index + 1, // Unique identifier
        name: user.Name || 'Unknown', // Use 'Name' from context data
        email: user.Email || 'No Email',
        photo: user.Photo || '', // Use Photo URL
        isVerified: user.verified || false, // Default to false if not present
        isDismiss: user.dismiss || false, // Default to false if not present
        bankAccount: user.BankAccount || 'N/A', // Bank Account information
        salary: user.Salary || 0, // Salary field (if applicable)
      }));
      // console.log(formattedData);

      setData(formattedData);
    }
  }, [AllUser]);

  const toggleVerified = id => {
    const updatedData = data.map(employee =>
      employee.id === id
        ? { ...employee, isVerified: !employee.isVerified }
        : employee
    );
    setData(updatedData);

    // Optional: Update the verified status in the database
    console.log('Updated Employee Data:', updatedData);
  };

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Bank Account',
      accessorKey: 'bankAccount',
    },
    {
      header: 'Verified',
      cell: ({ row }) => (
        <button
          className="px-2 py-1  text-white rounded"
          onClick={() => toggleVerified(row.original.id)}
        >
          {row.original.isVerified ? '✅' : '❌'}
        </button>
      ),
    },
    {
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2 md:gap-4 items-center justify-center">
          <Link to={`/DashboardHR/EmplayeDetails/${row.original.id}`}>
            <button
              onClick={() => handleEmplayeeDetailss(row.original)}
              className="btn btn-sm btn-outline text-cyan-700 flex items-center gap-2 text-xs "
            >
              <i class="fa-solid fa-circle-info"></i>
              Details
            </button>
          </Link>

          <button
            onClick={() => handleSelaryPay(row.original)}
            className={`px-3 py-1 text-sm rounded flex items-center gap-2 ${
              AllUser.some(user => user.dismiss && user._id === row.original.id)
                ? 'opacity-50 bg-red-300 pointer-events-none cursor-not-allowed'
                : row.original.isVerified
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
            disabled={
              AllUser.some(
                user => user.dismiss && user._id === row.original.id
              ) || !row.original.isVerified
            }
          >
            {AllUser.some(
              user => user.dismiss && user._id === row.original.id
            ) ? (
              <div className="px-4 text-white">
                <i class="fa-regular fa-user mr-2"></i>
                Dismiss User
              </div>
            ) : (
              <>
                <i className="fa-solid fa-money-check-dollar"></i>Payment
                Request
              </>
            )}
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full ">
      <h5 className="text-center text-2xl font-semibold mb-5 lobster-regular-font">
        Employee List
      </h5>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300  ">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="border border-gray-300 p-2 bg-gray-200"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
