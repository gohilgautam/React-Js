export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 py-12 pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg text-center font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-sm text-center">
              <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h2>
            <div className="flex w-full items-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 p-3 h-12 rounded-l-md border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all duration-300"
              />
              <button className="h-12 bg-green-500 text-white px-6 rounded-r-md hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4 text-gray-600 text-xl">
                <a href="#" className="hover:text-blue-600 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-sky-400 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-pink-500 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-700 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-10 border-t border-gray-400 pt-6">
          Copyright ©2025 All rights reserved | This template is made with ❤️ by
          <a href="https://colorlib.com" className="ml-1 hover:text-green-600 transition">Colorlib</a>
        </div>
      </div>
    </footer>
  );
}
