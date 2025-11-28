import React, { useState } from 'react';
import { FaSearch, FaCamera, FaPaintBrush, FaVectorSquare, FaVideo, FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroProps {
    onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('photos');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    const tabs = [
        { id: 'photos', label: 'Photos', icon: FaCamera },
        { id: 'illustrations', label: 'Illustrations', icon: FaPaintBrush },
        { id: 'vectors', label: 'Vectors', icon: FaVectorSquare },
        { id: 'videos', label: 'Videos', icon: FaVideo },
        { id: 'music', label: 'Music', icon: FaMusic },
    ];

    return (
        <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg")' }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-3xl w-full">
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
                    className="text-lg md:text-xl mb-8 text-gray-200"
                >
                    Over 2.7 million+ high quality stock images, videos and music shared by our talented community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative w-full"
                >
                    <div className="flex justify-center gap-6 mb-4 text-sm font-medium text-gray-300">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 transition-colors hover:text-white ${
                                    activeTab === tab.id ? 'text-white border-b-2 border-white pb-1' : ''
                                }`}
                            >
                                <tab.icon />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="relative w-full">
                        <div className="relative flex items-center bg-white rounded-full overflow-hidden shadow-lg pl-6 pr-2 py-2 focus-within:ring-4 ring-green-500/30 transition-all">
                            <FaSearch className="text-gray-400 text-xl" />
                            <input
                                type="text"
                                placeholder={`Search for ${activeTab} on Pixabay`}
                                className="w-full px-4 py-2 text-gray-700 outline-none text-lg"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm font-medium transition-colors hidden sm:block"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-sm text-gray-300 flex gap-2 justify-center flex-wrap">
                        <span className="opacity-70">Popular Images:</span>
                        {['nature', 'wallpaper', 'background', 'sky', 'cat'].map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => { setQuery(tag); onSearch(tag); }}
                                className="hover:text-white hover:underline transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;