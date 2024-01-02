"use client";

import Image from "next/image";
import { useState } from "react";

export const MentorCard = ({
  src,
  alt,
  name,
  description,
  additionalDetails,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative max-w-[350px]">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={alt || "Profile Picture"}
          width={150}
          height={100}
          className="mx-auto h-[250px] md:h-[353px] lg:w-[250px]"
        />
        <div className="relative z-10 cursor-pointer p-4">
          <h1 className="py-4 text-2xl font-semibold md:text-4xl">{name}</h1>
          <p className="text-lg lg:text-xl">{description}</p>
        </div>
        {isHovered && (
          <div className="absolute left-[-100px] top-52 z-20 hidden h-[26%] w-[88%] items-center justify-center overflow-hidden rounded-3xl border border-black bg-transparent p-5 backdrop-blur-md md:block lg:flex">
            <ul className="flex w-full list-disc flex-col items-start justify-center p-2 text-start">
              {additionalDetails &&
                additionalDetails.map((item) => (
                  <li key={item.id}>
                    <p className="text-base font-normal">{item.title}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
