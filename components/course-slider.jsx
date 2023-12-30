"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const courses = [
  // TOD0: Beautiful transition
  {
    id: 1,
    title: "Course 1",
    image: "/assets/images/courses/course-1.png",
    href: "/courses",
  },
  {
    id: 2,
    title: "Course 2",
    image: "/assets/images/courses/course-1.png",
    href: "/courses",
  },
  {
    id: 3,
    title: "Course 3",
    image: "/assets/images/courses/course-1.png",
    href: "/courses",
  },
  {
    id: 4,
    title: "Course 4",
    image: "/assets/images/courses/course-1.png",
    href: "/courses",
  },
];

const CourseSlider = () => {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const { title, image, href } = courses[currentCourse];

  const startAutoSlide = () => {
    const id = setInterval(() => {
      goToNextCourse();
    }, 5000);
    setIntervalId(id);
  };

  const stopAutoSlide = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const goToNextCourse = () => {
    setCurrentCourse((prevCourse) =>
      prevCourse === courses.length - 1 ? 0 : prevCourse + 1
    );
  };

  const goToPrevCourse = () => {
    setCurrentCourse((prevCourse) =>
      prevCourse === 0 ? courses.length - 1 : prevCourse - 1
    );
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentCourse]);

  return (
    <div
      className="w-full overflow-hidden px-8 py-2 xl:px-0"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="relative flex items-center">
        <Image
          src="/assets/icons/left-arrow.svg"
          alt="left arrow"
          height={30}
          width={30}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer xl:left-6"
          onClick={goToNextCourse}
        />
        <div className="w-full">
          <Link href={href}>
            <Image
              src={image}
              alt={title}
              height={500}
              width={1300}
              className="w-full"
            />
          </Link>
        </div>

        <Image
          src="/assets/icons/right-arrow.svg"
          alt="right arrow"
          height={30}
          width={30}
          onClick={goToPrevCourse}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer xl:right-6"
        />
      </div>
    </div>
  );
};

export default CourseSlider;
