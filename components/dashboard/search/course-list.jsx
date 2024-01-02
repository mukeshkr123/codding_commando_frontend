import apiClient from "lib/api-client";
import React from "react";

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

  console.log(courses);

  return <div>CourseList</div>;
};
