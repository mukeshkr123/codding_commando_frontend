"use client";

import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import apiClient from "lib/api-client";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const StrategyActions = ({
  disabled,
  courseId,
  strategyId,
  isPublished,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);

  const config = {
    headers: {
      Authorization: `Bearer ${userAuth?.accessToken}`,
    },
  };

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await apiClient.patch(
          `/courses/${courseId}/strategy/${strategyId}/unpublish`,
          {},
          config
        );
        toast.success("Strategy unpublished");
      } else {
        await apiClient.patch(
          `/courses/${courseId}/strategy/${strategyId}/publish`,
          {},
          config
        );
        toast.success("Strategy published");
      }
      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await apiClient.delete(
        `/courses/${courseId}/strategy/${strategyId}`,
        config
      );

      toast.success("Strategy deleted");
      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
