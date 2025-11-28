import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Pixabay</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Over 2.7 million+ high quality stock images, videos and music shared by our talented community.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <FaFacebook className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                            <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                            <FaInstagram className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                            <FaPinterest className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                            <FaLinkedin className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Discover</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="hover:text-green-500 cursor-pointer">Editor's Choice</li>
                            <li className="hover:text-green-500 cursor-pointer">Curated Collections</li>
                            <li className="hover:text-green-500 cursor-pointer">Popular Images</li>
                            <li className="hover:text-green-500 cursor-pointer">Videos</li>
                            <li className="hover:text-green-500 cursor-pointer">Music</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Community</h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="hover:text-green-500 cursor-pointer">Blog</li>
                            <li className="hover:text-green-500 cursor-pointer">Forum</li>
                            <li className="hover:text-green-500 cursor-pointer">Creators</li>
                            <li className="hover:text-green-500 cursor-pointer">Cameras</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 dark:text-gray-500 pt-8 border-t border-gray-100 dark:border-gray-800">
                    &copy; {new Date().getFullYear()} Pixabay Clone. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;