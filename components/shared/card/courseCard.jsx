import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({
  title,
  description,
  duration,
  courseId,
  profilePicture,
}) => {
  if (!title || !description || !duration || !courseId || !profilePicture) {
    console.error("Missing required props for CourseCard");
    return null;
  }

  return (
    <div className="relative m-1 max-h-[20rem] max-w-[20rem] overflow-hidden rounded-3xl border-2 border-[#000000] bg-[#10001c] text-white sm:max-h-[36rem] sm:max-w-[26rem]">
      <div className="flex flex-col gap-2 p-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="text-base sm:text-lg ">{description}</p>
      </div>
      <div className="relative flex items-center gap-6">
        <Image
          src={profilePicture}
          alt={title}
          height={220}
          width={220}
          className="w-[45%]  sm:w-[55%]"
        />
        <div className="mt-4 flex flex-col items-center gap-2 pl-2 sm:mt-14">
          <p className=" text-base font-bold text-[#F5478E] sm:text-lg">
            {duration}
          </p>
          <Link href={`/course/${courseId}`}>
            <button
              className="rounded-[45px] bg-[#F5478E] px-6 text-lg font-bold text-black sm:px-9 sm:py-1.5"
              style={{ boxShadow: "1.5px 1.5px white" }}
            >
              Learn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
