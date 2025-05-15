import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

const SalaryMonthly = ({ Data }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedData = months.map((month, index) => {
    const totalSalary = Data.reduce((sum, item) => {
      if (item.date) {
        let itemMonth;
        if (Array.isArray(item.date)) {
          itemMonth = parseInt(item.date[0].split('-')[1], 10) - 1;
        } else if (typeof item.date === 'string') {
          itemMonth = parseInt(item.date.split('-')[1], 10) - 1;
        }

        if (itemMonth === index) {
          return sum + Number(item.salary);
        }
      }
      return sum;
    }, 0);

    return { month, salary: totalSalary };
  });

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={formattedData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Bar Chart */}
          <Bar dataKey="salary" fill="#a5f3fc" barSize={40} name="Salary Bar" />
          {/* Line Chart */}
          <Line
            type="monotone"
            dataKey="salary"
            stroke="#22d3ee"
            strokeWidth={2}
            name="Salary Line"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryMonthly;
