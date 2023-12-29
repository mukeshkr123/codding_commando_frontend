import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { formatCreatedAtDate } from "lib/format";
import React from "react";

const StudentDetailCard = ({ studentData }) => {
  console.log(studentData);
  return (
    <Card className="mt-8 max-w-md">
      {studentData && (
        <div className="flex justify-between p-4 md:justify-normal md:gap-10">
          <Avatar>
            <AvatarImage
              src={studentData?.avatar}
              className="h-20 w-20 rounded-full"
            />

            <AvatarFallback>
              <h1 className="flex h-20 w-20 items-center justify-center rounded-full border-2 text-center text-4xl font-medium ">
                {studentData?.firstName.trim(" ").charAt(0).toUpperCase() ||
                  undefined}
              </h1>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              {studentData?.firstName} {studentData?.lastName}
            </h1>
            <h2 className="text-sm text-slate-700">{studentData?.email}</h2>
            <h3 className="text-sm text-slate-700">{studentData?.phone}</h3>
            <h3 className="text-sm text-slate-700">
              <span className="font-medium">Joined At:-</span>{" "}
              {formatCreatedAtDate(studentData?.createdAt)}
            </h3>
          </div>
        </div>
      )}
    </Card>
  );
};

export default StudentDetailCard;
