"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import apiClient from "lib/api-client";
import { formatPrice } from "lib/format";
import { cn } from "lib/utils";
import { useSelector } from "react-redux";

const formSchema = z.object({
  fullPrice: z.coerce.number(),
});

const FullPriceForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullPrice: initialData?.fullPrice || undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (value) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      toast.promise(
        apiClient.patch(`/courses/${courseId}/payment-details`, value, config),
        {
          loading: "Updating course...",
          success: "Course updated",
          error: "Something went wrong",
        }
      );

      toggleEdit();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (isEditing) {
      router.refresh();
    }
  }, [isEditing, router]);

  return (
    <div className="mt-6 rounded-md border bg-slate-100 p-4">
      <div className="flex items-center justify-between font-medium">
        Full price
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit price
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "text-sm mt-2",
            !initialData?.fullPrice && "text-slate-500 italic"
          )}
        >
          {initialData?.fullPrice
            ? formatPrice(initialData?.fullPrice)
            : "No price"}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="fullPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      disabled={isSubmitting}
                      placeholder="Set  fullPrice for your course"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default FullPriceForm;
