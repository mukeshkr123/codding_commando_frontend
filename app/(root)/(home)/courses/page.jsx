import React from "react";
import Image from "next/image";
import { CourseList } from "@/components/courses/course-list";

export default function CoursePage() {
  return (
    <div className="h-full w-full bg-light-white">
      <section
        className="relative h-[690px] w-full max-w-full overflow-hidden bg-[#10001C] bg-no-repeat text-white"
        style={{
          backgroundImage: 'url("/assets/images/background/demo-png.png")',
          backgroundPosition: "bottom",
          backgroundSize: "100% 70%",
        }}
      >
        <div
          className="absolute right-0 top-[200px] h-[80%] w-1/2 bg-contain bg-no-repeat md:top-0 md:h-[67%] md:w-[40%] lg:bg-repeat"
          style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
        ></div>
        <div className="h-full w-full">
          <div className="flex h-[50%] w-full flex-col items-center justify-center space-y-4 px-12 text-center md:space-y-6 xl:space-y-6">
            <Image
              src="/assets/font-shadow/unlock-text.svg"
              alt="Making Sense with 0 & 1"
              height={200}
              width={200}
              className="w-full pb-4 pt-10 md:w-[60%] lg:w-[50%]"
            />
            <p className="pb-2 text-base md:text-lg lg:w-[60%] xl:w-[50%] xl:text-xl">
              Your pathway to job-ready skills! Our cracked courses transform
              coding complexity into accessible expertise, preparing you for
              in-demand jobs. Join us to bridge your ambitions with
              opportunities.
            </p>
          </div>
        </div>
      </section>{" "}
      <div
        className="relative flex w-full flex-col items-center justify-center bg-cover bg-no-repeat py-10 xl:mt-4"
        style={{
          backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
        }}
      >
        <div className="my-12 flex w-full items-center justify-center xl:my-20">
          <Image
            src="/assets/font-shadow/explore-course.svg"
            alt="Explore Courses"
            height={200}
            width={400}
            className="w-[90%] lg:w-[80%] xl:w-[60%]"
          />
        </div>
        <CourseList />
      </div>
    </div>
  );
}
