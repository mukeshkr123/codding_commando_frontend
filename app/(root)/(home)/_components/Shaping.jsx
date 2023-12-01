import Image from "next/image";
import React from "react";

const Shaping = () => {
  return (
    <div className="flex  flex-col md:flex-row xl:max-h-[90vh]  bg-[#10001C] text-white xl:py-12 xl:pb-16">
      {/* Box 1 */}
      <div className="md:w-1/2 p-4 flex flex-col space-y-2 px-8 xl:px-20 xl:py-20 xl:space-y-8 xl:p-0">
        <h1 className="text-5xl lg:text-7xl xl:text-7.5xl font-bold mb-2  xl:leading-[92px] ">
          Shaping The <br /> Coder’s Mind
        </h1>
        <p className=" mb-4 md:text-lg  xl:text-xl">
          Coding Commando is a community which garnishes your skills and will
          make you job ready. Through its best cracked courses Coding Commando
          is giving you best training under the guidance of industry experts
          having more then 10 years experience.
        </p>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md4:space-x-6 py-3 md:py-0 xl:space-x-7">
          <button
            className="bg-[#F5478E] w-44 font-semibold md:font-bold md:text-xl rounded-[45px] py-2 xl:py-3 xl:px-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
            style={{ boxShadow: "1.5px 1.5px white" }}
          >
            <p>Talk To Us</p>
          </button>

          <button
            className="w-60 bg-transparent border font-semibold border-white py-2 px-4 xl:py-3 rounded-[45px] transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
            style={{ boxShadow: "2.5px 3.5px 6px 0.5px rgba(234, 56, 152, 1)" }}
          >
            <p>Get Job-Ready Skills</p>
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div
        className="md:w-1/2 bg-cover"
        style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
      >
        <Image
          src="/assets/images/brain-svg.svg"
          alt="Sample"
          width={200}
          height={200}
          className="w-[90%] h-[90%] sm:h-[75%] xl:h-full xl:w-full rounded"
        />
      </div>
    </div>
  );
};

export default Shaping;
