import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./feature/counter/counterSlice";
import type { RootState } from "./store/store";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-12">
      <div className="bg-white rounded-3xl shadow-2xl w-96 flex flex-col items-center p-12">
        {/* Count Display */}
        <div
          className="w-full h-56 rounded-2xl mb-12 flex items-center justify-center text-8xl font-extrabold text-gray-900"
          style={{
            background: "linear-gradient(135deg, #A8FF78 0%, #78FFD6 100%)",
          }}
        >
          {count}
        </div>

        {/* Buttons */}
        <div className="flex space-x-10 w-full justify-center mb-8">
          <button
            onClick={() => dispatch(decrement())}
            className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl font-bold text-green-600 hover:bg-green-50 transition"
            aria-label="Decrement"
          >
            –
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="w-28 py-4 rounded-2xl bg-white shadow-lg text-lg font-semibold text-yellow-600 hover:bg-yellow-50 transition"
            aria-label="Reset"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl font-bold text-blue-600 hover:bg-blue-50 transition"
            aria-label="Increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
