"use client";

import { Card } from "@/components/ui/card";
import apiClient from "lib/api-client";
import { formatCreatedAtDate } from "lib/format";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ContactPage = ({ params }) => {
  const [data, setData] = useState({});
  const fetchContactData = async () => {
    try {
      const { data } = await apiClient.get(`/send/${params.contactId}`);
      setData(data.contact);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <div className="flex flex-col p-6">
      <Link
        href="/teacher/contacts"
        className="flex items-center gap-2 text-slate-700 hover:text-slate-500"
      >
        <ArrowLeft className="h-5 w-5" />
        <p className="text-xl">Go Back</p>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="mt-8 max-w-sm">
          <h1 className="text-2xl font-medium text-slate-700">User Detail</h1>
          <Card className="mt-4 flex flex-col gap-2 p-4 text-base text-slate-700 shadow-md">
            <p>
              Name:- {data?.firstName} {data?.lastName}p
            </p>
            <p>Email:- {data?.email}</p>
            <p>Phone:- {data?.phone}</p>
            <p>Date:- {formatCreatedAtDate(data?.createdAt)}</p>
          </Card>
        </div>
        <div className="mt-8 max-w-sm">
          <h1 className="text-2xl font-medium text-slate-700">Message</h1>
          <Card className="mt-4 flex min-h-[155px] flex-col gap-2 p-4 text-base text-slate-700 shadow-md">
            <p>{data?.message}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
