"use client";
// import { redirect } from "next/navigation";
// import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedTeacher = ({ children }) => {
  const { user } = useSelector((state) => state?.user);

  console.log(user);

  return <>{children}</>;
};

export default ProtectedTeacher;
