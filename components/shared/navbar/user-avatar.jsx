"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const UserAvatar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
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
    </>
  );
};

export default UserAvatar;
