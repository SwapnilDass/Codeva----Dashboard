import React, { useState } from "react";

export default function MainNavigation() {
  const [active, setActive] = useState("Profile");

  const tabs = ["Profile", "Credentials", "Visibility", "Other"];

  return (
    <div className="w-full text-left pl-6"> {/* 👈 added left padding */}
      {/* Title */}
      <h2 className="text-white font-bold text-xl mb-4 mt-2">Account</h2>

      {/* Navigation buttons in a horizontal row */}
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-base font-medium transition-colors duration-200
              ${
                active === tab
                  ? "text-[#ED066B]"
                  : "text-white hover:text-[#ED066B]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
