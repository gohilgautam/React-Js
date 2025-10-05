import { useLoaderData, useNavigate } from "react-router";
import type { MovieType } from "../../Services/MovieAPIServices";
import { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineEye,
  AiOutlinePlayCircle,
} from "react-icons/ai";

export default function Home_Page() {
  const movieData: MovieType[] = useLoaderData();
  const navigate = useNavigate();

  const [allCategories, setAllCategories] = useState<string[]>(["All"]);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  useEffect(() => {
    const categories = Array.from(new Set(movieData.map((m) => m.category)));
    setAllCategories(["All", ...categories]);
  }, [movieData]);

  const filteredMovies =
    filterCategory === "All"
      ? movieData
      : movieData.filter((movie) => movie.category === filterCategory);

  const renderStars = (rating: number | string) => {
    const r = Number(rating);
    const fullStars = Math.floor(r);
    const halfStar = r - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(<AiFillStar key={i} className="text-yellow-400 drop-shadow-md" />);
    if (halfStar)
      stars.push(<AiTwotoneStar key="half" className="text-yellow-400 drop-shadow-md" />);
    while (stars.length < 5)
      stars.push(
        <AiOutlineStar key={"empty" + stars.length} className="text-gray-400" />
      );
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div
      className="min-h-screen w-full px-4 py-12 relative bg-cover bg-center bg-fixed font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Glass Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      {/* Category Filter */}
      <div className="relative max-w-6xl mx-auto mt-10 mb-10 flex flex-wrap justify-center gap-3 z-10">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 backdrop-blur-md border border-white/20 shadow-sm ${
              filterCategory === category
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
            }`}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="relative max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-10">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg shadow-black/40 transition-all duration-500 hover:scale-[1.05]"
          >
            {/* Movie Image */}
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black via-black/70 to-transparent">
              <div>
                <span className="bg-gradient-to-tr from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {movie.category?.toUpperCase() || "UNCATEGORIZED"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg line-clamp-1">
                  {movie.name}
                </h3>
                <p className="text-purple-300 font-medium">${movie.price}</p>
                <div className="flex items-center gap-2">
                  {renderStars(movie.rating)}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movie/${movie.id}`);
                    }}
                    className="flex-1 py-2 rounded-lg bg-white/90 text-gray-900 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <AiOutlineEye className="text-lg" />
                    View
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <AiOutlinePlayCircle className="text-lg" />
                    Trailer
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Fade Title */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3">
              <h3 className="text-white font-semibold text-sm md:text-base truncate">
                {movie.name}
              </h3>
            </div>
          </div>
        ))}

        {filteredMovies.length === 0 && (
          <p className="text-center text-gray-300 col-span-full py-10 text-lg font-semibold tracking-wide">
            🎬 No movies available in this category.
          </p>
        )}
      </div>
    </div>
  );
}
