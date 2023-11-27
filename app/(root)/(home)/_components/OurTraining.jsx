import Image from "next/image";
import React from "react";

const trainingData = [
  {
    title: "Teaching/Training",
    description:
      "We have the best mentors from industry, certified trainers who will teach you and train you during this course. This course will garnish your knowledge as well as skills and will prepare you for real time projects.  ",
  },
  {
    title: "Real Time Projects",
    description:
      "As, we want to keep the course live and practical so that the candidates will have the practical knowledge as well. One can connect the mentors anytime with their doubts.  ",
  },
  {
    title: "Resume Building ",
    description:
      "At coding commando, we prepare you for the industry interview and guide you regarding resume building in the best way so that it can connect with the senses of the organization and the interviewer. We focus on overall development and hence we make you job ready too.  ",
  },
  {
    title: "Mock Interview",
    description:
      "We will take you in the process of mock interviews wherein you will get in-depth idea of the questions you may face in the interviews. We prepare you to conquer the interviews.",
  },
];
const OurTraining = () => {
  return (
    <div className="w-full px-2 py-4 pb-20">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h1 className="text-4xl font-semibold p-4 lg:text-7xl">
          Our Training Process
        </h1>

        <div className="flex flex-col-reverse space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 lg:px-4 lg:pt-10">
          {/* Box 1 */}
          <div className="flex flex-col space-y-6 sm:w-full lg:w-[70%] lg:pr-10 lg:space-y-10">
            {trainingData &&
              trainingData.map((training) => (
                <div key={training.id} className="flex flex-col space-y-4">
                  <h1 className="text-pink-500 font-syne font-semibold text-2xl leading-7 py-2 lg:text-4xl">
                    {training.title}
                  </h1>
                  <p className="text-base lg:text-lg font-normal">
                    {training.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Box 2 (Image) */}
          <div className=" hidden lg:block w-full sm:w-[30%] lg:w-[30%] px-12">
            <Image
              src="/assets/images/success-svg.svg"
              alt="Success"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTraining;
