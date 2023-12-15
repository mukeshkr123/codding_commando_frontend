import React from "react";
import EnrolledCourseCad from "./EnrolledCourseCard";

const enrolledCourses = [
  {
    _id: 1,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
  {
    _id: 2,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
  {
    _id: 3,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
  {
    _id: 4,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
  {
    _id: 5,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
  {
    _id: 5,
    title: "Complete Salesforce Training",
    description: "Admin,LWC and Development",
    duration: "3 Months",
    bannerImage: "/assets/images/courses/course1-profile.svg",
    alt: "Profile Image",
  },
];

const Courses = () => {
  return (
    <section className="flex w-full items-center justify-center bg-light-white py-12">
      {enrolledCourses.length > 0 ? (
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold">Your Courses</h1>
          <div className="grid gap-8  py-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:gap-10">
            {enrolledCourses.map((course, index) => (
              <EnrolledCourseCad key={index} course={course || {}} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center ">
          <h1 className="text-center text-5xl font-semibold">
            Your Have Not Course
          </h1>
        </div>
      )}
    </section>
  );
};

export default Courses;
