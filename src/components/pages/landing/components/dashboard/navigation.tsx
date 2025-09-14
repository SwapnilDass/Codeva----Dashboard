import React from "react";
import AiCompanionIcon from "/dashboard/sidebar/ai-companion.svg";
import BinocularsIcon from "/dashboard/sidebar/binoculars.png";
import BookIcon from "/dashboard/sidebar/book.svg";
import SettingIcon from "/dashboard/sidebar/setting.svg";
import CreditCardIcon from "/dashboard/sidebar/creditcard.png";

export default function Navigation() {
  return (
    <div className="mt-6 flex flex-col justify-start w-full gap-1.5">
      
      {/* Dashboard Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 65 57"
          fill="none"
          className="hidden sm:inline-block"
        >
          <path d="M58.1079 9.38329H34.3867L26.4796 0H6.71192C3.43666 0 0.781616 3.15073 0.781616 7.03747V49.2623C0.781616 53.149 3.43666 56.2997 6.71192 56.2997H58.1079C61.3831 56.2997 64.0382 53.149 64.0382 49.2623V16.4208C64.0382 12.534 61.3831 9.38329 58.1079 9.38329Z" fill="#9CA3AF" />
        </svg>
        <span className="text-[#9CA3AF] text-xs font-medium">Dashboard</span>
      </button>

      {/* Account Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 68 67"
          fill="none"
          className="hidden sm:inline-block"
        >
          <path d="M33.916 0C15.6119 0 0.781616 14.7832 0.781616 33.0292C0.781616 51.2751 15.6119 66.0584 33.916 66.0584C52.2201 66.0584 67.0504 51.2751 67.0504 33.0292C67.0504 14.7832 52.2201 0 33.916 0ZM33.916 12.7855C40.4093 12.7855 45.6734 18.0329 45.6734 24.5055C45.6734 30.9782 40.4093 36.2256 33.916 36.2256C27.4227 36.2256 22.1586 30.9782 22.1586 24.5055C22.1586 18.0329 27.4227 12.7855 33.916 12.7855ZM33.916 58.6002C26.0733 58.6002 19.0456 55.0575 14.3427 49.5171C16.8545 44.8025 21.7712 41.5528 27.5029 41.5528C27.8236 41.5528 28.1442 41.6061 28.4515 41.6993C30.1884 42.2587 32.0054 42.6183 33.916 42.6183C35.8266 42.6183 37.657 42.2587 39.3805 41.6993C39.6878 41.6061 40.0085 41.5528 40.3291 41.5528C46.0608 41.5528 50.9776 44.8025 53.4894 49.5171C48.7864 55.0575 41.7587 58.6002 33.916 58.6002Z" fill="#9CA3AF" />
        </svg>
        <span className="text-[#9CA3AF] text-xs font-medium">Account</span>
      </button>

      {/* AI Companion Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <img src={AiCompanionIcon} alt="AI Companion" className="hidden sm:inline-block h-3.5 w-3.5" />
        <span className="text-[#9CA3AF] text-xs font-medium">AI Companion</span>
      </button>

      {/* Events Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <img src={BinocularsIcon} alt="Events" className="hidden sm:inline-block h-3.5 w-3.5" />
        <span className="text-[#9CA3AF] text-xs font-medium">Events</span>
      </button>

      {/* Learning Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <img src={BookIcon} alt="Learning" className="hidden sm:inline-block h-3.5 w-3.5" />
        <span className="text-[#9CA3AF] text-xs font-medium">Learning</span>
      </button>

      {/* Settings Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <img src={SettingIcon} alt="Settings" className="hidden sm:inline-block h-3.5 w-3.5" />
        <span className="text-[#9CA3AF] text-xs font-medium">Settings</span>
      </button>

      {/* Billing Button */}
      <button className="flex items-center gap-3 w-full rounded-[7px] border border-[rgba(156,163,175,0.2)] bg-[rgba(217,217,217,0)] px-4 py-2.5 hover:brightness-105 transition-all">
        <img src={CreditCardIcon} alt="Billing" className="hidden sm:inline-block h-3.5 w-3.5 filter grayscale brightness-75 contrast-90" />
        <span className="text-[#9CA3AF] text-xs font-medium">Billing</span>
      </button>

    </div>
  );
}
