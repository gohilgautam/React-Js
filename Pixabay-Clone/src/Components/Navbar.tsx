import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUpload } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <span className="text-green-500">Pixabay</span>
                    <span className={`${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>Clone</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="#" className={`font-medium hover:text-green-400 transition-colors ${
                        scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                    }`}>
                        Explore
                    </Link>
                    <Link to="#" className={`font-medium hover:text-green-400 transition-colors ${
                        scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                    }`}>
                        Log In
                    </Link>
                    <Link
                        to="#"
                        className={`px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                            scrolled
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                        }`}
                    >
                        Join
                    </Link>
                    <Link
                        to="#"
                        className={`px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 ${
                            scrolled
                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200'
                                : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                    >
                        <FaUpload /> Upload
                    </Link>
                </div>

                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <FaTimes className={scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} />
                    ) : (
                        <FaBars className={scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 md:hidden flex flex-col gap-4"
                    >
                        <Link to="#" className="text-gray-700 dark:text-gray-200 font-medium py-2 border-b border-gray-100 dark:border-gray-800">
                            Explore
                        </Link>
                        <Link to="#" className="text-gray-700 dark:text-gray-200 font-medium py-2 border-b border-gray-100 dark:border-gray-800">
                            Log In
                        </Link>
                        <Link to="#" className="bg-green-500 text-white py-2 rounded-lg text-center font-semibold">
                            Join
                        </Link>
                        <Link to="#" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 rounded-lg text-center font-semibold flex items-center justify-center gap-2">
                            <FaUpload /> Upload
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;