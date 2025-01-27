import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { User, userData, LogOutUser } = useContext(AuthContext);
  const Links = (
    <div className="  md:text-xl font-bold flex items-center gap-4 md:gap-7">
      <NavLink>Home</NavLink>
      {/* <NavLink to="">Dashboard </NavLink> */}
      {User && userData.UserRole === 'Employee' && (
        <NavLink to="/DashboardEmployes">Dashboard </NavLink>
      )}
      {User && userData.UserRole === 'HR' && (
        <NavLink to="/DashboardHR">Dashboard </NavLink>
      )}
      {User && userData.UserRole === 'Admin' && (
        <NavLink to="/DashboardAdmin">Dashboard</NavLink>
      )}

      <NavLink>About</NavLink>
      <NavLink>ContactUs</NavLink>
    </div>
  );

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content p-3  bg-gray-200 z-20 mt-3 text-black"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl md:text-4xl rubik-wet-paint-regular-font text-cyan-300 font-extrabold">
          EmpowerHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-2 items-center">
        <div>
          {User && (
            <img
              className="w-12 h-12 rounded-full"
              src={User?.photoURL}
              alt=""
            />
          )}
        </div>
        <div>
          {User ? (
            <button
              onClick={LogOutUser}
              className="btn  text-xl btn-outline text-white"
            >
              Log out
            </button>
          ) : (
            <Link to="/LoginPage">
              <button className="btn  text-xl btn-outline text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
