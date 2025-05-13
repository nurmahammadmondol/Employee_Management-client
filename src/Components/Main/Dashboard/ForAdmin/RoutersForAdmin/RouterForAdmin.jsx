import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from '../../../../../assets/Photo/EmpowerHubLogo.png';

const RouterForAdmin = () => {
  return (
    <section>
      <div className="py-8 bg-cyan-100"></div>
      <div className="md:flex gap-4 md:gap-10 ">
        <div className="w-full md:w-2/12 bg-cyan-200 p-7 md:p-4 md:min-h-screen">
          <div className="flex flex-col gap-3 text-cyan-400 ">
            <div>
              <img className="w-full" src={Logo} alt="" />
            </div>

            <NavLink to="/DashboardAdmin/HomeAdmin">
              <button className="btn rounded-none w-full text-cyan-500  flex items-center gap-1">
                <i class="fa-solid fa-desktop mr-1"></i>Admin Dashboard
              </button>
            </NavLink>

            <NavLink to="/DashboardAdmin/AllEmployeeList">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-1">
                <i class="fa-solid fa-list"></i>All Employee List
              </button>
            </NavLink>

            <NavLink to="/DashboardAdmin/WorkRecords">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-1">
                <i class="fa-solid fa-newspaper"></i>Work Records
              </button>
            </NavLink>

            <NavLink to="/DashboardAdmin/AttendanceTracker">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-2 text-sm">
                <i class="fa-solid fa-clipboard-user text-base"></i>Attendance
                Tracker
              </button>
            </NavLink>

            <NavLink to="/DashboardAdmin/PayEmployeesSalary">
              <button className="btn rounded-none w-full text-cyan-500   flex items-center gap-2 text-xs">
                <i class="fa-solid fa-money-check-dollar"></i>Pay Employees
                Salary
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

export default RouterForAdmin;
