import React from "react";
import UnLocking from "./_components/UnLocking";
import Courses from "./_components/Courses";

export default function CoursePage() {
  return (
    <div className="h-full w-full bg-light-white">
      <UnLocking />
      <Courses />
    </div>
  );
}
