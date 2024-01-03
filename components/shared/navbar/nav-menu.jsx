"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { RxAvatar } from "react-icons/rx";

import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../GlobalRedux/slices/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const NavMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logoutAction());
    router.push("/");
    toast.success("Logged out successfully");
  };
  return (
    <DropdownMenu className>
      <DropdownMenuTrigger className="border-none outline-none">
        <RxAvatar className="h-8 w-8 border-none outline-none" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2">
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-base  font-medium">
          <Link href={`/dashboard`}>My Courses</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-base  font-medium">
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-base font-medium"
          onClick={() => handleLogOut()}
        >
          LogOut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
