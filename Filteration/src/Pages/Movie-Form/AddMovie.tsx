import { useState } from 'react';
import { Loader2, Star, Video, Film } from 'lucide-react';
import Swal from 'sweetalert2';
import { movieAPIService } from '../../Services/MovieAPIServices';

const categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Animation'];

export default function AddMovie() {
  const [movieFormData, setMovieFormData] = useState({
    id: Math.floor(Math.random() * 1000).toString(),
    name: '',
    image: '',
    price: '',
    category: 'action',
    rating: '',
    trailer: '',
    description: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting'>('idle');

  const handleEvent = (event: any) => {
    const { name, value } = event.target;

    setMovieFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    const status = await movieAPIService.addMovieData(movieFormData);

    if (status) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `"${movieFormData.name}" added successfully!`,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#f0fff4',
        color: '#2f855a',
      });
      setMovieFormData({
        id: Math.floor(Math.random() * 1000).toString(),
        name: '',
        image: '',
        price: '',
        category: 'action',
        rating: '',
        trailer: '',
        description: ''
      });
    } else {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: `Failed to add "${movieFormData.name}". Please try again.`,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#fff5f5',
        color: '#c53030',
      });
    }
    setSubmissionStatus('idle');
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black/90 px-4 relative"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/00/e6/a9/00e6a976619c4180fa31c391838262b1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Title */}
      <h1 className="relative text-4xl md:text-5xl font-extrabold text-white mb-8 text-center z-10">
        Add New <span className="text-red-600">Movie</span>
      </h1>

      {/* Form Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg border border-white/20 shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Movie Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={movieFormData.name}
              name="name"
              onChange={handleEvent}
              placeholder=" "
              className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
            >
              Movie Name
            </label>
          </div>

          {/* Price & Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="number"
                id="price"
                value={movieFormData.price}
                name="price"
                onChange={handleEvent}
                placeholder=" "
                className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
                required
              />
              <label
                htmlFor="price"
                className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
              >
                Price ($)
              </label>
            </div>

            <div className="relative">
              <input
                type="number"
                id="rating"
                name="rating"
                value={movieFormData.rating}
                onChange={handleEvent}
                placeholder=" "
                step="0.1"
                min="0"
                max="10"
                className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
                required
              />
              <label
                htmlFor="rating"
                className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
              >
                Rating (0-10)
              </label>
            </div>
          </div>

          {/* Poster & Trailer */}
          <div className="relative">
            <input
              type="url"
              id="image"
              value={movieFormData.image}
              name="image"
              onChange={handleEvent}
              placeholder=" "
              className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
              required
            />
            <label
              htmlFor="image"
              className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
            >
              Poster Image URL
            </label>
          </div>

          <div className="relative">
            <input
              type="url"
              id="trailer"
              name="trailer"
              value={movieFormData.trailer}
              onChange={handleEvent}
              placeholder=" "
              className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
              required
            />
            <label
              htmlFor="trailer"
              className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
            >
              Trailer URL
            </label>
          </div>

          {/* Category */}
          <div className="relative">
            <select
              id="category"
              name="category"
              value={movieFormData.category}
              onChange={handleEvent}
              className="block w-full rounded-xl bg-white/20 p-4 text-gray border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              id="description"
              name="description"
              value={movieFormData.description}
              onChange={handleEvent}
              rows={4}
              placeholder=" "
              className="peer block w-full rounded-xl bg-white/20 p-4 text-white border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-300"
              required
            ></textarea>
            <label
              htmlFor="description"
              className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/70 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500"
            >
              Description
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionStatus === 'submitting'}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {submissionStatus === 'submitting' ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span>Adding Movie...</span>
              </>
            ) : (
              <>
                <Film className="w-5 h-5" />
                <span>Submit Movie</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>

  )
}
