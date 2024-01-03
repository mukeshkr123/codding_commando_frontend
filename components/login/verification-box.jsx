"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { registerAction } from "GlobalRedux/slices/userSlice";
import apiClient from "lib/api-client";
import { ErrorToast } from "../error-toast";
import { useRouter } from "next/navigation";

const VerificationBox = ({ email }) => {
  const dispatch = useDispatch();
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [isError, setError] = useState(false);
  const [isResendClicked, setResendClicked] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const router = useRouter();

  const { registered } = useSelector((state) => state?.user);

  const handleChange = (index, value) => {
    setError(false);
    if (/^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (index < inputRefs.length - 1 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleVerify = async () => {
    const code = verificationCode.join("");
    if (code.length !== 4 || !/^\d+$/.test(code)) {
      setError(true);
      return;
    }
    const registerData = {
      activationCode: code,
      activationToken: registered?.token,
    };

    try {
      await apiClient.post("/users/activate", registerData);
      toast.success("Registered successfully");
      router.push("/login");
    } catch (error) {
      ErrorToast(error);
    }
    setError(false);
  };

  const handleResend = () => {
    setResendClicked(true);
    dispatch(registerAction(registered?.user));
    toast.success("OTP Resend");
  };

  useEffect(() => {
    let interval;

    if (isResendClicked) {
      setTimer(60);

      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setResendClicked(false);
          }
          return prevTimer > 0 ? prevTimer - 1 : prevTimer;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isResendClicked]);

  return (
    <div className="absolute flex h-full w-full flex-col items-center">
      <div
        className="mt-24 flex max-w-sm flex-col justify-center gap-4 rounded-3xl px-4 py-10 text-center"
        style={{
          border: "1px solid #000",
          background:
            "linear-gradient(267deg, rgba(255, 255, 255, 0.13) -2.1%, rgba(255, 255, 255, 0.00) 121.83%)",
          backdropFilter: "blur(8.550000190734863px)",
        }}
      >
        <h2 className="text-3xl font-semibold">Verify Your Account</h2>
        <p>
          We emailed you the 4-digit code to{" "}
          {registered?.user?.email || "example@gmail.com"}. Enter the code below
          to confirm your email address.
        </p>
        <div className="mt-2 flex items-center justify-center gap-2 text-center">
          {[0, 1, 2, 3].map((index) => (
            <input
              type="tel"
              key={index}
              ref={inputRefs[index]}
              value={verificationCode[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className={`h-16 w-16 rounded-lg border-2 ${
                isError ? "border-red-500" : "border-pink-500"
              } text-center text-5xl font-semibold text-slate-700 outline-none focus:border-pink-700`}
            />
          ))}
        </div>
        {isError && (
          <p className="text-lg font-semibold text-red-500">Invalid OTP</p>
        )}
        <div>
          <Button
            className="mt-2 h-12 w-[60%] rounded-3xl bg-pink-500 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-pink-600"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </div>
        <div>
          <p>If you didn&apos;t receive a code!!</p>
          {isResendClicked ? (
            <p className="">{`Resend in ${timer}s`}</p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={handleResend}
              disabled={isResendClicked}
            >
              RESEND
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationBox;
