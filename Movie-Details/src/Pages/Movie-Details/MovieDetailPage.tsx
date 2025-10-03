import { useState } from "react";
import { useLoaderData } from "react-router";
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import type { MovieType } from "../../Services/MovieAPIServices";

export default function Movie_Detail_Page() {
  const movie: MovieType = useLoaderData();
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <div
      className="w-full text-white mt-15 relative bg-fixed bg-cover bg-center"

    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden">
          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-full object-cover object-center overflow-hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
            <h1 className="text-5xl font-bold mb-5 drop-shadow-xl">{movie.name}</h1>
            <div className="flex items-center gap-5 mb-6">
              <p className="flex items-center gap-2 text-yellow-400 text-lg font-bold drop-shadow">
                <FaStar /> {movie.rating} / 5
              </p>
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-base font-semibold shadow-lg">
                {movie.category.toUpperCase()}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-base font-semibold shadow-lg text-white border border-white/10">
                ₹{movie.price}
              </span>
            </div>

            <div className="flex gap-5">
              <button
                onClick={() => setTrailerOpen(true)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-xl transition-transform hover:scale-105"
              >
                <AiOutlinePlayCircle size={24} /> Watch Trailer
              </button>
              <button
                className="flex items-center gap-2 bg-black/60 hover:bg-black/80 px-6 py-3 rounded-xl text-lg font-semibold shadow-xl transition-transform hover:scale-105"
              >
                <AiOutlineHeart size={24} /> Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* Movie Info Section */}
        <div className="max-w-6xl mx-auto px-8 py-14 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:gap-12">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full md:w-1/3 rounded-xl shadow-2xl border-4 border-white/10"
            />
            <div className="flex-1 mt-8 md:mt-0 bg-gradient-to-br from-white/10 to-gray-900/30 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-5">About the Movie</h2>
              <p className="text-gray-100 text-lg mb-6 leading-relaxed">
                {movie.description || "No description available."}
              </p>
              <div className="flex flex-wrap gap-5 mb-5">
                <span className="px-4 py-2 bg-gray-900/60 rounded-full text-base font-medium border border-white/10">
                  Price: ${movie.price}
                </span>
                <span className="px-4 py-2 bg-gray-900/60 rounded-full text-base font-medium border border-white/10">
                  Rating: {movie.rating} / 5
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trailer Modal */}
        {trailerOpen && movie.trailer && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute top-5 right-5 z-50 text-white text-3xl hover:text-red-500 transition-colors"
              >
                <AiOutlineClose />
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={movie.trailer}
                  title={movie.name}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-md"
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
