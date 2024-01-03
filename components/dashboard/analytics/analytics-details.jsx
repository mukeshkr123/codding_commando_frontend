"use client";

import React, { useEffect, useState } from "react";
import { DataCard } from "@/components/dashboard/analytics/data-card";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
// import { Chart } from "@/components/dashboard/analytics/chart";

const AnalyticsDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { userAuth } = useSelector((state) => state?.user);

  const fetchAnalyticsData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient("/analytics", config);
      setData(data?.data);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <DataCard label="Total Revenue" value={data?.totalPrice} shouldFormat />
        <DataCard label="Total Sales" value={data?.totalSales} />
        <DataCard label="Total Students" value={data?.totalStudents} />
      </div>
      {/* <Chart data={data} /> */}
    </div>
  );
};

export default AnalyticsDetails;
