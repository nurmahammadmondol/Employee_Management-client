import React from 'react';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';
import { useQuery } from '@tanstack/react-query';

const TableJustEmployees = ({ EmployeeData, fireEmployee, adjustSalary }) => {
  return (
    <div className="w-full h-[500px] overflow-x-auto overflow-y-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 py-2">Serial No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Designation</th>

            <th className="border border-gray-300 px-4 py-2">Fire</th>
            <th className="border border-gray-300 px-4 py-2">Salary</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeData.map((employee, index) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="border border-gray-300  py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.Name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {employee.designation || 'N/A'}
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                {employee.dismiss ? (
                  <span className="text-red-300">Dismiss</span>
                ) : (
                  <button
                    className="text-blue-400 hover:underline"
                    onClick={() => fireEmployee(employee)}
                  >
                    Fired
                  </button>
                )}
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className={`bg-[#22d3ee] text-white px-3 py-1 rounded   ${
                    employee.dismiss &&
                    'opacity-50 bg-red-300 pointer-events-none cursor-not-allowed'
                  }`}
                  onClick={() => adjustSalary(employee._id)}
                >
                  Adjust Salary
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableJustEmployees;
