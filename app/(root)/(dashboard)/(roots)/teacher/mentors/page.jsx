import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MentorPage = () => {
  return (
    <div>
      <Link href="/teacher/mentors/create">
        <Button>New Mentors</Button>
      </Link>
    </div>
  );
};

export default MentorPage;
