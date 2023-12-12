import Image from "next/image";
import React from "react";
import Courses from "../dashboard/_components/Courses";

const MyLearningPage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <section className="relative flex h-[700px] w-full flex-col justify-between bg-dark-purple">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/background/bg-svg.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className=" absolute right-0 top-[200px] h-[80%] w-1/2 bg-contain bg-no-repeat md:top-0 md:h-[67%] md:w-[40%] lg:bg-repeat "
          style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
        ></div>

        <div className="flex h-[40%] w-full  items-center justify-center">
          <h1 className=" mt-12 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Welcome Akash!
          </h1>
        </div>
      </section>
      <Courses />
    </div>
  );
};

export default MyLearningPage;
