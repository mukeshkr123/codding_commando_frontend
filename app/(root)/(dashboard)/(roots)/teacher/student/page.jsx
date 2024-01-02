"use client";

import { columns } from "@/components/dashboard/students/columns";
import { DataTable } from "@/components/dashboard/students/data-tables";
import apiClient from "lib/api-client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const MentorPage = () => {
  const [data, setData] = useState([]);
  const { userAuth } = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MentorPage;
