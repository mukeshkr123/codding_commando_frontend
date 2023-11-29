import React from "react";
import { NavLink } from "./navLink";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Courses",
    href: "/courses",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#10001C] min-h-[10vh]  text-white px-10 py-8 md:px-16 lg:px-18 xl:px-20">
      <div className="flex justify-between px-2 items-center">
        {/* logo  */}
        <div>
          <Image
            src="/assets/icons/logo.svg"
            alt="Codding Commando"
            height={150}
            width={180}
          />
        </div>

        {/* navitems  */}
        <div className="hidden  md:flex">
          <div className="flex   md:space-x-1 lg:space-x-10 2xl:space-x-12 ">
            {navLinks.map((navItem) => (
              <NavLink
                key={navItem.href}
                href={navItem.href}
                title={navItem.title}
              />
            ))}
          </div>
        </div>

        {/* Login */}
        <Link href="/login">
          <Button
            className="hidden md:flex px-4 bg-[#F5478E]  hover:bg-[#d43977]  border border-black transition duration-300"
            style={{ boxShadow: "3px 2px 0 0 white" }}
          >
            <span className="text-lg font-semibold">Login</span>
          </Button>
        </Link>

        {/* Mobile Nav */}
        <div className=" md:hidden ">
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
