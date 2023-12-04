import Image from "next/image";
import React from "react";

const Making = () => {
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
            className="w-full pb-6 pt-10 md:w-[60%] lg:w-[50%]"
          />
          <p className="text-base md:text-lg lg:w-[60%] xl:w-[50%] xl:text-xl">
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

export default Making;
