import React from "react";
import UnLocking from "./_components/UnLocking";
import Courses from "../../../../components/shared/card/courseCard";

export default function CoursePage() {
  return (
    <div className="h-full w-full bg-light-white">
      <UnLocking />
      <Courses />
    </div>
  );
}
