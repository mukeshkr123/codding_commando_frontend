"use client";

import apiClient from "lib/api-client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { DataTable } from "@/components/dashboard/mentors/data-tables";
import { columns } from "@/components/dashboard/mentors/columns";

const MentorPage = () => {
  const [data, setData] = useState([]);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const response = await apiClient.get("/mentors", config);

      setData(response.data?.mentors);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MentorPage;
