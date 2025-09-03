export default function Navbar() {
  return (
    <nav className="w-full rounded-b-2xl bg-gradient-to-r from-gray-800 to-slate-900 shadow-2xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-400 drop-shadow-md transition-transform duration-300 hover:rotate-12 hover:scale-125"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 22v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4" />
            <path d="M18 10V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4" />
            <path d="M12 2v2" />
            <path d="M6 10H4" />
            <path d="M20 10H18" />
            <circle cx="12" cy="17" r="2" />
          </svg>
          <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
            Student Portal
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="flex space-x-8">
          {["Home", "Students", "About"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="group relative flex items-center space-x-2 rounded-md px-4 py-2 text-gray-300 font-medium transition-all duration-300 hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-400 hover:to-blue-500"
              >
                <span>{item}</span>

                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>

                {/* Glow effect */}
                <span className="absolute inset-0 rounded-md opacity-0 transition group-hover:opacity-30 group-hover:shadow-[0_0_15px_3px_rgba(99,102,241,0.6)]"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
