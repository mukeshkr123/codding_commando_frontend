import Image from "next/image";
import React from "react";

const Making = () => {
  return (
    <div className="w-full bg-[#10001C] h-[690px] text-white">
      <div className="h-full w-full ">
        <div
          className="h-[60%]  w-full flex justify-center items-center flex-col px-12  space-y-4 md:space-y-6 xl:space-y-8 text-center xl:pt-18
        "
        >
          <h1 className="text-5xl md:text-6xl lg:leading-[90px] xl:leading-[100px] xl:text-8xl font-semibold">
            Making sense <br /> with 0 & 1
          </h1>
          <p className="text-base md:text-lg xl:text-xl lg:w-[60%] xl:w-[50%]">
            Your pathway to job-ready skills! Our cracked courses transform
            coding complexity into accessible expertise, preparing you for
            in-demand jobs. Join us to bridge your ambitions with opportunities.
          </p>
        </div>

        <div className="h-[40%]  ">
          <Image
            src="/assets/images/background/making-png.png"
            alt="Making"
            width={400}
            height={400}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Making;
