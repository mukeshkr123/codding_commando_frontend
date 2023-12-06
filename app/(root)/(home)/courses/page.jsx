import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="h-full w-[100vw]">
      <UnLocking />

      <Courses />
    </div>
  );
}

const UnLocking = () => {
  return (
    <div className="relative h-[690px] w-full bg-[#10001C] text-white">
      <div
        className=" absolute right-0 top-[200px] h-[80%] w-1/2 bg-contain bg-no-repeat md:top-0 md:h-[67%] md:w-[40%] lg:bg-repeat "
        style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
      ></div>
      <div className="h-full w-full ">
        <div
          className=" flex h-[50%] w-full flex-col items-center justify-center  space-y-4 px-12 text-center md:space-y-6 xl:space-y-6
        "
        >
          <Image
            src="assets/font-shadow/making-sense.svg"
            alt="Making Sense with 0 & 1"
            height={200}
            width={200}
            className="w-full pb-4 pt-10 md:w-[60%] lg:w-[50%]"
          />
          <p className="pb-2 text-base md:text-lg lg:w-[60%] xl:w-[50%] xl:text-xl">
            Your pathway to job-ready skills! Our cracked courses transform
            coding complexity into accessible expertise, preparing you for
            in-demand jobs. Join us to bridge your ambitions with opportunities.
          </p>
        </div>

        <div className="relative h-[50%]">
          <Image
            src="/assets/images/background/making-png.png"
            alt="Making"
            width={400}
            height={400}
            objectFit="cover"
            className="h-full w-full rounded-t "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10001C] via-[#10001C] to-transparent opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

const coursesData = [
  {
    id: 1,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course2",
  },
  {
    id: 2,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course2",
  },
  {
    id: 3,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course3",
  },
  {
    id: 4,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course4",
  },
];

const Courses = () => {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center bg-light-white py-8">
      <div className="py-6">
        <h1 className="text-4xl font-bold ">Explore Job Skills</h1>
      </div>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-4 px-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <div key={course.id}>
            <Link href={course.href}>
              <Image
                src={course.imageUrl}
                alt="course image"
                width={300}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
