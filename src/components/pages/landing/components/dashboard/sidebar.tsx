import React from "react";
import HelpButtons from "./helpbuttons";
import SidebarDivider from "./sidebardivider";
import CodevaLogo from "./codevalogo";
import Navigation from "./navigation";
import UserProfile from "./userprofile";
import EventOrganizer from "./eventorganizer";

export default function Sidebar() {
  return (
    <aside className="h-full w-[360px] rounded-xl p-6 text-white [background:radial-gradient(113%_113%_at_46%_26%,rgba(1,2,16,1)_10%,rgba(1,2,16,1)_30%,rgba(102,51,238,1)_100%)]">
      {/* Add the HelpButtons component */}
      <HelpButtons />

      {/* Add the Codeva Logo and Divider bars component */}
      <SidebarDivider />
      <CodevaLogo />
      <SidebarDivider />

      {/* Add the Navigation component */}
      <Navigation />

      {/* Add the Userprofile component */}
      <UserProfile />

      {/* Add the Event Organizer component */}
      <EventOrganizer />
    </aside>
  );
}
