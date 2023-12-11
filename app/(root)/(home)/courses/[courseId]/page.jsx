import Image from "next/image";
import Link from "next/link";
import React from "react";

const courseData = {
  _id: 1,
  title: "Complete Salesforce Training Admin, LWC and Development",
  duration: "3 Months",
  trainingMode: "Live Classes & Recorded Sessions",
  description:
    "After completing the Complete Salesforce Training Admin, LWC and Development, you will be able to optimize Salesforce configurations, troubleshoot difficulties, design custom solutions, and administer Salesforce with skill. With these abilities, you'll be able to work with teams with assurance and get ready to get certified in Salesforce, making you a priceless asset to any company.",
};

const CoursePage = () => {
  return (
    <div className="flex  w-full flex-col  overflow-hidden ">
      <div className="flex w-full flex-col items-center justify-center bg-dark-purple px-4  py-12 text-center text-white">
        <h1 className=" mt-2 max-w-5xl text-3xl font-semibold leading-[1.3]  sm:text-4xl md:mt-6 md:text-5xl lg:leading-[1.3] xl:text-6xl">
          {courseData.title}
        </h1>
        <div className="mt-4 flex flex-col items-center gap-2 text-center lg:mt-8">
          <p className="text-base md:text-lg xl:text-xl">
            Total Duration:
            <span className="font-semibold capitalize text-[#F5478E]">
              {courseData.duration}
            </span>
          </p>
          <p className="text-base md:text-lg xl:text-xl">
            Training Mode:
            <span className=" font-semibold  capitalize text-[#F5478E]">
              {courseData.trainingMode}
            </span>
          </p>
        </div>
        <div className="rounded-custom bg-gradient-custom from-custom via-custom backdrop-blur-custom mx-1 mt-4 max-w-5xl p-6 md:p-8 lg:mt-8 lg:p-12">
          <p className="text-base md:text-lg">{courseData.description}</p>
        </div>
        <div className="mt-6 flex flex-col gap-6 md:mb-8 md:flex-row lg:mt-10 lg:gap-8">
          <Link href="/">
            <button className="button-white-shadow rounded-3xl bg-pink-500 px-8 py-2 text-base font-semibold capitalize transition-transform hover:scale-105 sm:text-lg">
              Enroll Now!
            </button>
          </Link>
          <Link href="/">
            <button className="button-pink-shadow rounded-3xl border border-white bg-transparent px-10 py-1.5 text-base transition-transform hover:scale-105 sm:text-lg  ">
              Book Yourself A{" "}
              <span className="font-semibold text-pink-500">Free</span> Demo
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-light-white px-4 py-12 text-center">
        <h1 className="text-3xl font-bold  capitalize sm:text-4xl">
          Curriculum Strategy
        </h1>
        <div className="mt-8">
          <div className="flex w-full gap-4">
            <Image
              src="/assets/icons/strat-1.svg"
              alt="icon"
              height={60}
              width={60}
            />
            <div className="flex max-w-[22rem] flex-col  text-start">
              <h2 className="text-lg font-bold">Mentor-Guided Instruction</h2>
              <p>Learn under the guidance of seasoned mentors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
