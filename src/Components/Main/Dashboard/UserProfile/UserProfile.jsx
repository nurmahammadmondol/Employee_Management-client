import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Tooltip, Legend } from 'recharts';

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
            name: 'Approved',
            value: Math.round((trueCount / totalRequests) * 100),
            fill: '#28a745', // Green
          },
          {
            name: 'Rejected',
            value: Math.round((rejectCount / totalRequests) * 100),
            fill: '#dc3545', // Red
          },
          {
            name: 'Pending',
            value: Math.round((falseCount / totalRequests) * 100),
            fill: '#ffc107', // Yellow
          },
        ];

        setChartData(data);
      });
  }, []);

  return (
    <div className="text-cyan-800 mb-10 flex flex-col md:flex-row justify-between items-center gap-5 border  rounded-lg shadow-lg">
      {/* User Profile */}
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="w-52 h-40 md:h-52 border overflow-hidden shadow-md">
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
      </div>

      {/* Radial Bar Chart */}
      <div className="hidden lg:flex flex-col items-center ">
        <RadialBarChart
          width={400}
          height={200}
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="200%" // Increase outer radius to leave space for the background
          barSize={20}
          data={chartData}
        >
          {/* Background Gray Bar */}
          <RadialBar
            data={[{ name: 'Total Salary', value: 100 }]}
            fill="#e0e0e0" // Light Gray Background
            dataKey="value"
            barSize={50}
            cornerRadius={5} // Smooth edges for background
          />

          {/* Colored Bars */}
          {chartData.map((entry, index) => (
            <RadialBar
              key={`bar-${index}`}
              data={[entry]} // Only render one at a time
              fill={entry.fill}
              dataKey="value"
              barSize={20}
              cornerRadius={5} // Smooth edges
            />
          ))}

          {/* Tooltip showing percentage */}
          <Tooltip
            formatter={value => `${value}%`} // Format value as percentage
            contentStyle={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 0 5px rgba(0,0,0,0.2)',
            }}
          />
          <Legend />
        </RadialBarChart>
      </div>
    </div>
  );
};

export default UserProfile;
