"use client";

import { CoursePaymentDetail } from "@/components/dashboard/students/course-payement-detail";
import { StudentCourseCard } from "@/components/dashboard/students/student-course-card";
import { StudentDetailCard } from "@/components/dashboard/students/studetail-card";
import apiClient from "lib/api-client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const StudentProfile = ({ params }) => {
  const [studentData, setStudentData] = useState();
  const { userAuth } = useSelector((state) => state?.user);

  const fetchStudentData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient.get(
        `/users/students/${params.studentId}`,
        config
      );

      setStudentData(data.student);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [params?.studentId]);

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold">Student Profile</h1>
          <Link
            href={"/teacher/student"}
            className="flex items-center  gap-1 hover:text-slate-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Link>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:gap-0 md:gap-y-4 lg:grid-cols-2">
        <StudentDetailCard studentData={studentData} />
        <StudentCourseCard studentData={studentData} />
        <CoursePaymentDetail studentData={studentData} />
      </div>
    </div>
  );
};

export default StudentProfile;
