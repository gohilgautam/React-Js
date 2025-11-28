import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchImageById } from '../Services/Api-Services';
import { FaArrowLeft, FaHeart, FaComment, FaEye, FaDownload, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await fetchImageById(id);
        setImage(data);
      } catch (error) {
        console.error('Failed to load image details', error);
      } finally {
        setLoading(false);
      }
    };
    loadImage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  if (!image) {
    return <div className="text-center py-20">Image not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-500 mb-6 transition-colors">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={image.largeImageURL}
                alt={image.tags}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="lg:w-1/3 p-8">
              <div className="flex items-center gap-4 mb-6">
                {image.userImageURL ? (
                  <img src={image.userImageURL} alt={image.user} className="w-12 h-12 rounded-full" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <FaUser className="text-gray-500" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{image.user}</h3>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
                <button className="ml-auto px-4 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Follow
                </button>
              </div>

              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
                  <FaDownload /> Free Download
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <FaEye className="text-gray-400" />
                  <span>{image.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-400" />
                  <span>{image.likes.toLocaleString()} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-400" />
                  <span>{image.comments.toLocaleString()} comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDownload className="text-green-400" />
                  <span>{image.downloads.toLocaleString()} downloads</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {image.tags.split(', ').map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;