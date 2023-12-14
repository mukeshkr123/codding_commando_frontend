"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "../form/Form";
import Wahooo from "../../Wahooo";
import Image from "next/image";
import apiClient from "../../../lib/api-client";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(10, { message: "Phone is required" }),
  message: z.string(),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (contactData) => {
    try {
      const { data } = await apiClient.post("/send/message", contactData);
      setSuccess(true);
      toast.success(data.message);
      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Internal Server Error";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      {success ? (
        <div className="h-full w-full">
          <Wahooo
            setSuccess={setSuccess}
            title="Thank You for Reaching Out!"
            description=" We've received your message and will get back to you shortly. Your
            inquiry is important to us."
          />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 pb-14 xl:pb-28">
          <Image
            src="/assets/font-shadow/get-touch.svg"
            alt="Get Us Touch"
            height={100}
            width={200}
            className="w-[65%] py-6 sm:w-[60%] md:w-[50%]  xl:w-[45%] xl:py-14"
          />
          <div
            className="w-full max-w-md rounded-[27px] border border-[#000] bg-transparent backdrop-blur-3xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl  xl:max-w-6xl "
            style={{
              border: "1px solid #000",
              background:
                "linear-gradient(267deg, rgba(255, 255, 255, 0.13) -2.1%, rgba(255, 255, 255, 0.00) 121.83%)",
              backdropFilter: "blur(8.550000190734863px)",
            }}
          >
            <Form
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              errors={errors}
              title="Send Us A Message"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
