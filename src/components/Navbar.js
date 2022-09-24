import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-center">
        <div className="relative flex h-16 items-center ">
          <a
            href="/"
            class="bg-gray-900 text-white px-3 py-2 rounded-md font-medium text-xl"
            aria-current="page"
          >
            YPAY
          </a>

          <NavLink to="/allsouvenirs"><a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            All souvenirs
          </a></NavLink>

          <NavLink to="/newsouvenirs"><a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            New souvenirs
          </a></NavLink>

          <NavLink to="/addmaster"><a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Add master
          </a></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
