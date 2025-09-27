import React from "react";
import Sidebar from "./sidebar";
import MainContainer from "./maincontainer";

export default function Dashboard() {
  return (
    <section className="min-h-screen w-full overflow-x-hidden p-0 text-white [background:radial-gradient(90.88%_90.88%_at_50%_9.12%,rgba(63,28,138,0.35)_0%,rgba(81,21,140,0.73)_50%,#B686FF_100%)]">
      <div className="flex h-full w-full gap-6 p-6">
        {/* Sidebar */}
        <div className="w-[23%] shrink-0 md:w-[33%] lg:w-[25%]">
          <Sidebar />
        </div>

        {/* Main container */}
        <div className="min-h-screen flex-1">
          <MainContainer />
        </div>
      </div>
    </section>
  );
}
