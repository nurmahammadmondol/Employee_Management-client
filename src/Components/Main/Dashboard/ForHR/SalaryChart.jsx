import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-md border">
        <p className="text-sm font-semibold text-gray-700">
          <span className="text-blue-600">{payload[0].payload.name}</span>
        </p>
        <p className="text-xs text-gray-500">Salary: ${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const SalaryBarChart = ({ Data }) => {
  // ডাটা ফরম্যাটিং
  const formattedData = Data.map(employee => ({
    month: employee.date, // মাস ধরে রাখা হচ্ছে
    salary: Number(employee.salary), // বেতন সংখ্যায় রূপান্তর
    name: employee.name, // এমপ্লয়ির নাম রাখা হচ্ছে
  }));

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="salary" fill="#82ca9d" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryBarChart;
