import React from "react";

export default function HelpButtons() {
  return (
    <div className="mb-6 mt-0.5 flex justify-between">
      {/* Left button */}
      <button className="flex w-fit items-center justify-center rounded-[7px] border border-[rgba(128,128,128,0.3)] bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] p-1.5 font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition-all hover:brightness-105">
        <img
          src="/dashboard/sidebar/searchglass.png"
          alt="Search"
          className="h-4 w-4"
        />
      </button>

      {/* Right-side buttons container */}
      <div className="flex gap-1.5">
        {/* ⌘ + K button */}
        <button className="flex items-center justify-center gap-1 rounded-[7px] border border-[rgba(128,128,128,0.3)] bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] px-2 py-1.5 text-sm font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition-all hover:brightness-105">
          <span>⌘</span>
          <span>K</span>
        </button>

        {/* Original right button */}
        <button className="flex w-fit items-center justify-center rounded-[7px] border border-[rgba(128,128,128,0.3)] bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] p-1.5 font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition-all hover:brightness-105">
          <img
            src="/dashboard/sidebar/rightarrow.png"
            alt="Another"
            className="h-4 w-4 scale-x-[-1]" // Flipped horizontally
          />
        </button>
      </div>
    </div>
  );
}
