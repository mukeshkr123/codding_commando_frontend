"use client";

import apiClient from "lib/api-client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import columns from "./_components/columns";
import DataTable from "./_components/data-tables";
import toast from "react-hot-toast";

const CoursesPage = () => {
  const [data, setData] = useState([]);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const response = await apiClient.get("/courses", config);
      setData(response.data?.courses);
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

export default CoursesPage;
