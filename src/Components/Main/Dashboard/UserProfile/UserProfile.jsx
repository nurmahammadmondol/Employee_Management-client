import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';

const UserProfile = ({ userData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://employee-management-server-two-eight.vercel.app/Payment_Request'
      )
      .then(res => {
        const requests = res.data;

        const totalRequests = requests.length;
        const trueCount = requests.filter(req => req.request === true).length;
        const falseCount = requests.filter(req => req.request === false).length;
        const rejectCount = requests.filter(
          req => req.request === 'reject'
        ).length;

        const data = [
          {
            name: 'Pending',
            value: (falseCount / totalRequests) * 100,
            fill: '#ffc107', // Yellow
          },
          {
            name: 'Rejected', // Red for Rejected
            value: (rejectCount / totalRequests) * 100,
            fill: '#dc3545', // Red
          },
          {
            name: 'Approved', // Green for Approved
            value: (trueCount / totalRequests) * 100,
            fill: '#28a745', // Green
          },
        ];

        setChartData(data);
      });
  }, []);

  return (
    <div className="text-cyan-800 mb-14 flex flex-col md:flex-row justify-between items-center gap-5 border p-5 rounded-lg shadow-lg">
      {/* User Profile */}
      <div className="w-52 h-40 md:h-52 border  overflow-hidden shadow-md">
        <img
          className="w-full h-full object-cover"
          src={userData?.Photo}
          alt="User Profile"
        />
      </div>

      {/* User Info */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-bold">{userData?.Name}</h1>
        <h4>Email: {userData?.Email}</h4>
        <h4>Role: {userData?.UserRole}</h4>
        <h4>Phone: +08801312345678</h4>
      </div>

      {/* Radial Bar Chart */}
      <div className="flex flex-col items-center">
        <RadialBarChart
          width={400}
          height={250}
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="100%"
          barSize={20}
          data={chartData}
        >
          <RadialBar
            minAngle={15}
            label={({ value }) => `${Math.round(value)}%`} // Showing % instead of raw numbers
            background
            clockWise
            dataKey="value"
            cornerRadius={50}
          />
          <Tooltip formatter={value => `${Math.round(value)}%`} />
        </RadialBarChart>

        {/* Custom Legend */}
        <div className="flex justify-center gap-4 mt-2">
          <div>
            <span className="text-cyan-800 font-semibold">Pay Salary :</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-semibold">Approved</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-red-600 font-semibold">Rejected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-600 font-semibold">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
