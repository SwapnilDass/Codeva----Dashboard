import React from "react";

export default function HelpButtons() {
  return (
    <div className="flex justify-between mt-0.5">
      {/* Left button */}
      <button
        className="rounded-[7px] border border-[rgba(128,128,128,0.3)] 
          bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] 
          shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] 
          p-1.5 text-white font-medium hover:brightness-105 transition-all
          flex items-center justify-center w-fit"
      >
        <img
          src="/dashboard/sidebar/searchglass.png"
          alt="Search"
          className="h-4 w-4"
        />
      </button>

      {/* Right-side buttons container */}
      <div className="flex gap-1.5">
        {/* ⌘ + K button */}
        <button
          className="rounded-[7px] border border-[rgba(128,128,128,0.3)] 
            bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] 
            px-2 py-1.5 text-white text-sm font-medium hover:brightness-105 transition-all 
            flex items-center justify-center gap-1"
        >
          <span>⌘</span>
          <span>K</span>
        </button>

        {/* Original right button */}
        <button
          className="rounded-[7px] border border-[rgba(128,128,128,0.3)] 
            bg-gradient-to-b from-[rgba(170,170,170,0.4)] to-[rgba(255,255,255,0.25)] 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[2px] 
            p-1.5 text-white font-medium hover:brightness-105 transition-all
            flex items-center justify-center w-fit"
        >
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
