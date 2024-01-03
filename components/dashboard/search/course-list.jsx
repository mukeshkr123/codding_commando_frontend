import apiClient from "lib/api-client";
import React from "react";
import { CourseCard } from "./cours-card";

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
  return (
    <div className="mt-4">
      <div className="grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {courses?.map((course) => (
          <CourseCard
            courseId={course?._id}
            description={course?.description}
            title={course?.title}
            duration={course?.duration}
            imageUrl={course?.imageUrl}
            profilePicture={course?.profilePicture}
            key={course?._id}
          />
        ))}
      </div>
      {courses?.length === 0 && (
        <div className="mt-10 text-center text-sm text-muted-foreground">
          No courses found
        </div>
      )}
    </div>
  );
};
