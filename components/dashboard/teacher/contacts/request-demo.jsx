"use client";

import apiClient from "lib/api-client";
import { BellRing, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ContactDataTable } from "./contact-data-tables";
import ContactColumns from "./contact-columns";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const ContactDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchContactData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient.get("/send/get-all", config);
      setData(data?.contacts);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const unSeenItems = data?.filter((item) => !item.seen);

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <section>
      <div className=" flex items-center gap-4">
        <div className="relative">
          <BellRing className="h-9 w-9" />
          {unSeenItems?.length > 0 && (
            <div className="absolute -right-2 -top-1 rounded-full bg-red-500 px-2 text-white">
              {unSeenItems.length}+
            </div>
          )}
        </div>

        <h1 className="text-2xl font-medium">Notifications</h1>
      </div>
      <ContactDataTable columns={ContactColumns} data={data} />
    </section>
  );
};
