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
              <tr>
                <th>_ _ _</th>
                <td>_ _ _</td>
                <td>_ _ _</td>
                <td>_ _ _</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeePaymentHistory;
