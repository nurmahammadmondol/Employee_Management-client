import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const PaymentRequest = () => {
  const LoadData = useLoaderData();
  const [RequestData, setRequestData] = useState([...LoadData].reverse());
  // console.log(RequestData);

  return (
    <div>
      <Helmet>
        <title>EmpowerHub || PaymentRequest</title>
      </Helmet>
      <h5 className="text-center text-2xl font-semibold mb-5 lobster-regular-font">
        All Payment Request
      </h5>

      <div className="w-full">
        <div className="w-full h-[500px] overflow-x-auto overflow-y-auto">
          <table className="table border">
            {/* head */}
            <thead className="bg-gray-200 border-gray-300 ">
              <tr className="text-center text-base font-bold text-cyan-700">
                <th>Serial No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Salary</th>
                <th>Request</th>
              </tr>
            </thead>
            <tbody>
              {RequestData ? (
                <>
                  {RequestData.map((request, index) => (
                    <tr className="text-center">
                      <th>{index + 1}</th>
                      <td>{request?.name}</td>
                      <td>{request?.date}</td>
                      <td>${request?.salary || '_ _ _'}</td>
                      {request?.request === false ? (
                        <td>
                          <span className="text-yellow-400 border border-yellow-400 bg-yellow-50 px-3 py-1 rounded-2xl">
                            Pending...
                          </span>
                        </td>
                      ) : request?.request === 'reject' ? (
                        <td>
                          <span className="text-red-400 bg-red-50 border border-red-400 px-4 py-1 rounded-2xl">
                            Rejected
                          </span>
                        </td>
                      ) : request?.request === true ? (
                        <td>
                          <span className="text-green-400 bg-green-50 border border-green-400 px-3 py-1 rounded-2xl">
                            Approved
                          </span>
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td>_ _ _</td>
                  <td>_ _ _</td>
                  <td>_ _ _</td>
                  <td>_ _ _</td>
                  <td>_ _ _</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
