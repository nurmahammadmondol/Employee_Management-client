import React from 'react';
import {
  LineChart,
  Line,
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
          <span className="text-[#22d3ee]">{payload[0].payload.name}</span>
        </p>
        <p className="text-xs text-gray-500">Salary: ${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const SalaryLineChart = ({ Data }) => {
  // ডাটা ফরম্যাটিং
  const formattedData = Data.map(employee => ({
    month: employee.date,
    salary: Number(employee.salary),
    name: employee.name,
  }));

  return (
    <div className="w-full h-[350px] lg:h-[400px]">
      {/* Chart Title */}
      <p className="text-center text-sm text-gray-600 mb-5">
        Monthly Salary Distribution of Employees
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            domain={[0, 10500]}
            ticks={[0, 1500, 3000, 4500, 6000, 7500, 9000, 10500]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="salary"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryLineChart;
