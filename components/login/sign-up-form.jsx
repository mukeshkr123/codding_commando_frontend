"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerAction } from "GlobalRedux/slices/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { SignUpInput } from "./sign-up-input";
import VerificationBox from "./verification-box";

const signUpSchema = yup.object({
  FirstName: yup.string().min(2, "First Name is required!"),
  LastName: yup.string().min(2, "Last Name is required!"),
  Email: yup
    .string()
    .email("Please enter a valid Email!")
    .min(2, "Email is required!"),
  Phone: yup.string().min(13, "Phone is required!"),
  Password: yup.string().min(6, "Password is required!"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password")], "Passwords do not match"),
});

const fieldNames = [
  "FirstName",
  "LastName",
  "Email",
  "Phone",
  "Password",
  "ConfirmPassword",
];

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handlePhoneFocus = () => {
    setValue("Phone", "+91");
  };

  const onSubmit = ({ FirstName, LastName, Email, Phone, Password }) => {
    const data = {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phone: Phone,
      password: Password,
    };
    dispatch(registerAction(data));
  };

  const { registered } = useSelector((state) => state?.user);

  useEffect(() => {
    reset();
  }, [registered, reset]);

  if (registered) {
    return <VerificationBox />;
  } else {
    return (
      <div className="absolute  flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-6">
        <Image
          src="/assets/font-shadow/signup-svg.svg"
          alt="Login"
          height={100}
          width={180}
          className=""
        />
        <div
          className=" mb-10 w-[80%] overflow-hidden rounded-3xl p-8 sm:w-[400px] lg:w-[450px] lg:p-12"
          style={{
            border: "1px solid #000",
            background:
              "linear-gradient(267deg, rgba(255, 255, 255, 0.13) -2.1%, rgba(255, 255, 255, 0.00) 121.83%)",
            backdropFilter: "blur(8.550000190734863px)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col">
              {fieldNames.map((field) => (
                <div key={field} className="flex flex-col">
                  <SignUpInput
                    label={
                      field === "ConfirmPassword"
                        ? "Confirm Password"
                        : field.replace(/([A-Z])/g, " $1").trim()
                    }
                    placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                    register={register(field)}
                    type={
                      field === "Password" || field === "ConfirmPassword"
                        ? "password"
                        : "text"
                    }
                    onFocus={field === "Phone" ? handlePhoneFocus : undefined}
                    error={errors[field]}
                  />
                  {errors[field] && (
                    <p className="text-sm text-red-500">
                      {errors[field].message}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex flex-col items-center justify-center gap-4">
                <button
                  className="mt-2 rounded-3xl bg-bg_pink px-10 py-2 font-bold text-white transition-transform hover:scale-105 focus:border-blue-300 focus:shadow-none focus:outline-none focus:ring xl:px-12"
                  type="submit"
                  style={{ boxShadow: "1.5px 1.5px white" }}
                >
                  SignUp
                </button>
                <Link href="/login">
                  <p className="text-base font-medium text-red-500">
                    Already have an account? Log In
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
