import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroProps {
    onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };
    return (
        <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg")' }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Stunning free images & royalty free stock
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-8 text-gray-100"
                >
                    Over 2.7 million+ high quality stock images, videos and music shared by our talented community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative w-full"
                >

                    <form onSubmit={handleSubmit} className="relative w-full mb-4">
                        <div className="relative flex items-center bg-white/20 backdrop-blur-md rounded-full overflow-hidden px-5 py-3 border border-white/10 focus-within:bg-white/30 transition-all">
                            <FaSearch className="text-gray-200 text-lg mr-3" />
                            <input
                                type="text"
                                placeholder="Search for free Images, Videos, Music & more"
                                className="w-full bg-transparent text-white placeholder-gray-300 outline-none text-lg"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;