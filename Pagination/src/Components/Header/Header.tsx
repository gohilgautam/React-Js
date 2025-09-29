import React from "react";
import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-[#f8f8ed] w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Left Logo */}
        <div className="text-green-900 font-bold tracking-wide text-lg cursor-pointer
                        hover:text-green-700 transition-all duration-300 transform hover:scale-105">
          L. Carter
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-8 text-green-900 text-sm">
          <NavLink to="/"  className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/projects" className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/services" className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/about" className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/blog" className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/contact" className="relative hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>

          {/* Cart Icon with number */}
          <div className="relative flex items-center cursor-pointer group">
            <ShoppingBag className="h-6 w-6 text-green-900 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute right-[6px] top-[6px] text-xs text-white bg-green-900 rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
