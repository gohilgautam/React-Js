import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit, Trash2, Car as CarIcon, Calendar, Tag, DollarSign } from "lucide-react";
import toast from "react-hot-toast";
import * as api from "../services/api";
import type { Car } from "../Types/types";

export default function DetailCar() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentCar, setCurrentCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  const fetchCar = async () => {
    try {
      setLoading(true);
      const car = await api.getCar(id!);
      setCurrentCar(car);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch car");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    
    if (!window.confirm("Are you sure you want to delete this car? This action cannot be undone.")) {
      return;
    }

    try {
      await api.removeCar(id);
      toast.success("Car deleted successfully!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete car");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading car details...</p>
        </div>
      </div>
    );
  }

  if (!currentCar) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-red-50 p-8 rounded-lg border border-red-200">
          <p className="text-red-600 text-lg mb-4">Car not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300">
            {currentCar.image ? (
              <img
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <CarIcon className="w-32 h-32 text-gray-400" />
              </div>
            )}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">{currentCar.year}</span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            {/* Title and Category */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">{currentCar.name}</h1>
                  <p className="text-xl text-gray-600">{currentCar.brand}</p>
                </div>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                  {currentCar.category}
                </span>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase">Price</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{currentCar.price?.toLocaleString() || "0"}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-2">
                  <Tag className="w-6 h-6 text-green-600" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase">Category</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">{currentCar.category}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase">Year</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800">{currentCar.year}</p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Car Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Car Name</span>
                  <span className="text-gray-800 font-semibold">{currentCar.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Brand</span>
                  <span className="text-gray-800 font-semibold">{currentCar.brand}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Category</span>
                  <span className="text-gray-800 font-semibold">{currentCar.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Year</span>
                  <span className="text-gray-800 font-semibold">{currentCar.year}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Price</span>
                  <span className="text-gray-800 font-semibold text-lg">
                    ₹{currentCar.price?.toLocaleString() || "0"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/edit/${id}`}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition shadow-lg font-medium"
              >
                <Edit className="w-5 h-5" />
                Edit Car
              </Link>
              <button
                onClick={handleDelete}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition shadow-lg font-medium"
              >
                <Trash2 className="w-5 h-5" />
                Delete Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
