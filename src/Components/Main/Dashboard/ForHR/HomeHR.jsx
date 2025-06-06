import { Helmet } from 'react-helmet';

import { FaListCheck, FaMoneyCheckDollar, FaUsers } from 'react-icons/fa6';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SalaryChart from './SalaryChart';
import { GrTasks } from 'react-icons/gr';

const HomeHR = () => {
  const { AllUser } = useContext(AuthContext);
  const [workData, setWorkData] = useState([]);
  const [Data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [sumAllSalary, setSumAllSalary] = useState(null);
  const percentage = 5;

  // // console.log(paymentData);

  const Projects = workData.length;
  const AllEmplayee = AllUser.length;

  const Emplayeepercentage = (AllEmplayee / 100) * 100;
  const Projectspercentage = (Projects / 50) * 100;
  const paymentSuccesspercentage = (sumAllSalary / 10000) * 100;
  // // console.log(paymentSuccesspercentage, sumAllSalary);

  useEffect(() => {
    axios
      .get('https://employee-management-server-two-eight.vercel.app/WorkSheet')
      .then(res => {
        // // console.log(res.data);
        setWorkData(res.data);
      })
      .catch(error => {
        // console.log(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://employee-management-server-two-eight.vercel.app/Payment_Request'
      )
      .then(res => {
        // // console.log(res.data);
        const requestSuccess = res.data.filter(data => data.request);
        setData(requestSuccess);

        const salaryArray = requestSuccess.map(item => Number(item.salary));

        const sumSalary = salaryArray.reduce((acc, curr) => acc + curr, 0);

        setSumAllSalary(sumSalary);
        setPaymentData(salaryArray);
      })
      .catch(error => {
        // console.log(error.message);
      });
  }, []);

  // // console.log(paymentData);

  return (
    <div>
      <Helmet>
        <title>Hr Dashboard || EmpowerHub</title>
      </Helmet>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="relative border h-40 w-full p-4 flex flex-col justify-between bg-gray-50 text-black rounded-md">
          {/* Card Content and Progress Bar */}
          <div className="flex flex-col justify-start h-full">
            {/* Card Content */}
            <div className="flex flex-col justify-between h-full">
              <h6 className=" text-2xl font-bold">Projects</h6>
              <div className="flex justify-between items-center">
                <p className=" text-xl font-bold flex items-center gap-1">
                  <FaListCheck className="text-xs" />
                  {Projects}
                </p>
                <small className="">{Projectspercentage.toFixed(2)}%</small>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-1 mt-2">
              <div
                className={`h-1 rounded-full ${
                  Projectspercentage > 50 ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min(Projectspercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Icon as Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-20">
            <FaListCheck className="text-6xl" />
          </div>
        </div>

        <div className="relative border h-40 w-full p-4 flex flex-col justify-between  rounded-md">
          {/* Card Content and Progress Bar */}
          <div className="flex flex-col justify-start h-full">
            {/* Card Content */}
            <div className="flex flex-col justify-between h-full">
              <h6 className=" text-2xl font-bold">New Employee</h6>
              <div className="flex justify-between items-center">
                <p className=" text-xl font-bold flex items-center gap-1">
                  <FaUsers className="text-lg" />
                  {AllEmplayee}
                </p>
                <small className="">{Emplayeepercentage.toFixed(2)}%</small>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-1 mt-2">
              <div
                className={`h-1 rounded-full ${
                  Emplayeepercentage > 25 ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min(Emplayeepercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Icon as Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-20">
            <FaUsers className="text-6xl" />
          </div>
        </div>

        <div className="relative border h-40 w-full p-4 flex flex-col justify-between  rounded-md">
          {/* Card Content and Progress Bar */}
          <div className="flex flex-col justify-start h-full">
            {/* Card Content */}
            <div className="flex flex-col justify-between h-full">
              <h6 className=" text-2xl font-bold">Running Tasks</h6>
              <div className="flex justify-between items-center">
                <p className=" text-xl font-bold flex items-center gap-1">
                  <GrTasks className="text-sm " />7
                </p>
                <small className="">{percentage.toFixed(2)}%</small>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-1 mt-2">
              <div
                className={`h-1 rounded-full ${
                  percentage > 50 ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Icon as Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-20">
            <GrTasks className="text-6xl" />
          </div>
        </div>
      </div>

      <div className="my-20">
        <SalaryChart Data={Data}></SalaryChart>
      </div>
    </div>
  );
};

export default HomeHR;
