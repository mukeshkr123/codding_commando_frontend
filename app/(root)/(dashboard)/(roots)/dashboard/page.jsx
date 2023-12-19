import { redirect } from "next/navigation";
import React from "react";
import InfoCard from "./_components/infoCard";
import { CheckCircle, Clock } from "lucide-react";

const DashboardPage = () => {
  const userId = 12344;

  if (!userId) {
    return redirect("/");
  }

  const coursesInProgress = 0;

  return (
    <div className="space-y-4 p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <InfoCard
          icon={Clock}
          label="In Progress"
          numberofItems={coursesInProgress}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberofItems={coursesInProgress}
          variant="success"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
