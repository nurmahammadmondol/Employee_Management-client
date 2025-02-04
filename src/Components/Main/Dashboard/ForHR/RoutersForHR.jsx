import { Link, Outlet } from 'react-router-dom';

import Logo from '../../../../assets/Photo/EmpowerHubLogo.png';

const RoutersForHR = () => {
  return (
    <div>
      <div className="py-11 bg-cyan-50"></div>
      <div className="md:flex gap-4 md:gap-10 ">
        <div className="w-full md:w-2/12 bg-cyan-200 p-7 md:p-4 md:min-h-screen">
          <div className="flex flex-col gap-3 text-cyan-400 ">
            <div>
              <img className="w-full" src={Logo} alt="" />
            </div>

            <Link to="/DashboardHR/HomeHR">
              <button className="btn w-full text-cyan-700  flex items-center gap-1">
                <i class="fa-solid fa-desktop mr-1"></i>HR Dashboard
              </button>
            </Link>

            <Link to="/DashboardHR/EmployeeList">
              <button className="btn w-full text-cyan-700   flex items-center gap-1">
                <i class="fa-solid fa-list"></i>Employee List
              </button>
            </Link>

            <Link to="/DashboardHR/WorkRecords">
              <button className="btn w-full text-cyan-700   flex items-center gap-1">
                <i class="fa-solid fa-newspaper"></i>Work Records
              </button>
            </Link>

            <Link to="/DashboardHR/PaymentRequest">
              <button className="btn w-full text-cyan-700   flex items-center gap-1">
                <i class="fa-solid fa-money-check-dollar"></i>Payment Request
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-10/12 my-10 md:mt-0 p-5 md:p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default RoutersForHR;
