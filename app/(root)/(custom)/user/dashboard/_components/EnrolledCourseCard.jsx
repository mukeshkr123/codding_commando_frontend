import Image from "next/image";
import React from "react";

const EnrolledCourseCard = ({ course }) => {
  console.log(course.bannerImage);
  return (
    <div className="m-1 max-w-sm  overflow-hidden rounded-[25px] border-2 border-black  bg-dark-purple text-white">
      <div className="  mt-2 flex w-full flex-col justify-center p-4 ">
        <h2 className="max-w-xs text-3xl">{course?.title}</h2>
        <p className="mt-1 max-w-xs text-lg">{course?.description}</p>
      </div>
      <div className="mr-2 flex items-center justify-start gap-4 pr-4">
        <Image
          src={course.bannerImage}
          alt={course?.title}
          width={200}
          height={200}
        />
        <div
          className=" flex flex-col items-center gap-2
        "
        >
          <h3 className=" text-lg text-pink-500">Payment Status</h3>
          <button className="h-8 w-24 rounded-3xl bg-pink-500 ">Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
