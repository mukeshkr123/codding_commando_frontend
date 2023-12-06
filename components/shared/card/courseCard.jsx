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
    <div className="m-1 max-h-[26rem] max-w-[26rem] overflow-hidden rounded-3xl border-2 border-black bg-neutral-700 text-white">
      <div className="flex flex-col gap-2 p-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={profilePicture}
          alt={title}
          height={220}
          width={220}
          className="w-[55%]"
        />
        <div className="mt-14 flex flex-col items-center gap-2 pl-2">
          <p className="text-lg font-bold text-[#F5478E]">{duration}</p>
          <Link href={`/course/${courseId}`}>
            <button className="rounded-[45px] bg-[#F5478E] px-10 py-2 text-lg font-bold text-black">
              Learn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
