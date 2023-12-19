import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <div className="m-4 flex w-full">
      <Link href="/teacher/create">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Course
        </Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
