import { IconBadge } from "@/components/icon-bagde";
import React from "react";

export const InfoCard = ({ variant, icon: Icon, numberofItems, label }) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md border p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">
          {numberofItems} {numberofItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};
