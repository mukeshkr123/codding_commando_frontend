import CourseCard from "@/components/shared/card/courseCard";
import React from "react";

const Courses = () => {
  return (
    <div className="w-full">
      <CourseCard
        courseId="1"
        title="Complete Salesforce 
      Training"
        description="Admin, LWC and Ddevelopment"
        duration="3 Months"
        profilePicture="\assets\images\courses\course1-profile.svg"
        alt="Profile Image"
      />
    </div>
  );
};

export default Courses;
