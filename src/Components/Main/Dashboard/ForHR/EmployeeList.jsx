import React, { useContext, useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { AuthContext } from '../../../../Provider/AuthProvider';

const EmployeeList = () => {
  const { AllUser } = useContext(AuthContext); // Fetching all user data from context
  const [data, setData] = useState([]);

  // Sync data from AuthContext and filter Employee roles
  useEffect(() => {
    if (AllUser && Array.isArray(AllUser)) {
      const employees = AllUser.filter(user => user.UserRole === 'Employee'); // Filter employees
      const formattedData = employees.map((user, index) => ({
        id: user._id || index + 1, // Unique identifier
        name: user.Name || 'Unknown', // Use 'Name' from context data
        email: user.Email || 'No Email',
        photo: user.Photo || '', // Use Photo URL
        isVerified: user.isVerified || false, // Default to false if not present
        bankAccount: user.BankAccount || 'N/A', // Bank Account information
        salary: user.Salary || 0, // Salary field (if applicable)
      }));
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
        <button
          className={`px-3 py-1 rounded ${
            row.original.isVerified
              ? 'bg-green-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          disabled={!row.original.isVerified}
        >
          Pay
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h5 className="text-center text-2xl font-semibold mb-5 lobster-regular-font">
        Employee List
      </h5>
      <table className="w-full border-collapse border border-gray-300">
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
  );
};

export default EmployeeList;
