export default function Footer() {
    return (
        <footer className="bg-gray-200 text-gray-700">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6 py-16">
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-gray-600">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-teal-600 cursor-pointer">About Us</li>
                        <li className="hover:text-teal-600 cursor-pointer">Testimonials</li>
                        <li className="hover:text-teal-600 cursor-pointer">Terms of Service</li>
                        <li className="hover:text-teal-600 cursor-pointer">Privacy</li>
                        <li className="hover:text-teal-600 cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Newsletter + Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-3 border border-gray-300 focus:outline-none"
                        />
                        <button className="bg-teal-600 text-white px-5">Subscribe</button>
                    </div>

                    <h3 className="text-lg font-semibold mt-8 mb-4">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-teal-600"></a>
                        <a href="#" className="hover:text-teal-600"></a>
                        <a href="#" className="hover:text-teal-600"></a>
                        <a href="#" className="hover:text-teal-600"></a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-300 text-center py-4">
                <p className="text-sm">&copy; 2024 All rights reserved | This template is made with &#10084; by marga</p>
            </div>
        </footer>
    );
}   