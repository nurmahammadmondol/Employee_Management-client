import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js-এর প্রয়োজনীয় ডিপেনডেন্সি রেজিস্টার করা
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeDetails = () => {
  const { id } = useParams(); // URL থেকে ID পাবে
  const [employee, setEmployee] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const salaryHistory = [
      { month: 'January', year: 2023, salary: 5000 },
      { month: 'February', year: 2023, salary: 5000 },
      { month: 'March', year: 2023, salary: 5000 },
    ];

    setChartData(salaryHistory);
  }, []);

  useEffect(() => {
    // ডেটা Fetch করো Backend থেকে
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://employee-management-server-site-ashy.vercel.app/User/${id}`
        );
        const data = await response.json();
        setEmployee(data);
        // console.log(data);

        // Chart-এর জন্য ডেটা তৈরি করো
        setChartData({
          labels: data.salaryHistory
            ? data.salaryHistory.map(item => `${item.month} ${item.year}`)
            : [],
          datasets: [
            {
              label: 'Salary',
              data: data.salaryHistory
                ? data.salaryHistory.map(item => item.salary)
                : [],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <h5 className="text-center md:text-2xl font-semibold mb-5  md:mb-10 lobster-regular-font border-b-2">
        Employee Details
      </h5>

      <div className="md:flex justify-around gap-10">
        <div className="">
          <img
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
            src={employee.Photo}
            alt={employee.Name}
          />
          <h2 className="text-lg font-bold mt-5">Name : {employee.Name}</h2>
          <p>Email : {employee.Email}</p>
          <p>Designation: {employee.UserRole}</p>
        </div>

        <div style={{ width: '600px', height: '400px' }}>
          {chartData ? <Bar data={chartData} /> : <p>Loading chart...</p>}
          {/* <h3 className="text-center">Salary vs Month</h3> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
