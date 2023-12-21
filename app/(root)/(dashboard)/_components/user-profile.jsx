"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = ({ imageUrl, name }) => {
  console.log(imageUrl);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Avatar className="h-10 w-10 cursor-pointer hover:border-2">
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="text-lg font-medium">
        {name?.trim(" ").charAt(0).toUpperCase() || undefined}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserProfile;
