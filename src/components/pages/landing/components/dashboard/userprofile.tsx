import React from "react";

export default function UserProfile() {
  return (
    <div
      className="flex items-center justify-between w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] 
      bg-[rgba(217,217,217,0)] px-3 py-2 hover:brightness-105 transition-all mt-10"
    >
      {/* Left Side: User Icon + Text */}
      <div className="flex items-center">
        {/* User Icon as button */}
        <button className="flex-shrink-0 focus:outline-none">
          <img
            src="/dashboard/sidebar/usericon.png"
            alt="User Icon"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover hover:brightness-110 transition-all"
          />
        </button>

        {/* Text Container with padding */}
        <div className="flex flex-col leading-tight pl-3">
          <span className="text-[rgba(156,163,175,1)] text-[10px] font-inter">
            @alex
          </span>
          <span className="text-white text-xs sm:text-sm font-medium">
            Alex
          </span>
        </div>
      </div>

      {/* Right Side: Logout Icon as button */}
      <button className="flex-shrink-0 focus:outline-none">
        <img
          src="/dashboard/sidebar/logout.png"
          alt="Logout"
          className="h-5 w-5 sm:h-6 sm:w-6 object-contain hover:brightness-125 transition-all"
        />
      </button>
    </div>
  );
}
