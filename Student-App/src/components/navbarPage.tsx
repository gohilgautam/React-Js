
export default function Navbar() {
  return (
    <nav className="w-full rounded-b-2xl bg-gradient-to-r from-gray-800 to-slate-900 shadow-2xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <a href="#" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-400 drop-shadow-md transition-transform duration-300 hover:scale-110"
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
          <li>
            <a
              href="#"
              className="group flex items-center space-x-2 rounded-md px-4 py-2 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-indigo-400"
            >
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center space-x-2 rounded-md px-4 py-2 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-indigo-400"
            >
              <span>Students</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center space-x-2 rounded-md px-4 py-2 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-indigo-400"
            >
              <span>About</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
