import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const RoutersForHR = () => {
  const { User } = useContext(AuthContext);

  return (
    <div>
      <div className="py-11 bg-cyan-50"></div>
      <div className="flex gap-4 md:gap-10 ">
        <div className="w-3/12 md:w-2/12 bg-cyan-100 p-2 md:p-5 min-h-screen">
          <div className="flex flex-col gap-3 text-cyan-400 mt-5">
            <Link to="/DashboardHR/HomeHR">
              <button className="btn w-full text-cyan-700 text-xs md:text-lg flex items-center gap-1">
                <i class="fa-solid fa-house"></i>Home
              </button>
            </Link>

            <Link to="/DashboardHR/EmployeeList">
              <button className="btn w-full text-cyan-700  text-xs md:text-lg flex items-center gap-1">
                <i class="fa-solid fa-list"></i>Employee List
              </button>
            </Link>

            <Link to="/DashboardHR/PaymentRequest">
              <button className="btn w-full text-cyan-700  text-xs md:text-lg flex items-center gap-1">
                <i class="fa-solid fa-money-check-dollar"></i>Payment Request
              </button>
            </Link>
          </div>
        </div>
        <div className="w-3/12 md:w-10/12 p-5 md:p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default RoutersForHR;
