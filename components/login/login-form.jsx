"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserAction } from "GlobalRedux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { MdLockOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as z from "zod";
import { LoginInput } from "./login-input";

const loginSchema = z.object({
  email: z.string().email({ message: "Enter a Valid Email!" }),
  password: z.string().min(6, { message: "Enter a Valid Password" }),
});

export const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(loginUserAction(data));
    reset();
  };

  const { userAuth } = useSelector((state) => state?.user);
  if (userAuth) {
    router.push("/");
  }

  return (
    <div
      className="w-[80%] overflow-hidden rounded-3xl p-12 sm:w-[400px] lg:w-[450px]"
      style={{
        border: "1px solid #000",
        background:
          "linear-gradient(267deg, rgba(255, 255, 255, 0.13) -2.1%, rgba(255, 255, 255, 0.00) 121.83%)",
        backdropFilter: "blur(8.550000190734863px)",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center border-b">
              <CgProfile className="mr-2" />
              <LoginInput
                label="Email"
                placeholder="Email"
                register={register("email")}
                type="text"
                error={errors.email}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center border-b">
              <MdLockOutline />
              <LoginInput
                label="Password"
                placeholder="Password"
                register={register("password")}
                type="password"
                error={errors.password}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/signup">
              <p className="text-base font-normal text-red-500">
                Forgot Password
              </p>
            </Link>

            <button
              className="rounded-3xl bg-bg_pink px-10 py-2 font-bold text-white transition-transform hover:scale-105 focus:border-blue-300 focus:shadow-none focus:outline-none focus:ring xl:px-12"
              type="submit"
              style={{ boxShadow: "1.5px 1.5px white" }}
            >
              Submit
            </button>

            <Link href="/signup">
              <p className="text-base font-medium text-red-500">
                New Here? SignUp
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
