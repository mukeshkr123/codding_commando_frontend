"use client";
import React from "react";
import { useRouter } from "next/navigation";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const BuyProduct = ({ children, courseId }) => {
  const router = useRouter();
  const { userAuth } = useSelector((state) => state?.user);

  const name = userAuth?.firstName + " " + userAuth?.lastName || " ";
  const email = userAuth?.email || " ";
  const phone = userAuth?.phone || " ";

  const makePayment = async () => {
    if (!userAuth) {
      router.push("/login");
      return;
    }

    const key = "rzp_test_SsZQw7VSzw5bCq";
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.accessToken}`,
      },
    };

    try {
      // Make an API call to create the order on the server
      const {
        data: { order },
      } = await apiClient.post(
        `/courses/${courseId}/payment/create-order`,
        {},
        config
      );

      const options = {
        key,
        name: order?.notes?.paymentFor || "Enrolling a course",
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        description: order?.notes?.description || "Buying a course",
        image: order?.notes?.imageUrl || " ",
        prefill: {
          name,
          email,
          contact: phone,
        },
        handler: async function (response) {
          const responseData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            amount: order.amount,
          };

          // Verify the payment on the server
          const { data } = await apiClient.post(
            `/courses/${courseId}/payment/verify`,
            responseData,
            config
          );

          if (data.success === true) {
            router.push(
              `/paymentsuccess?paymentid=${response.razorpay_payment_id}&orderid=${response.razorpay_order_id}`
            );
          }
        },
      };

      // Create a payment object and open the payment modal
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      // Handle payment failure
      paymentObject.on("payment.failed", function (response) {
        alert("Payment failed. Please try again. Contact support for help");
      });
    } catch (error) {
      console.error("Error making payment:", error);
      toast.error("Something went wrong");
    }
  };

  return <div onClick={makePayment}>{children}</div>;
};
