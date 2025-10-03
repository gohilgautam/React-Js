import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import { movieAPIService } from "../../Services/MovieAPIServices";
import type { MovieType } from "../../Services/MovieAPIServices";
import { AiOutlineEye, AiOutlinePlayCircle, AiOutlineEdit, AiOutlineDelete, AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

export default function ViewMovie() {
  const movieData: MovieType[] = useLoaderData();
  const [allMovie, setAllMovie] = useState(movieData || []);
  const navigate = useNavigate();

  // Delete movie logic
  const deleteMovie = async (movie: MovieType) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `<p class="text-lg">You are about to delete <b style="color:#e63946;">"${movie.name}"</b></p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#4a90e2",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: { popup: "rounded-2xl shadow-2xl" },
    });

    if (result.isConfirmed) {
      if (await movieAPIService.deletemovie(movie.id.toString())) {
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
        Swal.fire({ icon: "error", title: "Oops...", text: "Deletion failed! Please try again." });
      }
    }
  };

  // Star rating render function
  const renderStars = (rating: number | string) => {
    const r = Number(rating);
    const fullStars = Math.floor(r);
    const halfStar = r - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push(<AiFillStar key={i} className="text-yellow-400" />);
    if (halfStar) stars.push(<AiTwotoneStar key="half" className="text-yellow-400" />);
    while (stars.length < 5) stars.push(<AiOutlineStar key={"empty" + stars.length} className="text-gray-400" />);

    return <div className="flex gap-1">{stars}</div>;
  };

  return (<div
    className="min-h-screen w-full px-6 py-16 mt-16 relative bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

    {/* Movie Grid */}
    <div className="relative max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-10">
      {allMovie.map((movie) => (
        <div
          key={movie.id}
          className="relative rounded-2xl overflow-hidden bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
        >
          {/* Movie Image & Badge */}
          <div className="relative w-full h-64 cursor-pointer group">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-full object-cover rounded-t-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow z-10">
              {movie.category ? movie.category.toUpperCase() : 'UNCATEGORIZED'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white drop-shadow">{movie.name}</h3>
              <p className="text-white font-semibold">${movie.price}</p>
              <div className="flex items-center gap-2">
                {renderStars(movie.rating)}
                <span className="text-gray-300 text-sm">{movie.rating}/5</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-200 text-gray-800 shadow-lg transition-transform hover:scale-110"
                  title="View Movie"
                >
                  <AiOutlineEye size={20} />
                </button>
                <button
                  onClick={() => movie.trailer}
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transition-transform hover:scale-110"
                  title="Watch Trailer"
                >
                  <AiOutlinePlayCircle size={20} />
                </button>
                <button
                  onClick={() => navigate(`/edit-movie/${movie.id}`)}
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-white shadow-lg transition-transform hover:scale-110"
                  title="Edit Movie"
                >
                  <AiOutlineEdit size={20} />
                </button>
                <button
                  onClick={() => deleteMovie(movie)}
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg transition-transform hover:scale-110"
                  title="Delete Movie"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="p-5 flex-1 flex flex-col bg-transparent">
            <p className="text-gray-100 text-sm mt-2 line-clamp-3 flex-1">
              {movie.description || "No description available."}
            </p>
          </div>
        </div>
      ))}

      {allMovie.length === 0 && (
        <p className="text-center text-gray-200 col-span-full py-10">
          No movies available
        </p>
      )}
    </div>
  </div>
  );
}
