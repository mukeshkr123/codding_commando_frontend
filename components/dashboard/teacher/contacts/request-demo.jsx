"use client";

import apiClient from "lib/api-client";
import { BellRing } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ContactDataTable } from "./contact-data-tables";
import ContactColumns from "./contact-columns";
import toast from "react-hot-toast";

export const ContactDetails = () => {
  const [data, setData] = useState([]);

  const fetchContactData = async () => {
    try {
      const { data } = await apiClient.get("/send/get-all");
      setData(data?.contacts);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const unSeenItems = data?.filter((item) => !item.seen);
  console.log(unSeenItems?.length);

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
