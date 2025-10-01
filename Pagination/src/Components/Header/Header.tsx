import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-[#oklch(0.87 0.01 261.99)] w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Left Logo */}
        <div className="text-green-400 font-bold tracking-wide text-lg cursor-pointer
                        hover:text-green-700 transition-all duration-300 transform hover:scale-105">
          L. Carter
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-8 text-green-900 text-sm">
          <NavLink to="/"  className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text--900': 'text-green-400'} `}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text-green-900': 'text-green-400'} `}>
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/services" className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text-green-900': 'text-green-400'} `}>
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text-green-900': 'text-green-400'} `}>
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/blog" className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text-green-900': 'text-green-400'} `}>
            Blog
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `relative hover:text-green-700 transition-all duration-300 transform hover:scale-105 ${(isActive) ? 'text-green-900': 'text-green-400'} `}>
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 hover:w-full"></span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
