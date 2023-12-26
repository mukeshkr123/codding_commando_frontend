"use client";

import { Banner } from "@/components/banner";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProgramActions from "./_components/program-actions";
import apiClient from "lib/api-client";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { IconBadge } from "@/components/icon-bagde";
import ProgramTitleForm from "./_components/program-title-form";

const ProgramId = ({ params }) => {
  const [programData, setProgramData] = useState({});
  const { userAuth } = useSelector((state) => state?.user);

  const fetchProgram = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      const { data } = await apiClient.get(
        `/courses/${params.courseId}/program/${params.ProgramId}`,
        config
      );

      setProgramData(data?.program);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProgram();
  }, []);

  return (
    <>
      <Banner
        variant="warning"
        label="This program is unpublished. It will not be visible in the course"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${params.courseId}`}
              className="mb-6 flex items-center text-sm transition hover:opacity-75"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to course setup
            </Link>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Chapter Creation</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields
                </span>
              </div>
              <ProgramActions
                // disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={programData.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Customize your chapter</h2>
              </div>
              <ProgramTitleForm
                initialData={programData}
                courseId={params.courseId}
                programId={params.programId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramId;
