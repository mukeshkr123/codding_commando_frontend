"use client";

import apiClient from "lib/api-client";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import ConfirmModal from "@/components/modals/confirm-modal";
import { useConfettiStore } from "hooks/use-confetti-store";
import { useSelector } from "react-redux";

export const Actions = ({ disabled, mentorId, isPublished }) => {
  const router = useRouter();
  const confetti = useConfettiStore();
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
        await apiClient.patch(`/mentors/${mentorId}/unpublish`, {}, config);
        toast.success("Mentor unpublished");
      } else {
        await apiClient.patch(`/mentors/${mentorId}/publish`, {}, config);
        toast.success("Mentor published");
        confetti.onOpen();
      }
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await apiClient.delete(`/mentors/${mentorId}`, config);

      toast.success("Mentors deleted");
      router.refresh();
      router.push(`/teacher/mentors`);
    } catch {
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
