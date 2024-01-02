"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";

export const ProgramDescriptionForm = ({
  initialData,
  courseId,
  programId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((current) => !current);

  const formSchema = z.object({
    description: z.string().min(1, {
      message: "Description is required",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      await toast.promise(
        apiClient.patch(
          `/courses/${courseId}/program/${programId}/update`,
          values,
          config
        ),
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

  const handleDelete = async (descriptionId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      await toast.promise(
        apiClient.delete(
          `/courses/${courseId}/program/${programId}/${descriptionId}`,
          config
        ),
        {
          loading: "Description deleting...",
          success: "Description deleted",
          error: "Something went wrong",
        }
      );
    } catch (error) {
      console.error(error);
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
        Course description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Add description
            </>
          )}
        </Button>
      </div>

      {!isEditing &&
        (initialData?.description?.length > 0 ? (
          <div className="flex flex-col gap-1 ">
            {initialData?.description.map((program) => (
              <div
                key={program?._id}
                className="flex items-center justify-between rounded-md border-2 border-slate-200 px-4 py-2 text-slate-700 "
              >
                <p className="text-sm">{program?.title}</p>
                <Trash
                  className="h-5 w-5 cursor-pointer hover:bg-sky-100 hover:text-sky-700"
                  onClick={() => handleDelete(program?._id)}
                />
              </div>
            ))}
          </div>
        ) : (
          "No description"
        ))}

      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. 'This course is about...'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Add description
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
