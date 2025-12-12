import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Car as CarIcon, Plus, Home } from "lucide-react";

import AddCar from "./components/addCars";
import EditCar from "./components/editCars";
import DetailCar from "./components/detailsCars";
import CarList from "./components/carList";

function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-100 transition">
            <CarIcon className="w-8 h-8" />
            <span className="text-xl font-bold">Car Management</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive("/") && location.pathname === "/"
                  ? "bg-white text-blue-600"
                  : "text-white hover:bg-blue-500"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/add"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive("/add")
                  ? "bg-white text-blue-600"
                  : "text-white hover:bg-blue-500"
              }`}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Car</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/add" element={<AddCar />} />
            <Route path="/edit/:id" element={<EditCar />} />
            <Route path="/details/:id" element={<DetailCar />} />
          </Routes>
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </Router>
  );
}
