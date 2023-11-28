import Image from "next/image";
import React from "react";

const Shaping = () => {
  return (
    <div className="flex flex-col md:flex-row h-[100vh] xl:h-[90vh] bg-[#10001C] text-white">
      {/* Box 1 */}
      <div className="md:w-1/2 p-4 flex flex-col space-y-2 px-8 xl:px-20 xl:py-20 xl:space-y-8 xl:p-0">
        <h1 className="text-5xl lg:text-7xl font-bold mb-2  ">
          Shaping The <br /> Coder’s Mind
        </h1>
        <p className=" mb-4  xl:text-lg">
          Coding Commando is a community which garnishes your skills and will
          make you job ready. Through its best cracked courses Coding Commando
          is giving you best training under the guidance of industry experts
          having more then 10 years experience.
        </p>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4  py-3 md:py-0">
          <button className="bg-[#F5478E] w-44 font-semibold rounded-[45px] py-2 xl:py-3">
            Talk To us
          </button>
          <button className="w-60 bg-transparent border font-semibold border-white py-2  xl:py-3 rounded-[45px] ">
            Get Job-Ready Skillls
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div className="md:w-1/2 p-4">
        <Image
          src="/assets/images/brain-svg.svg"
          alt="Sample"
          width={500}
          height={300}
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default Shaping;
