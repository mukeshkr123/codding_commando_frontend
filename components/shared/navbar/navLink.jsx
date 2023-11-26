import Link from "next/link";
import React from "react";

export const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="hover:bg-red-500">
      <p className="text-base lg:text-lg">{title}</p>
    </Link>
  );
};
