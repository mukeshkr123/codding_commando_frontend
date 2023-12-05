"use client";

import Image from "next/image";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstname: z.string().min(2, { message: "First Name is required" }),
  lastname: z.string().min(2, { message: "Last Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(10, { message: "Phone is required" }),
  message: z.string().min(5, { message: "Please explain your query" }),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="max-h-[88vh] w-full bg-dark-purple bg-no-repeat px-4 py-8"
      style={{
        backgroundImage: "url(/assets/images/background/making-png.png)",
        backgroundPosition: "bottom",
        backgroundSize: "100% 30%",
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-2 pb-12 xl:pb-28">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded px-8 pb-8 pt-6 shadow-md xl:p-10"
          >
            <h1 className="mb-4 py-2 text-2xl font-bold text-white xl:text-4xl">
              Send Us a Message
            </h1>
            <div className="flex w-full flex-col lg:flex-row  lg:gap-12 ">
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <input
                    {...register("firstname")}
                    className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
                      errors.firstname ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <p className="text-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    {...register("lastname")}
                    className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
                      errors.lastname ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Last Name"
                  />
                  {errors.lastname && (
                    <p className="text-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    {...register("email")}
                    className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <input
                    {...register("phone")}
                    className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    type="tel" // Change type to "tel" for phone numbers
                    placeholder="Phone No"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <textarea
                    {...register("message")}
                    className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Message"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    className="rounded-3xl bg-bg_pink px-10 py-2 font-bold text-white focus:shadow-none focus:outline-none "
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
