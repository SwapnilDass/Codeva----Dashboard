import React from "react";

export default function EventOrganizer() {
  return (
    <div className="mt-12 w-full max-w-full flex-col overflow-hidden rounded-[7px] bg-gradient-to-b from-[rgba(0,0,0,0.40)] to-[#9578B8] px-3 py-3 text-left sm:flex sm:px-4 sm:py-4">
      {/* Title Text */}
      <h2 className="font-inter mb-10 text-[9px] font-bold text-white sm:text-xs md:text-sm">
        Organize your own Events
      </h2>

      {/* Description Text */}
      <p className="font-inter mb-7 text-[8px] leading-tight text-[#D1D5DB] sm:text-[10px] sm:leading-snug md:text-xs">
        Become an event Organizer today and discover hundreds of integrations,
        tools and more to grow your attendance & profit.
      </p>

      {/* Full-width Button */}
      <button className="font-inter w-full rounded-[6px] bg-white px-1.5 py-1 text-[9px] font-medium text-black transition-all hover:brightness-95 sm:px-2 sm:py-1.5 sm:text-[10px] md:px-3 md:py-2 md:text-xs">
        Become an organizer
      </button>
    </div>
  );
}
