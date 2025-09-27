import React from "react";
import Sidebar from "./sidebar";
import MainContainer from "./maincontainer"; // Import the MainContainer component

export default function Dashboard() {
  return (
    <section className="h-[100vh] w-[100vw] p-6 text-white [background:radial-gradient(90.88%_90.88%_at_50%_9.12%,rgba(63,28,138,0.35)_0%,rgba(81,21,140,0.73)_50%,#B686FF_100%)]">
      <div className="flex h-full w-full gap-6">
        {/* Sidebar (23%) */}
        <div className="w-[33%]">
          <Sidebar />
        </div>

        {/* Main container (77%) */}
        <div className="w-[97%]">
          <MainContainer />
        </div>
      </div>
    </section>
  );
}
