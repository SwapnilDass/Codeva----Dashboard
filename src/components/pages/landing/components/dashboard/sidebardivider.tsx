import React from "react";

const SidebarDivider: React.FC = () => {
  return (
    <div className="h-[1px] w-full bg-[rgba(156,163,175,0.2)] my-3 hidden sm:block" />
  );
};

export default SidebarDivider;


const DividerLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-25 0 900 5"
    className="w-[280px]"
    fill="none"
  >
    <path
      d="M2.08368 0.857423C1.25526 0.85651 0.582945 1.52734 0.582032 2.35577C0.58112 3.1842 1.25195 3.85651 2.08038 3.85742L933.793 4.88382L933.796 1.88382L2.08368 0.857423Z"
      stroke="rgba(255,255,255,0.31)"
      strokeWidth="2"
    />
  </svg>
);
