import React from "react";

export default function Logo() {
  return (
    <div className="fixed top-2 left-25 flex flex-col items-center z-50 scale-60">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* 🌈 Gradient Definitions */}
        <defs>
          {/* Left circle gradient */}
          <linearGradient id="gradientLeft" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#8B5CF6" /> {/* violet-500 */}
            <stop offset="100%" stopColor="#EC4899" /> {/* pink-500 */}
          </linearGradient>

          {/* Right circle gradient */}
          <linearGradient id="gradientRight" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#14B8A6" /> {/* teal-500 */}
            <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
          </linearGradient>
        </defs>

        {/* 🟣 Left circle */}
        <circle
          cx="9.5"
          cy="12"
          r="7.5"
          stroke="url(#gradientLeft)"
          strokeWidth="2"
        />

        {/* 🟢 Right circle */}
        <circle
          cx="14.5"
          cy="12"
          r="7.5"
          stroke="url(#gradientRight)"
          strokeWidth="2"
        />
      </svg>

      <h2 className="text-xs font-semibold mt-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
        HelloBuddy
      </h2>
    </div>
  );
}
