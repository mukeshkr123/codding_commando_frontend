"use client";
import React from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";

const BuyProduct = () => {
  const router = useRouter();
  const { userAuth } = useSelector((state) => state?.user);

  const name = userAuth?.firstName + " " + userAuth?.lastName || " ";
  const email = userAuth?.email || " ";
  const phone = userAuth?.phone || " ";

  const makePayment = async ({ courseId }) => {
    const key = "rzp_test_KJ2wNm2bh6OBwD";
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.accessToken}`,
      },
    };

    try {
      // make api call to server
      const {
        data: { order },
      } = await apiClient.get(
        `/courses/${courseId}/payment/create-order`,
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
          console.log(response);

          const responseData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          // Note: Use the correct endpoint for verification
          const { data } = await apiClient.post(
            "/courses/123/payment/verify",
            responseData,
            config
          );

          if (data.success === true) {
            router.push(
              "/paymentsuccess?paymentid=" + response.razorpay_payment_id
            );
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function (response) {
        // Correct event name
        alert("Payment failed. Please try again. Contact support for help");
      });
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <>
      {/* Use the router inside a component or page */}
      <Buy makePayment={makePayment} />
    </>
  );
};

export default BuyProduct;
