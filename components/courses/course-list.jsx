"use client";

import React, { useEffect, useState } from "react";
import { CourseCard } from "./course-card";
import apiClient from "lib/api-client";
import { ErrorToast } from "../error-toast";

export const CourseList = () => {
  const [courses, setCourse] = useState([]);

  const fetchCourses = async () => {
    try {
      const { data } = await apiClient.get("/get-all/courses");
      setCourse(data?.courses);
    } catch (error) {
      ErrorToast(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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
