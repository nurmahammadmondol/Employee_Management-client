import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const EmployeePaymentHistory = () => {
  const { User } = useContext(AuthContext);
  const AxiosSeccur = useAxiosSecuur();
  const [paymentRequests, setpaymentRequests] = useState([]);

  useEffect(() => {
    AxiosSeccur.get('/Payment_Request')
      .then(res => {
        console.log(res.data);
        const myRequest = res.data
          .filter(
            myData => myData.email === User.email && myData.request === true
          ) // Approved ফিল্টার
          .reverse();
        setpaymentRequests(myRequest);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  console.log(paymentRequests);

  return (
    <div>
      <Helmet>
        <title>EmpowerHub || PaymentHistory</title>
      </Helmet>
      <h5 className="text-center font-bold mb-5  text-gray-400 flex justify-center items-center gap-3">
        Your monthly salary payment history
        <i class="fa-solid fa-circle-dollar-to-slot text-lg"></i>
      </h5>

      <div>
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-gray-200 text-cyan-700  text-center text-base font-bold">
                <th>Serial No</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paymentRequests.length > 0 ? (
                <>
                  {paymentRequests.map((MyRequest, i) => (
                    <tr key={MyRequest._id}>
                      <th>{i + 1}</th>
                      <td>{MyRequest.approvedTime}</td>
                      <td className="flex justify-center items-center gap-1">
                        <i class="fa-solid fa-dollar-sign"></i>
                        {MyRequest.salary}
                      </td>
                      <td>{MyRequest._id}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <th>_ _ _</th>
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

export default EmployeePaymentHistory;
