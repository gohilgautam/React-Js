import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import type { MovieType } from "../../Services/MovieAPIServices";

export default function Movie_Detail_Page() {
  const movie: MovieType = useLoaderData();
  const navigate = useNavigate();
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite(!favorite);
  const handleBookNow = () => navigate(`/book/${movie.id}`);

  return (
    <div
      className="w-full text-white relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[75vh] w-full rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.7)] group">
          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:translate-y-1">
              {movie.name}
            </h1>
            <div className="flex flex-wrap items-center gap-5 mb-6">
              <p className="flex items-center gap-2 text-yellow-400 text-lg font-bold drop-shadow-lg">
                <FaStar className="animate-pulse" /> {movie.rating} / 5
              </p>
              <span className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-base font-semibold shadow-lg animate-pulse">
                {movie.category.toUpperCase()}
              </span>
              <span className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-base font-semibold shadow-lg border border-white/10">
                ${movie.price}
              </span>
            </div>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => setTrailerOpen(true)}
                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-3xl text-lg font-bold shadow-lg hover:shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <AiOutlinePlayCircle size={28} className="animate-pulse" /> Watch Trailer
              </button>

              <button
                onClick={toggleFavorite}
                className={`flex items-center gap-3 px-8 py-4 rounded-3xl text-lg font-bold shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                  favorite ? "bg-pink-600 hover:bg-pink-700" : "bg-black/50 hover:bg-black/80"
                }`}
              >
                <AiOutlineHeart size={28} className={`${favorite ? "animate-ping" : "transition-all"}`} />
                {favorite ? "Added to Favorites" : "Add to Favorites"}
              </button>

              <button
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-3xl text-lg font-bold shadow-lg hover:shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                🎟 Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Movie Info Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-14 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:gap-14">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full md:w-1/3 rounded-3xl shadow-2xl border-4 border-white/20 transform transition-transform duration-500 hover:scale-105"
            />
            <div className="flex-1 mt-10 md:mt-0 bg-gradient-to-br from-white/5 to-gray-900/30 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/30 hover:shadow-purple-600/50 transition-shadow duration-700">
              <h2 className="text-4xl font-extrabold mb-5 text-purple-300">About the Movie</h2>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed tracking-wide">{movie.description || "No description available."}</p>
              <div className="flex flex-wrap gap-6 mt-6">
                <span className="px-6 py-3 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full text-base font-semibold shadow-lg">
                  Price: ${movie.price}
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full text-base font-semibold shadow-lg text-black">
                  Rating: {movie.rating} / 5
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer Modal */}
        {trailerOpen && movie.trailer && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate__animated animate__fadeIn">
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-3xl border-2 border-white/25 animate__animated animate__zoomIn">
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute top-6 right-6 z-50 text-white text-4xl hover:text-red-600 transition-colors"
                aria-label="Close Trailer"
              >
                <AiOutlineClose />
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={movie.trailer}
                  title={movie.name}
                  className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-xl"
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
