import { useLoaderData, useNavigate } from "react-router";
import type { MovieType } from "../../Services/MovieAPIServices";

export default function Home_Page() {
  const movieData: MovieType[] = useLoaderData();
  const navigate = useNavigate();

  return (
   <div
  className="min-h-screen w-full px-4 p-10 mt-15 bg-cover bg-center bg-no-repeat bg-fixed relative"
  style={{
    backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {movieData.map((movie) => (
      <div
        key={movie.id}
        className="relative cursor-pointer rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
          <h3 className="text-white font-semibold text-sm md:text-base truncate">
            {movie.name}
          </h3>
        </div>
      </div>
    ))}

    {movieData.length === 0 && (
      <p className="text-center text-gray-200 col-span-full py-10">
        No movies available
      </p>
    )}
  </div>
</div>



  );
}
