import Image from "next/image";
import React from "react";

const Making = () => {
  return (
    <div className="w-full relative bg-[#10001C] h-[690px] text-white">
      <div
        className=" absolute h-[80%] w-1/2 md:h-[67%] md:w-[40%] right-0 top-[200px] bg-no-repeat lg:bg-repeat md:top-0 bg-contain "
        style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
      ></div>
      <div className="h-full w-full ">
        <div
          className="h-[50%]  w-full flex justify-center items-center flex-col px-12  space-y-4 md:space-y-6 xl:space-y-8 text-center xl:pt-18
        "
        >
          {/* <h1 className="text-5xl md:text-6xl lg:leading-[90px] xl:leading-[100px] xl:text-8xl font-semibold">
            Making sense <br /> with 0 & 1
          </h1> */}

          <Image
            src="assets/font-shadow/making-sense.svg"
            alt="Making Sense with 0 & 1"
            height={200}
            width={200}
            className="w-full md:w-[60%] lg:w-[50%] pt-16 pb-6"
          />
          <p className="text-base md:text-lg xl:text-xl lg:w-[60%] xl:w-[50%]">
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
            className="w-full h-full rounded-t"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10001C] via-[#10001C] to-transparent opacity-52"></div>
        </div>
      </div>
    </div>
  );
};

export default Making;
