import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CourseCard = ({
  title,
  description,
  duration,
  imageUrl,
  profilePicture, // to delete
  _id,
}) => {
  return (
    <div
      className="relative m-1 max-h-[20rem] max-w-[20rem] overflow-hidden rounded-[25px] border-2 border-[#000000] bg-[#10001c] bg-cover bg-bottom bg-no-repeat text-white sm:max-h-[36rem] sm:max-w-[26rem]"
      style={{
        backgroundImage: 'url("/assets/images/background/course-bg.svg")',
      }}
    >
      <div className="flex flex-col gap-2 p-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="text-base sm:text-lg">{description}</p>
      </div>
      <div className="relative flex items-center gap-6">
        <Image
          src={profilePicture || "assets/images/courses/course1-profile.svg"} //  TODO : fix the issue of image
          alt={title}
          height={220}
          width={220}
          className="w-[45%] sm:w-[55%]"
        />
        <div className="mt-4 flex flex-col items-center gap-2 pl-2 sm:mt-14">
          <p className="text-base font-bold text-[#F5478E] sm:text-lg">
            {duration}
          </p>
          <Link href={`/courses/${_id}`}>
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
