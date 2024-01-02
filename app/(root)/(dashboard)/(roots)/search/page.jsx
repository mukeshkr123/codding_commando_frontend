import { CourseList } from "@/components/dashboard/search/course-list";

const SearchPage = () => {
  return (
    <>
      <div className="block px-6 pt-6 md:mb-0 md:hidden">SearchInput</div>
      <div className=" space-y-4 p-6">
        <h2 className="text-2xl font-medium text-slate-800">Courses</h2>
        <CourseList />
      </div>
    </>
  );
};

export default SearchPage;
