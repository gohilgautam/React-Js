import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaChevronDown, FaCheck, FaTimesCircle, FaTh, FaArrowsAltV, FaRulerCombined, FaPalette } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Refined Color Palette and data structure
const colors = [
    { name: 'grayscale', label: 'Grayscale', color: 'bg-gray-400' },
    { name: 'transparent', label: 'Transparent', color: 'bg-white border-dashed border-gray-300' },
    { name: 'red', label: 'Red', color: 'bg-red-600' },
    { name: 'orange', label: 'Orange', color: 'bg-orange-500' },
    { name: 'yellow', label: 'Yellow', color: 'bg-yellow-400' },
    { name: 'green', label: 'Green', color: 'bg-green-600' },
    { name: 'turquoise', label: 'Turquoise', color: 'bg-teal-500' },
    { name: 'blue', label: 'Blue', color: 'bg-blue-600' },
    { name: 'lilac', label: 'Lilac', color: 'bg-purple-500' },
    { name: 'pink', label: 'Pink', color: 'bg-pink-500' },
    { name: 'white', label: 'White', color: 'bg-white border border-gray-200' },
    { name: 'gray', label: 'Gray', color: 'bg-gray-500' },
    { name: 'black', label: 'Black', color: 'bg-black' },
    { name: 'brown', label: 'Brown', color: 'bg-amber-800' },
];

interface FilterBarProps {
    filters: any;
    setFilters: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
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

    const handleFilterChange = useCallback((key: string, value: any) => {
        setFilters((prevFilters: any) => ({ ...prevFilters, [key]: value }));
        // Only close the dropdown if it's a single-click selection (not size inputs)
        if (key !== 'min_width' && key !== 'min_height') {
            setActiveDropdown(null);
        }
    }, [setFilters]);

    const handleClearAllFilters = () => {
        setFilters({ image_type: 'all', orientation: 'all', order: 'popular' });
        setActiveDropdown(null);
    };

    const isFilterActive = filters.image_type !== 'all' || filters.orientation !== 'all' || filters.colors || filters.min_width || filters.min_height || filters.order !== 'popular';

    // Helper function for dropdown button styling
    const getButtonClasses = (key: string, defaultValue: any) => {
        const isActive = key === 'size'
            ? (filters.min_width || filters.min_height)
            : (filters[key] && filters[key] !== defaultValue);

        // Professional chip style: Pill-shaped, subtle border when inactive, prominent green when active.
        return `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
            ? 'bg-green-50 border border-green-500 text-green-700 dark:bg-green-900/30 dark:border-green-500 dark:text-green-400'
            : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
            }`;
    };

    // Helper to render the display name for selected colors
    const getSelectedColorLabel = () => {
        if (!filters.colors) return 'Color';
        const color = colors.find(c => c.name === filters.colors);
        return color ? color.label : 'Color';
    }

    // Helper to render the display name for image type
    const getImageTypeLabel = () => {
        if (filters.image_type === 'all') return 'Image Type';
        return filters.image_type.charAt(0).toUpperCase() + filters.image_type.slice(1);
    }

    // Helper to render the display name for orientation
    const getOrientationLabel = () => {
        if (filters.orientation === 'all') return 'Orientation';
        return filters.orientation.charAt(0).toUpperCase() + filters.orientation.slice(1);
    }

