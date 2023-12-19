"use client";

import { IconBadge } from "@/components/icon-bagde";
import apiClient from "lib/api-client";
import { LayoutDashboard } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CourseIdPage = ({ params }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);
  console.log(params);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userAuth?.accessToken}`,
          },
        };
        const { data } = await apiClient.get(
          `/courses/${params.courseId}`,
          config
        );
        setCourseData(data?.course);
      } catch (error) {
        console.log(error);
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Internal Server Error";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  console.log(courseData);

  const requiredFields = [courseData.title, courseData.description];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completetionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  if (loading) {
    return <p>Loding....</p>;
  }

  return (
    <>
      {/* Banner  */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completetionText}
            </span>
          </div>
          Actions
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-2xl">Customize your course</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
