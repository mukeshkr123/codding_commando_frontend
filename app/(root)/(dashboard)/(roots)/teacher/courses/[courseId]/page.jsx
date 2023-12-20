"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-bagde";
import apiClient from "lib/api-client";
import { CircleDollarSign, LayoutDashboard, LibraryBig } from "lucide-react";
import TitleForm from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { Actions } from "./_components/actions";
import FullPriceForm from "./_components/full-price-form";
import InstallMentPriceForm from "./_components/installment-price-form";
import AboutForm from "./_components/about-form";
import ModeForm from "./_components/mode-form";
import DurationForm from "./_components/duration-form";
import CourseImage from "./_components/course-image-form";

const CourseIdPage = ({ params }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchCourseData = useMemo(
    () => async () => {
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
        console.error("Error fetching course data:", error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [params.courseId, userAuth?.accessToken]
  );

  useEffect(() => {
    fetchCourseData();
  }, [fetchCourseData]);

  const requiredFields = [courseData?.title, courseData?.description];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.length;

  const completionText = `(${completedFields}/${totalFields})`;

  if (loading) {
    return <p>Loading...</p>;
  }

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!courseData?.isPublished && (
        <Banner label="This course is unpublished. It will not be visible to the students." />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={courseData?.isPublished}
          />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-2xl">Customize your course</h2>
            </div>

            <TitleForm initialData={courseData} courseId={courseData?._id} />
            <DescriptionForm
              initialData={courseData}
              courseId={courseData?._id}
            />
            <CourseImage initialData={courseData} courseId={courseData?._id} />
            <AboutForm initialData={courseData} courseId={courseData?._id} />
            <ModeForm initialData={courseData} courseId={courseData?._id} />
            <DurationForm initialData={courseData} courseId={courseData?._id} />
          </div>
          <div className="space-y-6">
            <div>
              <div className=" flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Sell your course</h2>
              </div>
              <FullPriceForm
                initialData={courseData}
                courseId={courseData?._id}
              />
              <InstallMentPriceForm
                initialData={courseData}
                courseId={courseData?._id}
              />
            </div>
            <div>
              <div className=" flex items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                  <IconBadge icon={LibraryBig} />
                  <h2 className="text-2xl">Customize curriculum strategy</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
