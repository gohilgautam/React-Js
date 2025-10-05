import React from "react";
import { NavLink } from "react-router";

export default function MovieHeader() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/shop/netflix-256.png"
            className="h-8"
            alt="Movie Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Netflix
          </span>
        </NavLink>

        {/* Right side: profile + mobile toggle */}
        <div className="flex items-center md:order-2 space-x-3">
          {/* Profile Button */}
          <button className="flex text-sm bg-gray-700 rounded-full focus:ring-2 focus:ring-gray-500">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png"
              alt="user avatar"
            />
          </button>

          {/* Mobile Toggle Button */}
          
        </div>

        {/* Navigation Links */}
        <div
          className="hidden w-full md:flex md:items-center md:w-auto md:order-1"
          id="navbar-movie"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }
                aria-current="page"
              >
                Home
              </NavLink>
              </li>
            <li>
              <NavLink
                to="/add-movie"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }>
                Add Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/view-movie"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }>
                View Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0"
                    : "block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
