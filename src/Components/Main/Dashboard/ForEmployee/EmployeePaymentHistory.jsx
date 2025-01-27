import React from 'react';

const EmployeePaymentHistory = () => {
  return (
    <div>
      <h5 className="text-center font-bold mb-5 text-gray-400  text-lg ">
        Your monthly salary payment history
      </h5>

      <div>
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-gray-200 text-center text-lg">
                <th>Serial No</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeePaymentHistory;
