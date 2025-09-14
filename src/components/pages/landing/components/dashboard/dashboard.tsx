import React from "react";
import Sidebar from "./sidebar";

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

        {/* Main content (80%) */}
        <div
          className="w-[77%] rounded-xl p-6"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4 text-gray-200">
            This is where your dashboard content will go.
          </p>
        </div>
      </div>
    </section>
  );
}
