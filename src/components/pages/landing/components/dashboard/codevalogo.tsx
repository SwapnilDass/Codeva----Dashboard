import React from "react";

const CodevaLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-3.5"> {/* smaller top margin */}
      {/* Icon + Text Row */}
      <div className="flex items-center gap-3"> {/* smaller gap */}
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40" // smaller width
          height="28" // smaller height
          viewBox="0 0 203 103"
          fill="none"
        >
          <path
            d="M0.833537 1.34356C0.747176 1.05292 1.09881 0.831555 1.32522 1.03322C10.3034 9.03006 18.2234 14.0093 31.3335 14.4882H173.491C175.713 14.4882 177.668 15.9543 178.29 18.087L202.804 102.062C202.891 102.359 202.52 102.574 202.299 102.357C190.345 90.6219 183.246 86.681 168.955 86.444H29.6724C27.4516 86.444 25.4969 84.9791 24.8735 82.8475L13.7281 44.7391L0.833537 1.34356Z"
            fill="white"
          />
        </svg>

        {/* Text */}
        <span className="text-white text-base font-bold">Codeva.</span> {/* smaller text */}
      </div>
    </div>
  );
};

export default CodevaLogo;
