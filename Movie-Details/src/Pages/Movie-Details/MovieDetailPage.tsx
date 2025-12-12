import { useState } from "react";
import { useLoaderData } from "react-router";
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import type { MovieType } from "../../Services/MovieAPIServices";

export default function Movie_Detail_Page() {
  const movie: MovieType = useLoaderData();
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.name}</h1>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-semibold">
                {movie.category.toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 font-bold">
                <FaStar /> {movie.rating}/5
              </span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setTrailerOpen(true)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <AiOutlinePlayCircle size={20} /> Watch Trailer
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
              <AiOutlineHeart size={20} /> Add to Favorites
            </button>
          </div>
        </div>

        {/* Main Content - Table Format */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Poster Column */}
            <div className="lg:col-span-1 p-6 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-gray-700">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full max-w-sm rounded-lg shadow-2xl mb-6"
              />
              <div className="text-center">
                <span className="text-3xl font-bold text-green-400">₹{movie.price}</span>
                <p className="text-gray-400 mt-1">Purchase Price</p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-2">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-700">Movie Details</h2>
                
                <div className="space-y-4">
                  {/* Movie Info Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-700">
                        <tr>
                          <td className="py-4 px-4 font-medium text-gray-300 w-1/3">Title</td>
                          <td className="py-4 px-4 font-semibold">{movie.name}</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-gray-300">Category</td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                              {movie.category}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-gray-300">Rating</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar 
                                    key={i}
                                    className={i < Math.floor(movie.rating) ? "text-yellow-400" : "text-gray-600"}
                                    size={16}
                                  />
                                ))}
                              </div>
                              <span className="font-bold">{movie.rating}/5</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-gray-300">Price</td>
                          <td className="py-4 px-4">
                            <span className="text-2xl font-bold text-green-400">₹{movie.price}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-gray-300">Status</td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                              Available
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Description Section */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-300 leading-relaxed bg-gray-900/50 p-4 rounded-lg">
                      {movie.description || "No description available for this movie."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-700">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-400 mb-2">Trailer Availability</h4>
              <p className="text-lg font-semibold">
                {movie.trailer ? (
                  <span className="text-green-400">Available</span>
                ) : (
                  <span className="text-red-400">Not Available</span>
                )}
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-400 mb-2">Content Type</h4>
              <p className="text-lg font-semibold">Movie</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-400 mb-2">Last Updated</h4>
              <p className="text-lg font-semibold">Recently Added</p>
            </div>
          </div>
        </div>

        {/* Trailer Modal */}
        {trailerOpen && movie.trailer && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500 transition-colors z-10"
              >
                <AiOutlineClose />
              </button>
              <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border-2 border-gray-700">
                <iframe
                  src={movie.trailer}
                  title={movie.name}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}