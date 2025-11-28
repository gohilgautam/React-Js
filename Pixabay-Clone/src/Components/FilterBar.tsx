import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterBarProps {
    filters: any;
    setFilters: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleFilterChange = (key: string, value: any) => {
        setFilters({ ...filters, [key]: value });
        if (key !== 'min_width' && key !== 'min_height') {
            setActiveDropdown(null);
        }
    };

    const colors = [
        { name: 'grayscale', color: 'bg-gray-400' },
        { name: 'transparent', color: 'bg-white border border-gray-300' },
        { name: 'red', color: 'bg-red-500' },
        { name: 'orange', color: 'bg-orange-500' },
        { name: 'yellow', color: 'bg-yellow-400' },
        { name: 'green', color: 'bg-green-500' },
        { name: 'turquoise', color: 'bg-teal-400' },
        { name: 'blue', color: 'bg-blue-500' },
        { name: 'lilac', color: 'bg-purple-400' },
        { name: 'pink', color: 'bg-pink-400' },
        { name: 'white', color: 'bg-white border border-gray-200' },
        { name: 'gray', color: 'bg-gray-500' },
        { name: 'black', color: 'bg-black' },
        { name: 'brown', color: 'bg-amber-800' },
    ];

    return (
        <div className="sticky top-[72px] z-40 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 py-3 transition-colors duration-300" ref={dropdownRef}>
            <div className="container mx-auto px-4 flex flex-wrap items-center gap-4 overflow-x-auto no-scrollbar">

                {/* Image Type Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('image_type')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filters.image_type !== 'all' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                    >
                        {filters.image_type === 'all' ? 'All Images' : filters.image_type.charAt(0).toUpperCase() + filters.image_type.slice(1)}
                        <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'image_type' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'image_type' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50"
                            >
                                {['all', 'photo', 'illustration', 'vector'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleFilterChange('image_type', type)}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center ${
                                            filters.image_type === type ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-200'
                                        }`}
                                    >
                                        {type === 'all' ? 'All Images' : type.charAt(0).toUpperCase() + type.slice(1)}
                                        {filters.image_type === type && <FaCheck />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Orientation Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('orientation')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filters.orientation !== 'all' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                    >
                        {filters.orientation === 'all' ? 'Orientation' : filters.orientation.charAt(0).toUpperCase() + filters.orientation.slice(1)}
                        <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'orientation' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'orientation' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50"
                            >
                                {['all', 'horizontal', 'vertical'].map((orient) => (
                                    <button
                                        key={orient}
                                        onClick={() => handleFilterChange('orientation', orient)}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center ${
                                            filters.orientation === orient ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-200'
                                        }`}
                                    >
                                        {orient === 'all' ? 'Any Orientation' : orient.charAt(0).toUpperCase() + orient.slice(1)}
                                        {filters.orientation === orient && <FaCheck />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Size Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('size')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filters.min_width || filters.min_height ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                    >
                        Size
                        <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'size' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'size' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-4 z-50"
                            >
                                <div className="flex gap-2 items-center mb-2">
                                    <div className="flex-1">
                                        <label className="block text-xs text-gray-500 mb-1">Width (px)</label>
                                        <input
                                            type="number"
                                            placeholder="W"
                                            className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
                                            value={filters.min_width || ''}
                                            onChange={(e) => handleFilterChange('min_width', e.target.value ? parseInt(e.target.value) : undefined)}
                                        />
                                    </div>
                                    <span className="text-gray-400 mt-4">x</span>
                                    <div className="flex-1">
                                        <label className="block text-xs text-gray-500 mb-1">Height (px)</label>
                                        <input
                                            type="number"
                                            placeholder="H"
                                            className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
                                            value={filters.min_height || ''}
                                            onChange={(e) => handleFilterChange('min_height', e.target.value ? parseInt(e.target.value) : undefined)}
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => setActiveDropdown(null)}
                                    className="w-full bg-green-500 text-white text-sm font-medium py-1.5 rounded mt-2 hover:bg-green-600"
                                >
                                    Apply
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Color Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('color')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filters.colors ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                        }`}
                    >
                        Color
                        {filters.colors && (
                            <span className={`w-3 h-3 rounded-full inline-block ml-1 border border-gray-300 ${colors.find(c => c.name === filters.colors)?.color}`}></span>
                        )}
                        <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'color' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'color' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 p-3 z-50"
                            >
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => handleFilterChange('colors', undefined)}
                                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                                            !filters.colors ? 'border-green-500' : 'border-transparent hover:border-gray-300'
                                        }`}
                                        title="Any Color"
                                    >
                                        <span className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-green-500 to-blue-500 opacity-50"></span>
                                    </button>
                                    {colors.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => handleFilterChange('colors', c.name)}
                                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                                                filters.colors === c.name ? 'border-green-500' : 'border-transparent hover:border-gray-300'
                                            }`}
                                            title={c.name}
                                        >
                                            <span className={`w-6 h-6 rounded-full ${c.color}`}></span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sort Filter */}
                <div className="relative ml-auto">
                    <button
                        onClick={() => toggleDropdown('order')}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <span className="text-gray-400">Sort by:</span>
                        {filters.order === 'popular' ? 'Most Popular' : 'Latest'}
                        <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'order' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'order' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50"
                            >
                                {['popular', 'latest'].map((order) => (
                                    <button
                                        key={order}
                                        onClick={() => handleFilterChange('order', order)}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center ${
                                            filters.order === order ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-200'
                                        }`}
                                    >
                                        {order === 'popular' ? 'Most Popular' : 'Latest'}
                                        {filters.order === order && <FaCheck />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Clear Filters */}
                {(filters.image_type !== 'all' || filters.orientation !== 'all' || filters.colors || filters.min_width || filters.min_height || filters.order !== 'popular') && (
                    <button
                        onClick={() => setFilters({ image_type: 'all', orientation: 'all', order: 'popular' })}
                        className="text-sm text-red-500 hover:text-red-600 font-medium px-2"
                    >
                        Clear Filters
                    </button>
                )}
            </div>
        </div>
    );
};

export default FilterBar;