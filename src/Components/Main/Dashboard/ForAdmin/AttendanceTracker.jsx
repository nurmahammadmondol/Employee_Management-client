import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const AttendanceTracker = () => {
  const LoadData = useLoaderData();

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('en-US', { month: 'long' });
  const year = today.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div>
      <Helmet>
        <title>EmpowerHub || Attendance</title>
      </Helmet>

      <div className="md:flex items-center justify-between">
        <h4 className="text-2xl font-semibold">
          Today's employee attendance list
        </h4>

        <span>Date : {formattedDate}</span>
      </div>

      <div className="overflow-x-auto  mt-10 border ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-100 border-gray-200">
            <tr className="text-center  text-base font-bold ">
              <th>Serial</th>
              <th>Name</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {LoadData.map((User, index) => (
              <tr key={User._id} className="text-center ">
                <th>{index + 1}</th>
                <td>{User.Name}</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <p className="text-xs text-center">
          This page is still a work in progress and is not completely finished.
        </p>
      </div>
    </div>
  );
};

export default AttendanceTracker;
