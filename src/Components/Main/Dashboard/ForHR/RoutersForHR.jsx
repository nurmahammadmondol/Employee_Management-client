import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../../../../assets/Photo/EmpowerHubLogo.png';

const RoutersForHR = () => {
  return (
    <section>
      <div className="py-8 lg:py-10 bg-cyan-100"></div>
      <div className="md:flex gap-5 lg:gap-10 ">
        <div className="w-full md:w-2/12 bg-cyan-200 p-7 md:p-4 md:min-h-screen">
          <div className="flex flex-col gap-3 text-cyan-400 ">
            <div>{/* <img className="w-full" src={Logo} alt="" /> */}</div>

            <NavLink to="/DashboardHR/HomeHR">
              <button className="btn rounded-none w-full text-cyan-500  flex items-center gap-1">
                <i class="fa-solid fa-desktop mr-1"></i>HR Dashboard
              </button>
            </NavLink>

            <NavLink to="/DashboardHR/EmployeeList">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-1">
                <i class="fa-solid fa-list"></i>Employee List
              </button>
            </NavLink>

            <NavLink to="/DashboardHR/WorkRecords">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-1">
                <i class="fa-solid fa-newspaper"></i>Work Records
              </button>
            </NavLink>

            <NavLink to="/DashboardHR/PaymentRequest">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-1">
                <i class="fa-solid fa-money-check-dollar"></i>Payment Request
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-10/12 my-10 md:mt-0 p-5 md:p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default RoutersForHR;
