export default function PlaneBadge({ ...props }) {
  return (
    <div
      className="h-16 w-16 flex-shrink-0 rounded-[10px] bg-[#ED066B] p-[18px]"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="149"
        height="149"
        viewBox="0 0 149 149"
        fill="none"
        className="h-full w-full"
      >
        <path
          d="M84.198 92.2564L59.7102 114.04L63.4688 131.289L45.7579 149L27.9118 121.087L0 103.241L17.7109 85.5292L35.8988 90.2276L56.7347 64.7923L12.8062 35.5057L32.9374 15.3668L87.864 33.6833L114.865 6.68191C123.2 -1.66127 136.113 -2.27348 143.695 5.30799C151.276 12.8895 150.657 25.7958 142.321 34.1389L115.32 61.1404L133.622 116.047L113.491 136.186L84.2051 92.2564H84.198Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
