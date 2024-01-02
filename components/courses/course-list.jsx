import React from "react";
import { CourseCard } from "./course-card";
import apiClient from "lib/api-client";

async function getAllCourses() {
  try {
    const { data } = await apiClient.get("/get-all/courses");
    return data?.courses;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    console.log(errorMessage);
  }
}

export const CourseList = async () => {
  const courses = await getAllCourses();

  if (!courses || courses.length === 0) {
    return (
      <div className="flex h-60 w-full items-center justify-center md:mb-8">
        <h2 className=" text-3xl font-medium text-slate-700">
          No Course Found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 xl:gap-6 2xl:gap-12">
      {courses.map((courseData) => (
        <CourseCard {...courseData} key={courseData?._id} />
      ))}
    </div>
  );
};
