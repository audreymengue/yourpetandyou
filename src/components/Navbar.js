import React from "react";
import "../index.css";


const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-center">
        <div className="relative flex h-16 items-center ">
          <a
            href="/"
            class="bg-gray-900 text-white px-3 py-2 rounded-md font-medium text-xl"
            aria-current="page"
          >
            YPAY
          </a>

          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            All souvenirs
          </a>

          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            New souvenirs
          </a>

          <a
            href="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Add master
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
