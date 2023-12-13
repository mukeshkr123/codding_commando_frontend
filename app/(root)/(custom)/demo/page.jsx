"use client";

import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "../../../../components/shared/form/Form";
import Wahooo from "../../../../components/Wahooo";

const formSchema = z.object({
  firstname: z.string().min(2, { message: "First Name is required" }),
  lastname: z.string().min(2, { message: "Last Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(10, { message: "Phone is required" }),
  message: z.string(),
});

const DemoPage = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    // Add your API call here
    reset();
    setSuccess(true);
  };

  return (
    <div
      className="relative max-h-[88vh] w-full bg-dark-purple  bg-center bg-no-repeat px-4 pb-16 pt-8"
      style={{
        backgroundImage: "url(/assets/images/background/demo-png.png)",
        backgroundPosition: "bottom",
        backgroundSize: "100% 60%",
      }}
    >
      <div
        className="absolute right-0 h-full w-1/2 bg-contain"
        style={{
          backgroundImage: 'url("/assets/images/grid.png")',
        }}
      />
      {success ? (
        <div className="h-full w-full">
          <Wahooo
            setSuccess={setSuccess}
            title="Woohoo!"
            additionaldesc="You have booked yourself a free demo session"
            description=" Check your registered email-id, We will contact you soon."
          />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 pb-14 xl:pb-28">
          <Image
            src="/assets/font-shadow/demo-svg.svg"
            alt="Get Us Touch"
            height={100}
            width={200}
            className="w-[90%] py-6 sm:w-[60%] md:w-[50%]  xl:w-[45%] xl:py-14"
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
              title="Reserver Your Seat"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoPage;
