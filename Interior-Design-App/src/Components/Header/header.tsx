export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">Home</li>
          <li className="hover:text-teal-600 cursor-pointer">Projects</li>
          <li className="hover:text-teal-600 cursor-pointer">Services</li>
        </ul>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-600">marga</h1>

        {/* Right Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">About</li>
          <li className="hover:text-teal-600 cursor-pointer">Blog</li>
          <li className="hover:text-teal-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}