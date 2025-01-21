import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const Links = (
    <div className="lobster-regular-font text-lg md:text-xl font-bold grid grid-cols-1 gap-3 justify-center md:flex items-center md:gap-7">
      <NavLink>Home</NavLink>
      <NavLink>Services</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact us</NavLink>
    </div>
  );

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white py-5">
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
            className="menu menu-sm dropdown-content w-full  bg-gray-300 z-20 mt-3 text-black"
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
      <div className="navbar-end">
        <a className="btn  text-xl btn-outline text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