    // Dropdown animation variants
    const dropdownVariants = {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.95 }
    };

    return (
        // Added backdrop-blur for a professional, floating sticky effect
        <div className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md border-b border-gray-100 dark:border-gray-800 py-3 transition-all duration-300" ref={dropdownRef}>
            <div className="container mx-auto px-4 flex flex-wrap items-center gap-3">

                {/* Clear Filters Button (Uses a minimal chip style) */}
                {isFilterActive && (
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        onClick={handleClearAllFilters}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-red-500 border border-red-300 bg-red-50 hover:bg-red-100 dark:bg-gray-800 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-gray-700 transition-colors"
                        title="Clear all active filters"
                    >
                        <FaTimesCircle className="text-sm" />
                        Clear All
                    </motion.button>
                )}

                {/* Image Type Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('image_type')}
                        className={getButtonClasses('image_type', 'all')}
                    >
                        {/* Icon color now inherits button color (green when active, gray when default) */}
                        <FaTh className="text-base" />
                        {getImageTypeLabel()}
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'image_type' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'image_type' && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-50 overflow-hidden"
                            >
                                {['all', 'photo', 'illustration', 'vector'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleFilterChange('image_type', type)}
                                        className={`w-full text-left px-5 py-3 text-sm transition-all flex justify-between items-center group ${filters.image_type === type
                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                            }`}
                                    >
                                        {type === 'all' ? 'Any Type' : type.charAt(0).toUpperCase() + type.slice(1)}
                                        {filters.image_type === type && <FaCheck className="text-xs text-green-600 dark:text-green-400" />}
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
                        className={getButtonClasses('orientation', 'all')}
                    >
                        <FaArrowsAltV className="text-base" />
                        {getOrientationLabel()}
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'orientation' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'orientation' && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-50 overflow-hidden"
                            >
                                {['all', 'horizontal', 'vertical'].map((orient) => (
                                    <button
                                        key={orient}
                                        onClick={() => handleFilterChange('orientation', orient)}
                                        className={`w-full text-left px-5 py-3 text-sm transition-all flex justify-between items-center group ${filters.orientation === orient
                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                            }`}
                                    >
                                        {orient === 'all' ? 'Any Orientation' : orient.charAt(0).toUpperCase() + orient.slice(1)}
                                        {filters.orientation === orient && <FaCheck className="text-xs text-green-600 dark:text-green-400" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Color Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('color')}
                        className={getButtonClasses('colors', undefined)}
                    >
                        <FaPalette className="text-base" />
                        {getSelectedColorLabel()}
                        {filters.colors && (
                            // Larger, more visible color chip when active
                            <span className={`w-3.5 h-3.5 rounded-full inline-block ml-1 border-2 ${filters.colors === 'white' || filters.colors === 'transparent' ? 'border-gray-400' : 'border-white/50'} ${colors.find(c => c.name === filters.colors)?.color}`}></span>
                        )}
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'color' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'color' && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-5 z-50"
                            >
                                <div className="flex flex-wrap gap-3 justify-start">
                                    {/* Any Color option with Gradient Ring */}
                                    <button
                                        onClick={() => handleFilterChange('colors', undefined)}
                                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all relative ${!filters.colors ? 'border-green-500 scale-105 ring-2 ring-green-500/20' : 'border-gray-200 dark:border-gray-600 hover:border-green-400'
                                            }`}
                                        title="Any Color"
                                    >
                                        <span className="w-full h-full rounded-full bg-gradient-to-br from-red-400 via-green-400 to-blue-400 opacity-80"></span>
                                        {!filters.colors && <FaCheck className="absolute text-white text-xs drop-shadow-md" />}
                                    </button>
                                    {/* Specific Colors */}
                                    {colors.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => handleFilterChange('colors', c.name)}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all relative ${filters.colors === c.name ? 'border-green-500 scale-105 ring-2 ring-green-500/20' : 'border-gray-200 dark:border-gray-600 hover:border-green-400'
                                                }`}
                                            title={c.label}
                                        >
                                            <span className={`w-7 h-7 rounded-full ${c.color} shadow-inner`}></span>
                                            {filters.colors === c.name && <FaCheck className={`absolute text-xs drop-shadow-md ${c.name === 'white' || c.name === 'transparent' ? 'text-gray-600' : 'text-white'}`} />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                {/* Size Filter */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('size')}
                        className={getButtonClasses('size', undefined)}
                    >
                        <FaRulerCombined className="text-base" />
                        {filters.min_width || filters.min_height ? 'Min Size Set' : 'Size'}
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'size' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'size' && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 p-5 z-50"
                            >
                                <div className="flex gap-4 items-center mb-5">
                                    <div className="flex-1">
                                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">Width</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                placeholder="0"
                                                className="w-full pl-3 pr-8 py-2.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all"
                                                value={filters.min_width || ''}
                                                onChange={(e) => handleFilterChange('min_width', e.target.value ? parseInt(e.target.value) : undefined)}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">px</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-300 mt-6 font-light text-xl">×</span>
                                    <div className="flex-1">
                                        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">Height</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                placeholder="0"
                                                className="w-full pl-3 pr-8 py-2.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all"
                                                value={filters.min_height || ''}
                                                onChange={(e) => handleFilterChange('min_height', e.target.value ? parseInt(e.target.value) : undefined)}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">px</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => {
                                            handleFilterChange('min_width', undefined);
                                            handleFilterChange('min_height', undefined);
                                        }}
                                        disabled={!filters.min_width && !filters.min_height}
                                        className="flex-1 bg-gray-100 text-gray-600 text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Clear
                                    </button>
                                    <button
                                        onClick={() => setActiveDropdown(null)}
                                        className="flex-1 bg-green-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-95"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sort Filter (Kept on the right, clean design) */}
                <div className="relative ml-auto">
                    <button
                        onClick={() => toggleDropdown('order')}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
                    >
                        <span className="text-gray-500 dark:text-gray-400">Sort by</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                            {filters.order === 'popular' ? 'Popular' : 'Latest'}
                        </span>
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === 'order' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeDropdown === 'order' && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-50 overflow-hidden"
                            >
                                {['popular', 'latest'].map((order) => (
                                    <button
                                        key={order}
                                        onClick={() => handleFilterChange('order', order)}
                                        className={`w-full text-left px-5 py-3 text-sm transition-all flex justify-between items-center group ${filters.order === order
                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                            }`}
                                    >
                                        {order === 'popular' ? 'Popular' : 'Latest'}
                                        {filters.order === order && <FaCheck className="text-xs text-green-600 dark:text-green-400" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;