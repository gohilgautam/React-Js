import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Loader2, Star, Video, Film, Image as ImageIcon, DollarSign, Tag, FileText } from 'lucide-react';
import Swal from 'sweetalert2';
import { movieAPIService } from '../../Services/MovieAPIServices';
import type { MovieType } from '../../Services/MovieAPIServices';

const categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Animation'];

export default function Edit_Movie() {
  const movieData = useLoaderData() as MovieType;

  const [movieFormData, setMovieFormData] = useState({
    id: movieData.id,
    name: movieData.name,
    image: movieData.image,
    price: movieData.price.toString(),
    category: movieData.category,
    rating: movieData.rating.toString(),
    trailer: movieData.trailer,
    description: movieData.description
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState(movieData.image);
  const [trailerPreview, setTrailerPreview] = useState(movieData.trailer);

  const handleEvent = (event: any) => {
    const { name, value } = event.target;
    setMovieFormData(prev => ({ ...prev, [name]: value }));

    // Update previews in real-time
    if (name === 'image') {
      setImagePreview(value);
    }
    if (name === 'trailer') {
      setTrailerPreview(value);
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    const status = await movieAPIService.updateMovie(movieFormData.id, movieFormData);

    if (status) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `"${movieFormData.name}" updated successfully!`,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#f0fff4',
        color: '#2f855a',
      });
    } else {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: `Failed to update "${movieFormData.name}". Please try again.`,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#fff5f5',
        color: '#c53030',
      });
    }
    setSubmissionStatus('idle');
  }

  const getInputIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name': return <Film className="w-5 h-5" />;
      case 'price': return <DollarSign className="w-5 h-5" />;
      case 'rating': return <Star className="w-5 h-5" />;
      case 'image': return <ImageIcon className="w-5 h-5" />;
      case 'trailer': return <Video className="w-5 h-5" />;
      case 'category': return <Tag className="w-5 h-5" />;
      case 'description': return <FileText className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Title with Animation */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Edit <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 animate-gradient">Movie</span>
        </h1>
        <p className="text-gray-400 text-lg">Update movie details below</p>
        
        {/* Current Movie Preview */}
        <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
          <img 
            src={movieData.image} 
            alt={movieData.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white font-medium">{movieData.name}</span>
          <span className="px-2 py-1 bg-gradient-to-r from-red-600 to-red-800 text-xs rounded-full">
            ID: {movieData.id}
          </span>
        </div>
      </div>

      {/* Interactive Card Container */}
      <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Form Grid Layout */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row 1: Movie Name */}
          <div className="relative group">
            <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'name' ? 'translate-x-1' : ''}`}>
              <div className="p-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-lg">
                {getInputIcon('name')}
              </div>
              <label htmlFor="name" className="text-white font-medium">Movie Name</label>
            </div>
            <input
              type="text"
              id="name"
              value={movieFormData.name}
              name="name"
              onChange={handleEvent}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 group-hover:border-white/20"
              required
            />
            <div className="mt-2 text-xs text-gray-400 flex justify-between">
              <span>Current: {movieData.name}</span>
              <span className="text-green-400">{movieFormData.name.length}/100</span>
            </div>
          </div>

          {/* Row 2: Price & Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'price' ? 'translate-x-1' : ''}`}>
                <div className="p-2 bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-lg">
                  {getInputIcon('price')}
                </div>
                <label htmlFor="price" className="text-white font-medium">Price ($)</label>
              </div>
              <input
                type="number"
                id="price"
                value={movieFormData.price}
                name="price"
                onChange={handleEvent}
                onFocus={() => handleFocus('price')}
                onBlur={handleBlur}
                min="0"
                step="0.01"
                className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all duration-300 group-hover:border-white/20"
                required
              />
              <div className="mt-2 text-xs text-gray-400">
                Current: ${movieData.price}
              </div>
            </div>

            <div className="relative group">
              <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'rating' ? 'translate-x-1' : ''}`}>
                <div className="p-2 bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 rounded-lg">
                  {getInputIcon('rating')}
                </div>
                <label htmlFor="rating" className="text-white font-medium">Rating (0-10)</label>
              </div>
              <div className="relative">
                <input
                  type="range"
                  id="rating"
                  name="rating"
                  value={movieFormData.rating}
                  onChange={handleEvent}
                  onFocus={() => handleFocus('rating')}
                  onBlur={handleBlur}
                  min="0"
                  max="10"
                  step="0.1"
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-yellow-400 [&::-webkit-slider-thumb]:to-yellow-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  {[0, 2, 4, 6, 8, 10].map(num => (
                    <span key={num}>{num}</span>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-400 flex justify-between">
                <span>Current: {movieData.rating}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {movieFormData.rating}/10
                </span>
              </div>
            </div>
          </div>

          {/* Row 3: Image URL with Preview */}
          <div className="relative group">
            <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'image' ? 'translate-x-1' : ''}`}>
              <div className="p-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-lg">
                {getInputIcon('image')}
              </div>
              <label htmlFor="image" className="text-white font-medium">Poster Image URL</label>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="url"
                id="image"
                value={movieFormData.image}
                name="image"
                onChange={handleEvent}
                onFocus={() => handleFocus('image')}
                onBlur={handleBlur}
                className="flex-1 rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 group-hover:border-white/20"
                required
              />
              <div className="w-full md:w-48 h-32 bg-gray-800/50 rounded-xl overflow-hidden border border-white/10">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x400?text=Invalid+URL';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Row 4: Trailer URL */}
          <div className="relative group">
            <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'trailer' ? 'translate-x-1' : ''}`}>
              <div className="p-2 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg">
                {getInputIcon('trailer')}
              </div>
              <label htmlFor="trailer" className="text-white font-medium">Trailer URL</label>
            </div>
            <input
              type="url"
              id="trailer"
              name="trailer"
              value={movieFormData.trailer}
              onChange={handleEvent}
              onFocus={() => handleFocus('trailer')}
              onBlur={handleBlur}
              className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 group-hover:border-white/20"
              required
            />
            {trailerPreview && (
              <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                <Video className="w-3 h-3" />
                Trailer URL is valid
              </div>
            )}
          </div>

          {/* Row 5: Category Select */}
          <div className="relative group">
            <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'category' ? 'translate-x-1' : ''}`}>
              <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 rounded-lg">
                {getInputIcon('category')}
              </div>
              <label htmlFor="category" className="text-white font-medium">Category</label>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setMovieFormData(prev => ({ ...prev, category: cat.toLowerCase().replace(/\s/g, '-') }));
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    movieFormData.category === cat.toLowerCase().replace(/\s/g, '-') 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              id="category"
              name="category"
              value={movieFormData.category}
              onChange={handleEvent}
              onFocus={() => handleFocus('category')}
              onBlur={handleBlur}
              className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-300"
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Row 6: Description */}
          <div className="relative group">
            <div className={`flex items-center gap-3 mb-2 transition-all duration-300 ${activeField === 'description' ? 'translate-x-1' : ''}`}>
              <div className="p-2 bg-gradient-to-r from-cyan-600/20 to-cyan-800/20 rounded-lg">
                {getInputIcon('description')}
              </div>
              <label htmlFor="description" className="text-white font-medium">Description</label>
            </div>
            <textarea
              id="description"
              name="description"
              value={movieFormData.description}
              onChange={handleEvent}
              rows={4}
              onFocus={() => handleFocus('description')}
              onBlur={handleBlur}
              className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 group-hover:border-white/20 resize-none"
              required
            ></textarea>
            <div className="mt-2 text-xs text-gray-400 flex justify-between">
              <span>Character count: {movieFormData.description.length}</span>
              <span>Current length: {movieData.description.length}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0"
            >
              {submissionStatus === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>Updating Movie...</span>
                </>
              ) : (
                <>
                  <Film className="w-5 h-5" />
                  <span>Update Movie</span>
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={() => {
                setMovieFormData({
                  id: movieData.id,
                  name: movieData.name,
                  image: movieData.image,
                  price: movieData.price.toString(),
                  category: movieData.category,
                  rating: movieData.rating.toString(),
                  trailer: movieData.trailer,
                  description: movieData.description
                });
                setImagePreview(movieData.image);
                setTrailerPreview(movieData.trailer);
              }}
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              Reset Changes
            </button>
          </div>
        </form>
      </div>

      {/* Summary Card */}
      <div className="relative z-10 mt-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 w-full max-w-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Summary of Changes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Movie Name:</span>
              <span className="text-white font-medium">{movieFormData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Category:</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {movieFormData.category}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Price:</span>
              <span className="text-green-400 font-bold">${movieFormData.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rating:</span>
              <span className="flex items-center gap-1 text-yellow-400 font-bold">
                <Star className="w-4 h-4 fill-yellow-400" />
                {movieFormData.rating}/10
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}