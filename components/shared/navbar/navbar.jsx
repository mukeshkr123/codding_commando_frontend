"use client";

import React, { useEffect, useState } from "react";
import { NavLink } from "./navLink";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Link from "next/link";
import NavMenu from "../navbar/nav-menu";
import { Button } from "../../ui/button";
import { useSelector } from "react-redux";

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
  const [isMounted, setMounted] = useState(false);
  const storeData = useSelector((state) => state?.user);
  const { userAuth } = storeData;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <nav className="lg::px-16 min-h-[10vh] w-full  bg-dark-purple px-10 py-8 text-white md:px-16 xl:px-20">
      <div className="flex items-center justify-between px-2">
        {/* logo  */}
        <div>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Codding Commando"
              height={150}
              width={180}
              className="w-[70%] "
            />
          </Link>
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

        {userAuth ? (
          <div className="hidden md:flex">
            <NavMenu user={userAuth} />
          </div>
        ) : (
          <Link href="/login">
            <Button
              className="hidden border border-black bg-[#F5478E]  px-4  transition duration-300 hover:bg-[#d43977] md:flex"
              style={{ boxShadow: "3px 2px 0 0 white" }}
            >
              <span className="text-lg font-semibold">Login</span>
            </Button>
          </Link>
        )}

        {/* Mobile Nav */}
        <div className=" md:hidden ">
          <MobileNav navLinks={navLinks} user={userAuth} />
        </div>
      </div>
    </nav>
  );
}
