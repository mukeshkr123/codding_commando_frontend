import React from "react";
import { Categories } from "@/components/dashboard/search/categories";

const categories = [
  { id: "1c5339ea-b7ef-4521-90e6-39441eadeafc", name: "Accounting" },
  {
    id: "b72a6e9a-c9c5-43d2-8902-129626391a61",
    name: "Computer Science",
  },
  { id: "5cfc5816-b251-4678-826c-ec6c25aeeb53", name: "Engineering" },
  { id: "47c8a3d2-6ce8-4a2e-8e26-2f5a4ccb5100", name: "Filming" },
  { id: "78cff42a-0848-4557-9df2-d8a5d5057932", name: "Fitness" },
  { id: "62f28e8f-1b1a-4d5c-a16d-e3796887a308", name: "Music" },
  { id: "b3d7eb7c-31a5-430b-8628-b5721aae8c9d", name: "Photography" },
];

const SearchPage = () => {
  return (
    <>
      <div className="block px-6 pt-6 md:mb-0 md:hidden">SearchInput</div>
      <div className=" space-y-4 p-6">
        <Categories items={categories} /> CourseList
      </div>
    </>
  );
};

export default SearchPage;
