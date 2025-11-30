import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchImageById } from '../Services/Api-Services';
import { FaArrowLeft, FaHeart, FaComment, FaEye, FaDownload, FaUser, FaShareAlt, FaInfoCircle, FaCheck } from 'react-icons/fa';
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-green-200"></div>
      </div>
    );
  }

  if (!image) {
    return <div className="text-center py-20 text-gray-500 text-lg">Image not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header Section: User Info & Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
              <FaArrowLeft className="text-xl" />
            </Link>
            <div className="flex items-center gap-3">
              {image.userImageURL ? (
                <img src={image.userImageURL} alt={image.user} className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <FaUser className="text-gray-400" />
                </div>
              )}
              <div>
                <h3 className="text-base font-semibold text-gray-800 dark:text-white leading-tight">{image.user}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{image.followers || 0} followers</p>
              </div>
              <button className="ml-2 px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                Follow
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button className="p-2.5 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" title="Like">
              <FaHeart className="text-lg" />
            </button>
            <button className="p-2.5 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" title="Share">
              <FaShareAlt className="text-lg" />
            </button>
            <button className="flex-1 md:flex-none bg-green-500 hover:bg-green-600 text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-green-500/30 transition-all transform active:scale-95 flex items-center justify-center gap-2">
              <FaDownload /> Download
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Image Display */}
          <div className="lg:w-3/4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center min-h-[400px] max-h-[70vh] relative group">
              {/* Subtle pattern background could go here */}
              <motion.img
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={image.largeImageURL}
                alt={image.tags}
                className="max-w-full max-h-full object-contain shadow-sm"
              />
            </div>

            {/* Tags Section */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3 tracking-wider">Related Tags</h4>
              <div className="flex flex-wrap gap-2">
                {image.tags.split(', ').map((tag: string) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Details */}
          <div className="lg:w-1/4 space-y-6">

            {/* License Info */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-2">
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Free for commercial use</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">No attribution required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">High quality images</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Properties</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                <div className="text-gray-500 dark:text-gray-400">Views</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 text-right">{image.views.toLocaleString()}</div>

                <div className="text-gray-500 dark:text-gray-400">Downloads</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 text-right">{image.downloads.toLocaleString()}</div>

                <div className="text-gray-500 dark:text-gray-400">Likes</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 text-right">{image.likes.toLocaleString()}</div>

                <div className="text-gray-500 dark:text-gray-400">Comments</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 text-right">{image.comments.toLocaleString()}</div>

                <div className="text-gray-500 dark:text-gray-400">Format</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 text-right">JPG</div>
              </div>
            </div>

            {/* Action Buttons (Secondary) */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <button className="w-full py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                <FaInfoCircle /> Report Image
              </button>
            </div>

          </div>
        </div>

        {/* Related Images Placeholder */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">You might also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video animate-pulse"></div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">Related images feature coming soon...</p>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;