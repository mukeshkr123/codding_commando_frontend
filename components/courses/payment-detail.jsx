// PaymentDetails.js
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PaymentCard } from "./payment-card";
import { BuyProduct } from "../razorpay/BuyProduct";

export const PaymentDetails = ({
  title,
  description,
  fullPrice,
  installments = "Three",
  courseId,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-dark-purple px-4 py-12 text-white md:items-start md:px-8 md:text-start lg:px-16 xl:px-24">
      <div className="flex h-full w-full flex-col items-center justify-center md:flex-row md:items-start">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-2 py-4 text-start md:items-start md:text-start">
          <h1 className="max-w-sm text-3xl font-bold lg:max-w-xl lg:text-4xl ">
            {title}
          </h1>
          <p className="max-w-sm text-base lg:max-w-xl">{description}</p>
        </div>
        <div
          className="absolute top-20 z-0 hidden h-full w-1/2 bg-no-repeat lg:right-0 lg:flex"
          style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
        ></div>
        <div className="z-10 mt-4 flex h-1/2 w-full items-center justify-center bg-cover lg:mt-5">
          <Image
            src="\assets\images\payment-img.svg"
            alt="course-image"
            width={400}
            className="inset-1"
            height={350}
          />
        </div>
      </div>

      <div
        className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:mt-0 md:items-start md:text-start"
        id="enroll"
      >
        <h2 className="mb-6 text-4xl font-bold md:mt-6 md:text-start">
          You Pay
        </h2>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <BuyProduct courseId={courseId} method="One Time">
            <PaymentCard price={fullPrice} desc="One Time" /> {/* Method 1 */}
          </BuyProduct>
          <PaymentCard title={`Or Pay In ${installments} Easy Installments`} />
          {/* Method 2 */}
        </div>

        <Link href="/demo" className="mt-10">
          <button className="button-pink-shadow rounded-3xl border border-white bg-transparent px-10 py-1.5 text-base transition-transform hover:scale-105 sm:text-lg  ">
            Book Yourself A{" "}
            <span className="font-semibold text-pink-500">Free</span> Demo
          </button>
        </Link>
      </div>
    </div>
  );
};
