import Image from "next/image";
import React from "react";

const chooseData = [
  {
    _id: 1,
    imageUrl: "/assets/icons/book-svg.svg",
    description:
      "We provide the best courses at affordable prices to enhance your skills for conquering the tech world.",
  },
  {
    _id: 2,
    imageUrl: "/assets/icons/root-svg.svg",
    description:
      "Have one-on-one sessions with mentors to get your doubts resolved. We promote easy doubt solving.",
  },
  {
    _id: 3,
    imageUrl: "/assets/icons/book-svg.svg",
    description:
      "Dive into real-time learning with interactive classes, engaging directly with instructors and peers for dynamic understanding.",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-[#10001C] text-white">
      <div className="flex flex-col justify-center items-center py-10 px-2 lg:py-12 ">
        <h1 className="text-white text-shadow-syne text-4xl font-semibold leading-8 lg:text-7xl lg:py-4">
          Why Choose Us
        </h1>
        <div className="flex  flex-col space-y-4 mt-8 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-8 ">
          {chooseData &&
            chooseData.map((data) => (
              <div
                key={data._id}
                className="flex flex-col justify-center items-center bg-slate-600 text-center py-14 space-y-6 rounded-2xl px-6 backdrop-blur-17 w-full"
              >
                <Image
                  src={data.imageUrl}
                  alt={`Illustration for ${data.description}`}
                  width={70}
                  height={70}
                  className="w-auto h-auto"
                />
                <p className="text-base font-normal md:text-lg">
                  {data.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
