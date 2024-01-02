"use client";

import { columns } from "@/components/dashboard/students/columns";
import { DataTable } from "@/components/dashboard/students/data-tables";
import apiClient from "lib/api-client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

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
      const response = await apiClient.get("/users/students", config);

      setData(response.data?.students);
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
