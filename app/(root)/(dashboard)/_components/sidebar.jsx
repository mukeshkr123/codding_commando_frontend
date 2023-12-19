import React from "react";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm">
      <div className="p-6">
        <h2>CODDING COMMANDO</h2>
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
