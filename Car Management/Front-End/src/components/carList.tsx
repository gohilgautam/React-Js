import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Edit, Eye, Plus, Car as CarIcon } from "lucide-react";
import toast from "react-hot-toast";
import * as api from "../services/api";
import type { Car } from "../Types/types";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getCars();
      setCars(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch cars");
      toast.error(err.message || "Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    
    try {
      await api.removeCar(id);
      toast.success("Car deleted successfully!");
      // Remove car from local state
      setCars(cars.filter((car) => (car._id || car.id) !== id));
    } catch (err: any) {
      toast.error(err.message || "Failed to delete car");
    }
  };

  if (loading && cars.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading cars...</p>
        </div>
      </div>
    );
  }

  if (error && cars.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-red-50 p-8 rounded-lg border border-red-200">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={fetchCars}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <CarIcon className="w-10 h-10 text-blue-600" />
              Car Management
            </h1>
            <p className="text-gray-600">Manage your car inventory</p>
          </div>
          <button
            onClick={() => navigate("/add")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Add New Car
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm mb-1">Total Cars</p>
            <p className="text-3xl font-bold text-gray-800">{cars.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm mb-1">Active Listings</p>
            <p className="text-3xl font-bold text-gray-800">{cars.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm mb-1">Categories</p>
            <p className="text-3xl font-bold text-gray-800">
              {new Set(cars.map((car) => car.category)).size}
            </p>
          </div>
        </div>

        {/* Car Grid */}
        {cars.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <CarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No cars found</h3>
            <p className="text-gray-500 mb-6">Get started by adding your first car</p>
            <button
              onClick={() => navigate("/add")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add Car
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => {
              const carId = car._id || car.id || "";
              return (
                <div
                  key={carId}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Car Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    {car.image ? (
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <CarIcon className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">{car.year}</span>
                    </div>
                  </div>

                  {/* Car Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{car.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{car.brand}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {car.category}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        ₹{car.price?.toLocaleString() || "0"}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/details/${carId}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition text-sm font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Link>
                      <Link
                        to={`/edit/${carId}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition text-sm font-medium"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(carId)}
                        className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
