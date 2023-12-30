import { Card } from "@/components/ui/card";
import React from "react";

const StudentCourseCard = ({ studentData }) => {
  console.log(studentData);

  console.log(studentData?.enrollments?.length);
  return (
    <Card className="max-w-sm p-4 lg:max-w-md xl:max-w-lg">
      <h1 className="text-2xl font-semibold">Enrolled Courses</h1>
      {studentData?.enrollments?.length > 0 ? (
        <div>CourseListdetail</div>
      ) : (
        <div className="mt-4 flex w-full  justify-center">
          <h1 className="text-lg text-slate-600">
            Haven&apos;t enrolled any course yet
          </h1>
        </div>
      )}
    </Card>
  );
};

export default StudentCourseCard;