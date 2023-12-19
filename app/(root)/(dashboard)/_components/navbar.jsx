import React from "react";
import MobileSideBar from "./mobile-sidebar";
import NvabarRoutes from "./navbar-routes";

const navbar = () => {
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSideBar />
      <NvabarRoutes />
    </div>
  );
};

export default navbar;
