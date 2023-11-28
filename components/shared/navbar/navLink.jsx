import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavLink = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <div className="relative text-base lg:text-lg group flex items-center">
        <span className="mx-4 transition-all duration-300 ease-in-out group-hover:mx-6 group-hover:px-1">
          {title}
        </span>
        <span className="absolute inset-0 flex items-center">
          <Image
            src="/assets/icons/left-hover.svg"
            alt="Left Hover SVG"
            width={40}
            height={40}
            className="w-9 h-9 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <Image
            src="/assets/icons/right-hover.svg"
            alt="Right Hover SVG"
            width={40}
            height={40}
            className="w-9 h-9 absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </span>
      </div>
    </Link>
  );
};
