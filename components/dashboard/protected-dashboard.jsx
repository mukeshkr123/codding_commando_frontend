"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSessionAction } from "GlobalRedux/slices/userSlice";

const ProtectDashboard = ({ children }) => {
  const { userAuth, user } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const config = {
    headers: {
      Authorization: `Bearer ${userAuth?.accessToken}`,
    },
  };

  useEffect(() => {
    dispatch(userSessionAction(config));
  }, []);

  if (!user) {
    redirect("/");
  }

  return <div>{children}</div>;
};

export default ProtectDashboard;
