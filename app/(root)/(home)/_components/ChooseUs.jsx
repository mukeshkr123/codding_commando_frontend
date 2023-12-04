import Image from "next/image";
import React from "react";
import OurTraining from "./OurTraining";

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
    imageUrl: "/assets/icons/camera.svg",
    description:
      "Dive into real-time learning with interactive classes, engaging directly with instructors and peers for dynamic understanding.",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-dark-purple px-8 text-white xl:px-20">
      <div className="flex flex-col items-center justify-center px-2 py-10 lg:py-12 ">
        <Image
          src="/assets/font-shadow/choose.svg"
          alt="Choose Us"
          height={200}
          width={300}
          className="w-[80%] md:w-[55%] md:py-4"
        />
        <div className="mt-8  flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 lg:space-x-12 ">
          {chooseData &&
            chooseData.map((data) => (
              // Box
              <div
                key={data._id}
                className=" flex w-full flex-col   items-center justify-center space-y-6 rounded-2xl px-6 py-14 text-center"
                style={{
                  background:
                    " linear-gradient(267deg, rgba(255, 255, 255, 0.13) -2.1%, rgba(255, 255, 255, 0.00) 121.83%)",
                  backdropFilter: "blur(16.549999237060547px)",
                }}
              >
                <Image
                  src={data.imageUrl}
                  alt={`Illustration for ${data.description}`}
                  width={70}
                  height={70}
                  className="h-auto w-auto"
                />
                <p className="text-base font-normal md:text-lg">
                  {data.description}
                </p>
              </div>
            ))}
        </div>
      </div>
      <OurTraining />
    </div>
  );
};

export default ChooseUs;
