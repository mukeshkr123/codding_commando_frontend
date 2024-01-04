"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../ui/button";
import { UserAvatar } from "./nav-menu-avatar";
import { SearchInput } from "../search/search-input";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const { user } = useSelector((state) => state?.user);
  const isAdmin = user && user?.role === "admin";

  const isTeacherPage = isAdmin && pathname.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  const linkButton = (href, children) => (
    <Link href={href}>
      <Button size="sm" variant="ghost">
        {children}
      </Button>
    </Link>
  );

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="ml-auto flex gap-x-2">
        {isTeacherPage || isCoursePage
          ? linkButton(
              "/dashboard",
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Exit
              </>
            )
          : isAdmin
            ? linkButton("/teacher/courses", "Teacher Mode")
            : null}

        <UserAvatar imageUrl={user?.avatar} name={user?.name ?? "P"} />
      </div>
    </>
  );
};

export default NavbarRoutes;
