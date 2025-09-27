import React, { useState } from "react";

export default function MainNavigation() {
  const [active, setActive] = useState("Profile");

  const tabs = ["Profile", "Credentials", "Visibility", "Other"];

  return (
    <div className="w-full pl-6 text-left">
      {/* Title */}
      <h2 className="mb-8 mt-2 text-3xl font-bold text-white">Account</h2>

      {/* Navigation buttons in a horizontal row */}
      <div className="mb-11 flex gap-11">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-large text-lg transition-colors duration-200 ${
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
