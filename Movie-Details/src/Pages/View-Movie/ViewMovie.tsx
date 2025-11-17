import { useLoaderData, useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
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

// Simple Modal component (kept inside file for convenience)
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: any }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-white/95 rounded-2xl shadow-2xl w-full max-w-2xl p-6">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600">✕</button>
        {children}
      </div>
    </div>
  );
}

export default function ViewMovieTable() {
  const movieData: MovieType[] = useLoaderData();
  const [allMovie, setAllMovie] = useState<MovieType[]>(movieData || []);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<{ key: string; dir: "asc" | "desc" } | null>(null);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [selectAll, setSelectAll] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [editing, setEditing] = useState<MovieType | null>(null);
  const [showBulkConfirm, setShowBulkConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAllMovie(movieData || []);
  }, [movieData]);

  const refreshMovies = async () => {
    const movies = await movieAPIService.fetchAllMovies();
    setAllMovie(movies || []);
  };

  // Delete movie logic
  const deleteMovie = async (movie: MovieType) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      html: `<p class=\"text-lg\">You are about to delete <b style=\"color:#e63946;\">\"${movie.name}\"</b></p>`,
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
        await refreshMovies();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `\"${movie.name}\" deleted successfully!`,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: "Deletion failed! Please try again." });
      }
    }
  };

  // Bulk delete
  const bulkDelete = async () => {
    const ids = Object.keys(selected).filter((k) => selected[k]);
    if (ids.length === 0) return;
    setShowBulkConfirm(false);
    const result = await Swal.fire({
      title: `Delete ${ids.length} selected movies?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      confirmButtonColor: "#e63946",
    });
    if (result.isConfirmed) {
      // attempt delete one by one
      for (const id of ids) {
        await movieAPIService.deletemovie(id);
      }
      await refreshMovies();
      setSelected({});
      setSelectAll(false);
      Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Deleted ${ids.length} items`, showConfirmButton: false, timer: 1800 });
    }
  };

  // Star rendering
  const renderStars = (rating: number | string) => {
    const r = Number(rating) || 0;
    const fullStars = Math.floor(r);
    const halfStar = r - fullStars >= 0.5;
    const stars: JSX.Element[] = [];

    for (let i = 0; i < fullStars; i++) stars.push(<AiFillStar key={`full-${i}`} className="text-yellow-400" />);
    if (halfStar) stars.push(<AiTwotoneStar key={`half`} className="text-yellow-400" />);
    while (stars.length < 5) stars.push(<AiOutlineStar key={`empty-${stars.length}`} className="text-gray-400" />);

    return <div className="flex gap-1 items-center">{stars}</div>;
  };

  const filtered = useMemo(() => {
    let list = allMovie.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (m) =>
          (m.name || "").toLowerCase().includes(q) ||
          (m.category || "").toLowerCase().includes(q) ||
          (m.description || "").toLowerCase().includes(q)
      );
    }

    if (sortKey) {
      list.sort((a: any, b: any) => {
        const av = a[sortKey.key] ?? "";
        const bv = b[sortKey.key] ?? "";
        if (typeof av === "number" && typeof bv === "number") {
          return sortKey.dir === "asc" ? av - bv : bv - av;
        }
        return sortKey.dir === "asc"
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av));
      });
    }

    return list;
  }, [allMovie, query, sortKey]);

  // show all items (pagination removed)
  const pageItems = filtered;

  const toggleSort = (key: string) => {
    if (!sortKey || sortKey.key !== key) setSortKey({ key, dir: "asc" });
    else setSortKey({ key, dir: sortKey.dir === "asc" ? "desc" : "asc" });
  };

  // selection helpers
  const toggleSelect = (id: string) => {
    setSelected((s) => ({ ...s, [id]: !s[id] }));
  };

  const toggleSelectAll = () => {
    const newVal = !selectAll;
    setSelectAll(newVal);
    const map: Record<string, boolean> = {};
    pageItems.forEach((m) => (map[m.id] = newVal));
    setSelected((prev) => ({ ...prev, ...map }));
  };

  // quick edit (inline modal)
  const saveEdit = async (updated: MovieType) => {
    // assume movieAPIService.updateMovie exists
    if (movieAPIService.updateMovie) {
      await movieAPIService.updateMovie(updated.id.toString(), updated);
      await refreshMovies();
      setEditing(null);
      Swal.fire({ toast: true, position: "top-end", icon: "success", title: `Updated ${updated.name}`, showConfirmButton: false, timer: 1400 });
    }
  };

  return (
    <div className="min-h-screen w-full px-6 py-12 mt-12 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')" }}>
      <div className="max-w-7xl mx-auto bg-gradient-to-br from- bg-black/70 to- bg-black/70 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold text-white">Movies</h2>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by name, category or description..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              onClick={() => {
                setQuery("");
                setSortKey(null);
              }}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Reset
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBulkConfirm(true)}
                className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                title="Delete selected"
              >
                <AiOutlineDelete /> Delete Selected
              </button>

              <button
                onClick={() => refreshMovies()}
                className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                title="Refresh list"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/5">
          <table className="min-w-full text-left">
            <thead className="bg-gradient-to-r from-indigo-600/60 to-purple-600/60 text-white">
              <tr className="text-sm border-b border-white/10">
                <th className="px-4 py-3">
                  <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
                </th>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3 cursor-pointer" onClick={() => toggleSort("name")}>Name {sortKey?.key === "name" ? (sortKey.dir === "asc" ? "▲" : "▼") : ""}</th>
                <th className="px-4 py-3">Poster</th>
                <th className="px-4 py-3 cursor-pointer" onClick={() => toggleSort("category")}>Category {sortKey?.key === "category" ? (sortKey.dir === "asc" ? "▲" : "▼") : ""}</th>
                <th className="px-4 py-3 cursor-pointer" onClick={() => toggleSort("price")}>Price {sortKey?.key === "price" ? (sortKey.dir === "asc" ? "▲" : "▼") : ""}</th>
                <th className="px-4 py-3 cursor-pointer" onClick={() => toggleSort("rating")}>Rating {sortKey?.key === "rating" ? (sortKey.dir === "asc" ? "▲" : "▼") : ""}</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((movie, idx) => (
                <>
                  <tr key={movie.id} className={`odd:bg-indigo-900/10 even:bg-purple-900/10 hover:bg-indigo-700/10 transition-colors align-top`}>
                    <td className="px-4 py-4 align-middle">
                      <input type="checkbox" checked={!!selected[movie.id]} onChange={() => toggleSelect(movie.id)} />
                    </td>

                    <td className="px-4 py-4 text-gray-200 align-middle">{idx + 1}</td>
                    <td className="px-4 py-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-semibold text-white">{movie.name}</div>
                          <div className="text-xs text-gray-300">{movie.subTitle || ""}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 align-middle">
                      <img src={movie.image} alt={movie.name} className="w-20 h-12 object-cover rounded-md shadow-sm" />
                    </td>

                    <td className="px-4 py-4 align-middle">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
                        {movie.category || "UNCATEGORIZED"}
                      </span>
                    </td>

                    <td className="px-4 py-4 align-middle text-gray-200">${movie.price}</td>

                    <td className="px-4 py-4 align-middle">
                      <div className="flex items-center gap-3">
                        {renderStars(movie.rating)}
                        <span className="text-sm text-gray-300">{movie.rating}/5</span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-200 max-w-md line-clamp-2">{movie.description || "No description"}</td>

                    <td className="px-4 py-4 align-middle">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/movie/${movie.id}`)}
                          title="View Movie"
                          className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-800 shadow-sm hover:scale-105 transition-transform"
                        >
                          <AiOutlineEye size={18} />
                        </button>

                        <button
                          onClick={() => window.open(movie.trailer || "", "_blank")}
                          title="Watch Trailer"
                          className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm hover:scale-105 transition-transform"
                        >
                          <AiOutlinePlayCircle size={18} />
                        </button>

                        <button
                          onClick={() => setEditing(movie)}
                          title="Edit Movie"
                          className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white shadow-sm hover:scale-105 transition-transform"
                        >
                          <AiOutlineEdit size={18} />
                        </button>

                        <button
                          onClick={() => deleteMovie(movie)}
                          title="Delete Movie"
                          className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white shadow-sm hover:scale-105 transition-transform"
                        >
                          <AiOutlineDelete size={18} />
                        </button>

                        <button
                          onClick={() => setExpanded((s) => ({ ...s, [movie.id]: !s[movie.id] }))}
                          title="Expand"
                          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white shadow-sm hover:scale-105 transition-transform"
                        >
                          {expanded[movie.id] ? "▾" : "▸"}
                        </button>
                      </div>
                    </td>
                  </tr>

                  {expanded[movie.id] && (
                    <tr key={movie.id + "-expanded"} className="bg-white/3">
                      <td colSpan={9} className="px-6 py-4 text-gray-200">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <img src={movie.image} alt={movie.name} className="w-40 h-24 object-cover rounded-md shadow" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{movie.name}</h3>
                            <p className="text-sm text-gray-300 mb-2">{movie.description || "No description"}</p>
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1 rounded-full bg-indigo-700/60 text-white">Price: ${movie.price}</span>
                              <span className="px-3 py-1 rounded-full bg-emerald-700/60 text-white">Rating: {movie.rating}/5</span>
                              <span className="px-3 py-1 rounded-full bg-yellow-700/60 text-white">{movie.category}</span>
                            </div>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <button onClick={() => navigate(`/movie/${movie.id}`)} className="px-3 py-2 rounded-md bg-white text-gray-900">Open</button>
                            <button onClick={() => setEditing(movie)} className="px-3 py-2 rounded-md bg-yellow-400 text-white">Edit</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}

              {pageItems.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center text-gray-300 py-8">
                    No movies found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* Bulk confirm modal (simple custom modal) */}
      <Modal open={showBulkConfirm} onClose={() => setShowBulkConfirm(false)}>
        <h3 className="text-lg font-bold mb-2">Confirm deletion</h3>
        <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete selected movies? This action cannot be undone.</p>
        <div className="flex gap-2 justify-end">
          <button onClick={() => setShowBulkConfirm(false)} className="px-4 py-2 rounded-md bg-white/20">Cancel</button>
          <button onClick={bulkDelete} className="px-4 py-2 rounded-md bg-red-600 text-white">Delete</button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editing} onClose={() => setEditing(null)}>
        {editing && (
          <div>
            <h3 className="text-xl font-bold mb-3">Edit {editing.name}</h3>
            <div className="grid grid-cols-1 gap-3">
              <input defaultValue={editing.name} className="px-3 py-2 rounded-md border" />
              <input defaultValue={editing.price} className="px-3 py-2 rounded-md border" />
              <input defaultValue={editing.rating} className="px-3 py-2 rounded-md border" />
              <div className="flex gap-2 justify-end">
                <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-md bg-white/20">Cancel</button>
                <button
                  onClick={() => saveEdit(editing)}
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
