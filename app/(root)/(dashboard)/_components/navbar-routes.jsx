"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarRoutes = () => {
  const userId = true;
  const pathname = usePathname();

  const isTeacher = (teacher) => {
    return teacher;
  };

  const isTeacherPage = pathname.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && <div>SeachInput</div>}

      <div className=" ml-auto flex gap-x-2">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost">
              <LogOut className="mr-2 h-4 w-4" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button variant="ghost" size="sm">
              Teacher Mode
            </Button>
          </Link>
        ) : null}

        <div className="px-10">Profile</div>
      </div>
    </>
  );
};

export default NavbarRoutes;
