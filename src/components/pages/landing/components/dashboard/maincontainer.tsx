import React from "react";
import MainNavigation from "./mainnavigation";

export default function MainContainer() {
  return (
    <div
      className="w-full h-full rounded-xl p-6 
      bg-[rgba(0,0,0,0.4)] text-white overflow-y-auto"
    >
      <MainNavigation />
    </div>
  );
}
