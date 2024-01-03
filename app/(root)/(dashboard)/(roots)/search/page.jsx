import React from "react";
import { CourseList } from "@/components/dashboard/search/course-list";
import { SearchInput } from "@/components/dashboard/search/search-input";

const SearchPage = () => {
  return (
    <div className="space-y-4 p-6">
      <div className="block px-6 pt-6 md:mb-0 md:hidden">
        <SearchInput />
      </div>

      <div>
        <h2 className="text-2xl font-medium text-slate-800">Courses</h2>
        <CourseList />
      </div>
    </div>
  );
};

export default SearchPage;
