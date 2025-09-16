import React from "react";

export default function EventOrganizer() {
  return (
    <div
      className="hidden sm:flex flex-col text-left
      w-full max-w-full mt-3 rounded-[7px] border border-[rgba(255,255,255,0.30)] 
      bg-gradient-to-b from-[rgba(0,0,0,0.40)] to-[#9578B8] 
      px-3 sm:px-4 py-3 sm:py-4 box-border
      max-h-[220px] overflow-hidden"
    >
      {/* Title Text */}
      <h2 className="text-white font-inter font-bold text-[9px] sm:text-xs md:text-sm mb-10">
        Organize your own Events
      </h2>

      {/* Description Text */}
      <p className="text-[#D1D5DB] font-inter text-[8px] sm:text-[10px] md:text-xs leading-tight sm:leading-snug mb-7">
        Become an event Organizer today and discover hundreds of integrations,
        tools and more to grow your attendance & profit.
      </p>

      {/* Full-width Button */}
      <button
        className="w-full bg-white text-black font-inter font-medium 
        text-[9px] sm:text-[10px] md:text-xs 
        rounded-[6px] px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 
        hover:brightness-95 transition-all"
      >
        Become an organizer
      </button>
    </div>
  );
}
