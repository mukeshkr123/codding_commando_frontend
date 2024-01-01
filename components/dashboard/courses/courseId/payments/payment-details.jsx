import { IconBadge } from "@/components/icon-bagde";
import { CircleDollarSign } from "lucide-react";
import React, { useEffect, useState } from "react";
import FullPriceForm from "./full-price-form";
import InstallMentPriceForm from "./installment-price-form";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";
import PaymentCourseImage from "./couse-payment-imageForm";
import { PaymentDescriptionForm } from "./payment-description-form";

export const PaymentDetails = ({ initialData, courseId }) => {
  const [paymentData, setPaymentData] = useState([]);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchPaymentData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient.get(
        `/courses/${courseId}/payment-details`,
        config
      );
      setPaymentData(data?.paymentDetail);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);

  return (
    <div>
      <div className=" flex items-center gap-x-2">
        <IconBadge icon={CircleDollarSign} />
        <h2 className="text-xl">Sell your course</h2>
      </div>
      <FullPriceForm initialData={paymentData} courseId={courseId} />
      <InstallMentPriceForm initialData={paymentData} courseId={courseId} />
      <PaymentDescriptionForm initialData={paymentData} courseId={courseId} />
      <PaymentCourseImage initialData={paymentData} courseId={courseId} />
    </div>
  );
};
