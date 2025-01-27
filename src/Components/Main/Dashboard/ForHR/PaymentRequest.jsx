import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const PaymentRequest = () => {
  const LoadData = useLoaderData();
  const [RequestData, setRequestData] = useState([...LoadData].reverse());
  console.log(RequestData);

  return (
    <div>
      <h5 className="text-center text-2xl font-semibold mb-5 lobster-regular-font">
        Payment Request
      </h5>

      <div className="w-full">
        <div className="">
          <table className="table border">
            {/* head */}
            <thead className="bg-gray-200 border-gray-300">
              <tr className="text-center">
                <th>Serial No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Salary</th>
                <th>Request</th>
              </tr>
            </thead>
            <tbody>
              {RequestData.map((request, index) => (
                <tr className="text-center">
                  <th>{index + 1}</th>
                  <td>{request?.name}</td>
                  <td>{request?.date}</td>
                  <td>${request?.salary}</td>
                  {request?.request ? (
                    <td>
                      <span className="text-green-500 bg-gray-200 px-3 py-1 rounded-2xl">
                        Approved
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className="text-red-500 bg-gray-200 px-3 py-1 rounded-2xl">
                        Pending
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
