"use client";

import React, { useEffect, useState } from "react";
import { InfoCard } from "@/components/dashboard/infoCard";
import { CourseCard } from "@/components/dashboard/search/cours-card"; // Corrected typo
import apiClient from "lib/api-client";
import { CheckCircle, Clock, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const EnrolledCourseList = () => {
  const [courses, setCourses] = useState([]);
  const { userAuth } = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      const { data } = await apiClient.get("/enrolled-courses", config);
      setCourses(data?.courses || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <div className="space-y-4 p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <InfoCard
          icon={Clock}
          label="Enrolled courses"
          numberofItems={courses.length} // Use courses.length directly
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberofItems={0} // Use a number directly
          variant="success"
        />
      </div>

      <div>
        <h2 className=" mt-4 p-2 text-2xl font-medium text-slate-800">
          Your Courses
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course?._id}
              courseId={course?._id}
              description={course?.description}
              title={course?.title}
              duration={course?.duration}
              imageUrl={course?.imageUrl}
              enrolled={true}
            />
          ))}
        </div>
        {courses.length === 0 && (
          <div className="mt-10 text-center text-sm text-muted-foreground">
            No courses found
          </div>
        )}
      </div>
    </div>
  );
};
