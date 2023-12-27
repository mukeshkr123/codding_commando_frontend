import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import apiClient from "lib/api-client";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
});

const MentorNameForm = ({ initialData, mentorId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      toast.promise(apiClient.patch(`/mentors/${mentorId}`, values, config), {
        loading: "Updating course...",
        success: "Course updated",
        error: "Something went wrong",
      });

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
        Mentor Name
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit name
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className="mt-2 text-sm">{initialData?.name}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web development'"
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

export default MentorNameForm;
