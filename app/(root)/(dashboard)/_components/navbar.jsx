import React from "react";
import MobileSideBar from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";

const navbar = () => {
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};

export default navbar;
