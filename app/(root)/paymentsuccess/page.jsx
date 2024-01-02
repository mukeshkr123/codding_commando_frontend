import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = ({ searchParams: { orderid, paymentid } }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex max-w-md flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md">
        <div className="flex items-center justify-center gap-2">
          <FaCheckCircle className="mb-4 text-5xl text-green-500" />
          <h2 className="mb-2 text-2xl font-semibold">Payment Successful!</h2>
        </div>
        <p className="mb-4 text-lg text-gray-600 ">
          Thank you for your payment
        </p>
        <div>
          <p>
            <span className="text-base font-medium text-slate-800">
              Payment ID:-
            </span>
            {paymentid}
          </p>
          <p>
            <span className="text-base font-medium text-slate-800">
              Order ID:-
            </span>{" "}
            {orderid}
          </p>
        </div>

        <Link href="/dashboard">
          <Button className="mt-8 rounded-md bg-blue-500 px-4 py-2 transition duration-300 hover:bg-blue-600">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
