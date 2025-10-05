import { useLoaderData, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { movieAPIService } from "../../Services/MovieAPIServices";
import type { MovieType } from "../../Services/MovieAPIServices";
import {
  AiOutlineEye,
  AiOutlinePlayCircle,
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";

export default function ViewMovie() {
  const movieData: MovieType[] = useLoaderData();
  const [allMovie, setAllMovie] = useState(movieData || []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [maxAndMinPrice, setMaxaAndMinPrice] = useState<number[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (allMovie.length > 0) {
      const allPrices = allMovie.map((m) => m.price);
      const max = Math.max(...allPrices);
      const min = Math.min(...allPrices);
      setMaxaAndMinPrice([min, max]);
    }
  }, [allMovie]);

  const deleteMovie = async (movie: MovieType) => {
  // First alert with details and Delete button
  const firstResult = await Swal.fire({
    title: `<span class="text-2xl font-bold text-gray-900">⚠️ Confirm Deletion</span>`,
    html: `
      <div class="flex flex-col items-center mt-4 gap-4">
        <img 
          src="${movie.image}" 
          alt="${movie.name}" 
          class="w-32 h-32 object-cover rounded-xl shadow-lg"
        />
        <p class="text-gray-700 text-base text-center">
          You are about to delete <strong class="text-red-600">${movie.name}</strong>.
        </p>
        <p class="text-gray-500 text-sm text-center">
          Category: <strong>${movie.category || 'Uncategorized'}</strong><br/>
          Price: <strong>$${movie.price}</strong><br/>
          Rating: <strong>${movie.rating}/5</strong>
        </p>
        <p class="text-gray-400 text-xs text-center">
          ⚠️ This action <strong>cannot be undone</strong>.
        </p>
      </div>
    `,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    customClass: {
      popup: `rounded-3xl p-8 shadow-2xl border border-gray-200`,
      confirmButton: `bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all`,
      cancelButton: `bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all`,
      htmlContainer: 'text-center mt-2 flex flex-col items-center',
    },
  });

  if (firstResult.isConfirmed) {
    // Second confirmation (Yes / No)
    const secondResult = await Swal.fire({
      title: 'Are you absolutely sure?',
      text: `Deleting "${movie.name}" cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, Keep it',
      reverseButtons: true,
      customClass: {
        popup: `rounded-2xl p-6 shadow-xl`,
        confirmButton: `bg-red-600 text-white font-bold px-5 py-2 rounded-full hover:bg-red-700 transition-all`,
        cancelButton: `bg-gray-300 text-gray-900 font-bold px-5 py-2 rounded-full hover:bg-gray-400 transition-all`,
      },
    });

    if (secondResult.isConfirmed) {
      // Actual deletion
      const success = await movieAPIService.deletemovie(movie.id.toString());
      if (success) {
        setAllMovie(await movieAPIService.fetchAllMovies());
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: `"${movie.name}" deleted successfully!`,
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          background: '#f0fff4',
          color: '#2f855a',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Deletion failed! Please try again.',
          background: '#fff5f5',
          color: '#c53030',
        });
      }
    }
  }
};





  const playTrailer = (url?: string) => {
    if (!url) {
      Swal.fire({ icon: "info", title: "No trailer available" });
      return;
    }
    setTrailerUrl(url); // show modal instead of opening new tab
  };

  const closeTrailer = () => setTrailerUrl(null);

  const renderStars = (rating: number | string) => {
    const r = Number(rating);
    const fullStars = Math.floor(r);
    const halfStar = r - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(<AiFillStar key={i} className="text-yellow-400 animate-pulse" />);
    if (halfStar)
      stars.push(<AiTwotoneStar key="half" className="text-yellow-400 animate-pulse" />);
    while (stars.length < 5)
      stars.push(<AiOutlineStar key={"empty" + stars.length} className="text-gray-400" />);
    return <div className="flex gap-1">{stars}</div>;
  };

  const filteredMovies = allMovie
    .filter((movie) => {
      const matchesSearch =
        movie.name.toLowerCase().includes(search.toLowerCase()) ||
        movie.category.toLowerCase().includes(search.toLowerCase()) ||
        movie.id.toString().includes(search);
      const matchesCategory = category === "all" || movie.category === category;
      const matchesPrice = movie.price >= price;
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      if (sort === "za") return b.name.localeCompare(a.name);
      if (sort === "high") return b.rating - a.rating;
      if (sort === "low") return a.rating - b.rating;
      return 0;
    });

  return (
    <div
      className="min-h-screen w-full px-6 py-12 relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Filter Section */}
      <div className="relative max-w-7xl mx-auto mb-12 z-10">
        <div className="bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-lg border border-white/30 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center">
          <input
            type="text"
            placeholder="🔍 Search by name, ID, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:flex-1 px-6 py-3 rounded-full bg-white/70 text-gray-800 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-6 py-3 rounded-full bg-white/70 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            <option value="all">🎬 All Categories</option>
            {[...new Set(allMovie.map((m) => m.category))].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-6 py-3 rounded-full bg-white/70 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            <option value="az">🔼 Name A → Z</option>
            <option value="za">🔽 Name Z → A</option>
            <option value="high">⭐ Highest Rated</option>
            <option value="low">⭐ Lowest Rated</option>
          </select>
          <div className="flex flex-col items-center w-full md:w-auto">
            <label className="text-xs text-white font-medium mb-2 opacity-80">
              Min Price: <span className="text-purple-300">${price}</span>
            </label>
            <input
              type="range"
              min={maxAndMinPrice[0]}
              max={maxAndMinPrice[1]}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-48 accent-purple-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="relative max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/10 shadow-xl ring-1 ring-white/30 backdrop-blur-2xl transition-transform duration-500 transform hover:scale-105 hover:ring-4 hover:ring-purple-400/70 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Movie Image & Buttons */}
            <div className="relative w-full h-60">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-gradient-to-tr from-[#8338ec]/70 to-[#ff006e]/90 text-white text-xs font-bold px-5 py-1 rounded-full shadow-lg">
                {movie.category?.toUpperCase() || "UNCATEGORIZED"}
              </span>
              {/* Action Buttons */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  aria-label="View Movie"
                  title="View Movie"
                  className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/60 hover:bg-purple-300 shadow-lg hover:shadow-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer flex justify-center items-center"
                >
                  <AiOutlineEye size={22} className="text-gray-800" />
                </button>
                <button
                  onClick={() => playTrailer(movie.trailer)}
                  aria-label="Watch Trailer"
                  title="Watch Trailer"
                  className="w-10 h-10 rounded-full backdrop-blur-lg bg-white/60 hover:bg-pink-300 shadow-lg hover:shadow-pink-400 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 cursor-pointer flex justify-center items-center"
                >
                  <AiOutlinePlayCircle size={22} className="text-pink-600" />
                </button>
                <button
                  onClick={() => navigate(`/edit-movie/${movie.id}`)}
                  aria-label="Edit Movie"
                  title="Edit Movie"
                  className="w-10 h-10 rounded-full backdrop-blur-lg bg-yellow-300/80 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 cursor-pointer text-white flex justify-center items-center"
                >
                  <AiOutlineEdit size={22} />
                </button>
                <button
                  onClick={() => deleteMovie(movie)}
                  aria-label="Delete Movie"
                  title="Delete Movie"
                  className="w-10 h-10 rounded-full backdrop-blur-lg bg-red-600/80 hover:bg-red-700 shadow-lg hover:shadow-red-600 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer text-white flex justify-center items-center"
                >
                  <AiOutlineDelete size={22} />
                </button>
              </div>
            </div>
            {/* Description & Ratings */}
            <div className="flex-1 flex flex-col p-5 gap-4 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-b-3xl">
              <p className="text-gray-200 text-[15px] mt-1 line-clamp-3">
                {movie.description || "No description available."}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1">{renderStars(movie.rating)}</div>
                <span className="text-purple-300 text-md font-semibold">{movie.rating}/10</span>
              </div>
            </div>
          </div>
        ))}
        {filteredMovies.length === 0 && (
          <p className="text-center text-gray-300 col-span-full py-12 font-semibold text-xl">No movies available</p>
        )}
      </div>

      {/* Trailer Modal with smooth fade-in */}
      {trailerUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-500">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <button
              onClick={closeTrailer}
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors z-50"
            >
              ✕
            </button>
            <iframe src={trailerUrl} title="Trailer" className="w-full h-full" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
