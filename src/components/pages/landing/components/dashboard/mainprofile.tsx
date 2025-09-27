import React from "react";

const MainProfile: React.FC = () => {
  const bioText =
    "Hey! My name is Alex. I’m a 16 year old high schooler & part time full stack developer. I like cooking, studying math, working out, and designing.";

  return (
    <div>
      {/* Top Profile Container */}
      <div className="mb-6 mt-6 flex justify-center">
        <div
          className="flex h-[190px] w-[90%] max-w-5xl items-center justify-between rounded-[30px] border border-[rgba(255,255,255,0.19)] px-10 py-5 backdrop-blur-lg"
          style={{
            background: "rgba(26, 26, 26, 0.35)",
          }}
        >
          {/* Left Side: User Icon + Info */}
          <div className="flex items-center">
            <img
              src="/dashboard/maincontainer/usericon (2).png"
              alt="User Icon"
              className="mr-5 h-28 w-28 rounded-full"
            />

            <div className="flex flex-col text-white">
              <h1 className="font-semi-bold text-xl">Alex Wathens</h1>

              <div className="mt-1.5 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 50 56"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M50 39.5818L37.1475 42.7453L25.0975 40.2875L12.76 42.7453L0 39.567V37.8717C0 35.9084 0.790176 34.0254 2.1967 32.6371C3.60322 31.2488 5.51088 30.4689 7.5 30.4689H42.5C44.4891 30.4689 46.3968 31.2488 47.8033 32.6371C49.2098 34.0254 50 35.9084 50 37.8717V39.5818ZM50 44.6725V55.1451H0V44.6577L12.6425 47.8039L25.0875 45.3264L37.235 47.8039L50 44.6725ZM17.5 23.066H32.5V28.0012H17.5V23.066ZM25 21.5854C23.0109 21.5854 21.1032 20.8055 19.6967 19.4172C18.2902 18.0289 17.5 16.1459 17.5 14.1826C17.5 11.4559 20 7.01413 25 0.857422C30 7.01413 32.5 11.4559 32.5 14.1826C32.5 16.1459 31.7098 18.0289 30.3033 19.4172C28.8968 20.8055 26.9891 21.5854 25 21.5854Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xs">May 23, 2005</span>
              </div>

              <div className="mt-1.5 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="18"
                  viewBox="0 0 42 55"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.15076 7.04958C14.3518 -1.73202 27.6482 -1.73202 35.8492 7.04958C44.0503 15.8312 44.0503 30.069 35.8492 38.8505L21 54.751L6.15076 38.8505C-2.05025 30.069 -2.05025 15.8312 6.15076 7.04958ZM21 29.3748C24.3137 29.3748 27 26.4984 27 22.9501C27 19.4018 24.3137 16.5253 21 16.5253C17.6863 16.5253 15 19.4018 15 22.9501C15 26.4984 17.6863 29.3748 21 29.3748Z"
                    fill="white"
                  />
                </svg>
                <span className="text-xs">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Right Side: Edit Button */}
          <button className="flex items-center gap-2 rounded-[100px] border border-white bg-transparent px-6 py-3 transition-all hover:bg-white/10">
            <span className="text-sm font-medium text-white">Edit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 50 49"
              fill="none"
            >
              <path
                d="M44.5789 15.3748L34.6712 5.99319L38.6359 2.24055C40.4012 0.568581 44.4444 0.236841 46.5598 2.24055L48.5408 4.11687C50.6563 6.12058 50.3088 9.95019 48.5408 11.6248L44.5789 15.3748ZM40.6169 19.1301L12.8777 45.4039L0 48.2171L2.97006 36.0196L30.7093 9.74584L40.6169 19.1301Z"
                fill="white"
                fillOpacity="0.75"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bio Container */}
      <div className="mb-12 mt-12 flex justify-center">
        <div
          className="flex h-[170px] w-[90%] max-w-5xl items-center justify-between rounded-[30px] border border-[rgba(255,255,255,0.19)] px-10 py-5 backdrop-blur-lg"
          style={{
            background: "rgba(26, 26, 26, 0.35)",
          }}
        >
          {/* Left Side: Bio Title + Text + Counter */}
          <div className="flex h-full w-[85%] flex-col text-white">
            <h2
              className="mb-2 text-sm font-semibold tracking-wide"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              BIO
            </h2>

            <p className="mt-3 break-words text-sm leading-relaxed">
              {bioText}
            </p>

            <span className="mt-auto text-xs text-gray-400">
              {bioText.length}/200
            </span>
          </div>

          {/* Right Side: Edit Button */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 rounded-[100px] border border-white bg-transparent px-6 py-3 transition-all hover:bg-white/10">
              <span className="text-sm font-medium text-white">Edit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 50 49"
                fill="none"
              >
                <path
                  d="M44.5789 15.3748L34.6712 5.99319L38.6359 2.24055C40.4012 0.568581 44.4444 0.236841 46.5598 2.24055L48.5408 4.11687C50.6563 6.12058 50.3088 9.95019 48.5408 11.6248L44.5789 15.3748ZM40.6169 19.1301L12.8777 45.4039L0 48.2171L2.97006 36.0196L30.7093 9.74584L40.6169 19.1301Z"
                  fill="white"
                  fillOpacity="0.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Container */}
      <div className="mb-12 flex justify-center">
        <div
          className="flex h-[140px] w-[90%] max-w-5xl flex-col rounded-[30px] border border-[rgba(255,255,255,0.19)] px-10 py-5 backdrop-blur-lg"
          style={{
            background: "rgba(26, 26, 26, 0.35)",
          }}
        >
          <h2
            className="mb-3 text-sm font-semibold tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            ACHIEVEMENTS
          </h2>

          <div className="flex justify-between gap-4">
            <div className="flex h-[50px] min-w-[150px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] px-4 text-xs text-white">
              <img
                src="/dashboard/maincontainer/fire.svg"
                alt="Star"
                className="h-4 w-4"
              />
              <span>Reached a 50 Days Streak</span>
            </div>
            <div className="flex h-[50px] min-w-[150px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] px-4 text-xs text-white">
              <img
                src="/dashboard/maincontainer/star.svg"
                alt="Trophy"
                className="h-4 w-4"
              />
              <span>Participated in 20+ Events</span>
            </div>
            <div className="flex h-[50px] min-w-[150px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] px-4 text-xs text-white">
              <img
                src="/dashboard/maincontainer/trophy.svg"
                alt="Flash"
                className="h-4 w-4"
              />
              <span>Won 5+ Hackathons</span>
            </div>
            <div className="flex h-[50px] min-w-[150px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] px-4 text-xs text-white">
              <img
                src="/dashboard/maincontainer/flash.svg"
                alt="Crown"
                className="h-4 w-4"
              />
              <span>Completed 20+ Courses</span>
            </div>
            <div className="flex h-[50px] min-w-[150px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] px-4 text-xs text-white">
              <img
                src="/dashboard/maincontainer/crown.svg"
                alt="Leader"
                className="h-4 w-4"
              />
              <span>5x Team Leader</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Container */}
      <div className="mb-12 flex justify-center">
        <div
          className="flex h-[140px] w-[90%] max-w-5xl flex-col rounded-[30px] border border-[rgba(255,255,255,0.19)] px-10 py-5 backdrop-blur-lg"
          style={{
            background: "rgba(26, 26, 26, 0.35)",
          }}
        >
          <h2
            className="mb-3 text-sm font-semibold tracking-wide"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            LEARNING
          </h2>

          <div className="flex justify-between gap-4">
            {/* Mini Container 1 */}
            <div className="flex h-[50px] min-w-[200px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] text-xs text-white">
              <img
                src="/dashboard/maincontainer/python.svg"
                alt="Python"
                className="h-4 w-4"
              />
              <span>Completed a Full Python Course</span>
            </div>

            {/* Mini Container 2 */}
            <div className="flex h-[50px] min-w-[200px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] text-xs text-white">
              <img
                src="/dashboard/maincontainer/javascript.svg"
                alt="JavaScript"
                className="h-4 w-4"
              />
              <span>Discovering Javascript</span>
            </div>

            {/* Mini Container 3 */}
            <div className="flex h-[50px] min-w-[200px] flex-1 items-center justify-center gap-2 rounded-[20px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.05)] text-xs text-white">
              <img
                src="/dashboard/maincontainer/math-function.svg"
                alt="Math"
                className="h-4 w-4"
              />
              <span>Math Competition Tryharder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
