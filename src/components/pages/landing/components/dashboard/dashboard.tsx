import React from "react";
import Sidebar from "./sidebar";
import MainContainer from "./maincontainer"; // 👈 import here

export default function Dashboard() {
  return (
    <section
      className="h-[100vh] w-[100vw] text-white 
      [background:radial-gradient(90.88%_90.88%_at_50%_9.12%,rgba(63,28,138,0.35)_0%,rgba(81,21,140,0.73)_50%,#B686FF_100%)] p-6"
    >
      <div className="flex h-full w-full gap-6">
        {/* Sidebar (20%) */}
        <div className="w-[23%]">
          <Sidebar />
        </div>

        {/* Main container (80%) */}
        <div className="w-[77%]">
          <MainContainer />
        </div>
      </div>
    </section>
  );
}
