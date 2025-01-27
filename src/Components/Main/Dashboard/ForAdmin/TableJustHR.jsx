import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';

const TableJustHR = () => {
  const AxiosSeccur = useAxiosSecuur();

  const {
    isPending,
    error,
    data: employees = [],
  } = useQuery({
    queryKey: ['User'],
    queryFn: () =>
      AxiosSeccur.get('/User').then(res => {
        // console.log(res.data);
        const FilterHRData = res.data.filter(data => data.UserRole == 'HR');
        // console.log(FilterHRData);
        return FilterHRData;
      }),
  });

  const fireEmployee = ID => {
    console.log(ID);
  };
  const adjustSalary = ID => {
    console.log(ID);
  };

  return (
    <div className="overflow-x-auto">
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
          {employees.map((employee, index) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.Name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {employee.designation || 'N/A'}
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                {employee.fired ? (
                  <span className="text-red-500">Fired</span>
                ) : (
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => fireEmployee(employee?._id)}
                  >
                    Fire
                  </button>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-green-400 text-white px-3 py-1 rounded"
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

export default TableJustHR;
