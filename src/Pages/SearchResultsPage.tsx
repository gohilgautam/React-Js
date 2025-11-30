import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ImageGrid from '../Components/ImageGrid';
import FilterBar from '../Components/FilterBar';
import Footer from '../Components/Footer';
import { fetchImages } from '../Services/Api-Services';
import { FaSearch } from 'react-icons/fa';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialQuery = searchParams.get('q') || '';

    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(initialQuery);
    const [searchInput, setSearchInput] = useState(initialQuery);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        image_type: 'all',
        orientation: 'all',
        min_width: undefined,
        min_height: undefined,
        colors: undefined,
        order: 'popular',
    });

    // Update query state when URL param changes
    useEffect(() => {
        const q = searchParams.get('q') || '';
        setQuery(q);
        setSearchInput(q);
    }, [searchParams]);

    const loadImages = async (searchQuery: string, pageNum: number, currentFilters: any, reset: boolean = false) => {
        setLoading(true);
        try {
            const data = await fetchImages(searchQuery, pageNum, currentFilters);
            if (reset) {
                setImages(data.hits);
            } else {
                setImages((prev: any) => [...prev, ...data.hits]);
            }
        } catch (error) {
            console.error('Failed to load images', error);
        } finally {
            setLoading(false);
        }
    };

    // Initial load and when query/filters change
    useEffect(() => {
        setPage(1);
        loadImages(query, 1, filters, true);
    }, [query, filters]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchInput)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            {/* Compact Search Header */}
            <div className="bg-white dark:bg-gray-900 shadow-sm pt-24 pb-4 px-4">
                <div className="container mx-auto">
                    <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative">
                        <div className="relative flex items-center bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden px-2 py-2 focus-within:ring-2 ring-green-500/50 transition-all">
                            <input
                                type="text"
                                placeholder="Search for images..."
                                className="w-full px-4 py-1 bg-transparent text-gray-700 dark:text-gray-200 outline-none"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full transition-colors"
                                title="Search"
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <FilterBar filters={filters} setFilters={setFilters} />

            <div className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {query ? `Results for "${query}"` : 'Popular Images'}
                    </h2>
                </div>

                <ImageGrid images={images} loading={loading} />

                {images.length > 0 && !loading && (
                    <div className="flex justify-center mt-8 mb-12">
                        <button
                            onClick={() => {
                                const nextPage = page + 1;
                                setPage(nextPage);
                                loadImages(query, nextPage, filters);
                            }}
                            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {images.length === 0 && !loading && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 dark:text-gray-400">No images found for "{query}". Try a different search term.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default SearchResultsPage;
