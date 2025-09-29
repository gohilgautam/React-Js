import React from "react";

export default function ErrorPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-6 overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-200 rounded-full opacity-20 blur-2xl animate-blob animation-delay-4000"></div>

      {/* 404 Text */}
      <h1 className="text-[120px] md:text-[150px] font-extrabold text-indigo-600 drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Error Label */}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lg font-semibold text-gray-600 animate-pulse">
        Error
      </span>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold mt-8 text-gray-800 animate-fade-in">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-4 max-w-md text-center animate-fade-in animation-delay-500">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      {/* Back Button */}
      <a
        href="/"
        className="mt-8 px-8 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        ⬅ Back to Home
      </a>

      {/* Floating Decorative Icons */}
      <div className="absolute bottom-1/4 left-10 text-4xl text-pink-400 opacity-50 animate-bounce-slow">
        💡
      </div>
      <div className="absolute top-1/2 right-20 text-5xl text-indigo-400 opacity-40 animate-bounce-slow animation-delay-1000">
        🏠
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 15s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s forwards; }
        .animation-delay-500 { animation-delay: 0.5s; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}</style>
    </div>
  );
}
