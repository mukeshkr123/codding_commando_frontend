"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../GlobalRedux/slices/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = ({ imageUrl, name }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const handleLogOut = () => {
    dispatch(logoutAction());
    router.push("/");
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DropdownMenu className>
      <DropdownMenuTrigger className="border-none outline-none">
        <Avatar className="h-10 w-10 cursor-pointer hover:border-2">
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="text-lg font-medium">
            {name?.trim(" ").charAt(0).toUpperCase() || "P"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mr-2 flex flex-col gap-1 px-2">
        <DropdownMenuItem className="cursor-pointer text-sm  font-medium">
          <Link href={`/dashboard`}>My Courses</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-sm  font-medium">
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-sm font-medium"
          onClick={() => handleLogOut()}
        >
          LogOut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
