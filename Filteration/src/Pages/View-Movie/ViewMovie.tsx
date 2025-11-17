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

export default function ViewMovieTable() {
  const movieData: MovieType[] = useLoaderData();
  const [allMovie, setAllMovie] = useState<MovieType[]>(movieData || []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(0);
  const [maxAndMinPrice, setMaxaAndMinPrice] = useState<number[]>([0, 100]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (allMovie.length > 0) {
      const allPrices = allMovie.map((m) => Number(m.price) || 0);
      const max = Math.max(...allPrices);
      const min = Math.min(...allPrices);
      setMaxaAndMinPrice([min, max]);
      if (price === 0) setPrice(min);
    }
  }, [allMovie]);

  const deleteMovie = async (movie: MovieType) => {
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
            Category: <strong>${movie.category || "Uncategorized"}</strong><br/>
            Price: <strong>$${movie.price}</strong><br/>
            Rating: <strong>${movie.rating}/5</strong>
          </p>
          <p class="text-gray-400 text-xs text-center">
            ⚠️ This action <strong>cannot be undone</strong>.
          </p>
        </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        popup: `rounded-3xl p-8 shadow-2xl border border-gray-200`,
        confirmButton: `bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all`,
        cancelButton: `bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all`,
        htmlContainer: "text-center mt-2 flex flex-col items-center",
      },
    });

    if (firstResult.isConfirmed) {
      const secondResult = await Swal.fire({
        title: "Are you absolutely sure?",
        text: `Deleting "${movie.name}" cannot be undone!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Keep it",
        reverseButtons: true,
        customClass: {
          popup: `rounded-2xl p-6 shadow-xl`,
          confirmButton: `bg-red-600 text-white font-bold px-5 py-2 rounded-full hover:bg-red-700 transition-all`,
          cancelButton: `bg-gray-300 text-gray-900 font-bold px-5 py-2 rounded-full hover:bg-gray-400 transition-all`,
        },
      });

      if (secondResult.isConfirmed) {
        const success = await movieAPIService.deletemovie(movie.id.toString());
        if (success) {
          setAllMovie(await movieAPIService.fetchAllMovies());
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: `"${movie.name}" deleted successfully!`,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: "#f0fff4",
            color: "#2f855a",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Deletion failed! Please try again.",
            background: "#fff5f5",
            color: "#c53030",
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
    setTrailerUrl(url);
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
      const matchesPrice = Number(movie.price) >= price;
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
    <div className="min-h-screen w-full px-6 py-8 relative bg-fixed bg-cover bg-center" style={{
      backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')"
    }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Filters */}
        <div className="bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-lg border border-white/30 p-5 rounded-2xl mb-6 mt-10 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="🔍 Search by name, ID, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:flex-1 px-4 py-2 rounded-full bg-white/70 text-gray-800 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-full bg-white/70 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            <option value="all">🎬 All Categories</option>
            {[...new Set(allMovie.map((m) => m.category))].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-full bg-white/70 text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            <option value="az">🔼 Name A → Z</option>
            <option value="za">🔽 Name Z → A</option>
            <option value="high">⭐ Highest Rated</option>
            <option value="low">⭐ Lowest Rated</option>
          </select>

          <div className="flex items-center gap-3">
            <label className="text-sm text-white/90">Min Price: <span className="text-purple-300">${price}</span></label>
            <input
              type="range"
              min={maxAndMinPrice[0] ?? 0}
              max={maxAndMinPrice[1] ?? 100}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-40 accent-purple-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl bg-white/5 ring-1 ring-white/20 backdrop-blur-md">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/6">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Poster</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-white/6">
              {filteredMovies.map((movie) => (
                <tr key={movie.id} className="hover:bg-white/2 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-20 h-12 rounded-lg overflow-hidden shadow-sm">
                      <img src={movie.image} alt={movie.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="text-sm font-semibold text-gray-100">{movie.name}</div>
                    <div className="text-xs text-gray-400 line-clamp-2">{movie.description || "No description"}</div>
                    <div className="text-xs text-gray-500 mt-1">ID: {movie.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                    {movie.category || "Uncategorized"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-purple-300">
                    ${movie.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex flex-col items-center">
                      {renderStars(movie.rating)}
                      <span className="text-xs text-gray-300 mt-1">{movie.rating}/10</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        title="View"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                      >
                        <AiOutlineEye size={18} className="text-white" />
                      </button>

                      <button
                        onClick={() => playTrailer(movie.trailer)}
                        title="Trailer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                      >
                        <AiOutlinePlayCircle size={18} className="text-pink-400" />
                      </button>

                      <button
                        onClick={() => navigate(`/edit-movie/${movie.id}`)}
                        title="Edit"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                      >
                        <AiOutlineEdit size={18} className="text-yellow-300" />
                      </button>

                      <button
                        onClick={() => deleteMovie(movie)}
                        title="Delete"
                        className="p-2 rounded-full bg-red-600/80 hover:bg-red-700 transition text-white"
                      >
                        <AiOutlineDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredMovies.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-300 font-semibold">
                    No movies available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trailer Modal */}
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
