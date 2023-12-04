import Image from "next/image";
import React from "react";

const Shaping = () => {
  return (
    <div className="flex  flex-col bg-dark-purple text-white  md:flex-row xl:max-h-[90vh] xl:py-12 xl:pb-16">
      <div className="flex flex-col space-y-6 p-4 px-8 md:w-1/2 xl:space-y-8  xl:p-20">
        <Image
          src="/assets/shapping-svg.svg"
          alt="Shapping"
          height={200}
          width={200}
          className="w-full "
        />

        <p className=" mb-4 md:text-lg  xl:text-xl">
          Coding Commando is a community which garnishes your skills and will
          make you job ready. Through its best cracked courses Coding Commando
          is giving you best training under the guidance of industry experts
          having more then 10 years experience.
        </p>
        <div className="md4:space-x-6 flex flex-col space-y-4 py-3 md:flex-row md:space-y-0 md:py-0 xl:space-x-7">
          <button
            className="w-44  rounded-[45px] bg-[#F5478E] py-2 font-semibold transition-transform hover:scale-105 focus:border-blue-300 focus:outline-none focus:ring md:text-xl md:font-bold xl:px-2 xl:py-3"
            style={{ boxShadow: "1.5px 1.5px white" }}
          >
            <p>Talk To Us</p>
          </button>

          <button
            className="w-60 rounded-[45px] border border-white bg-transparent px-4 py-2 font-semibold transition-transform hover:scale-105 focus:border-blue-300 focus:outline-none focus:ring xl:py-3"
            style={{ boxShadow: "2.5px 3.5px 6px 0.5px rgba(234, 56, 152, 1)" }}
          >
            <p>Get Job-Ready Skills</p>
          </button>
        </div>
      </div>

      <div
        className="bg-cover md:w-1/2"
        style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
      >
        <Image
          src="/assets/images/brain-svg.svg"
          alt="Sample"
          width={200}
          height={200}
          className="h-[90%] w-[92%] rounded sm:h-[75%] xl:h-full xl:w-full"
        />
      </div>
    </div>
  );
};

export default Shaping;
