import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Components/Hero';
import ImageGrid from '../Components/ImageGrid';
import FilterBar from '../Components/FilterBar';
import Footer from '../Components/Footer';
import { fetchImages } from '../Services/Api-Services';

const Homepage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    image_type: 'all',
    orientation: 'all',
    min_width: undefined,
    min_height: undefined,
    colors: undefined,
    order: 'popular',
  });

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

  useEffect(() => {
    loadImages('', 1, filters, true);
  }, []);

  useEffect(() => {
    setPage(1);
    loadImages(query, 1, filters, true);
  }, [filters]);

  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Hero onSearch={handleSearch} />

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {query ? `Results for "${query}"` : 'Editor\'s Choice'}
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
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;