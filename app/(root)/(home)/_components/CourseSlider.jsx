"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const courses = [
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
      className=" w-full overflow-hidden px-3 "
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="relative flex items-center">
        <FaArrowLeft
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-500"
          onClick={goToPrevCourse}
        />
        <div className="w-full">
          <Link href="/courses">
            <Image
              src={courses[currentCourse].image}
              alt={courses[currentCourse].title}
              height={500}
              width={1300}
              className="w-full"
            />
          </Link>

          <h3 className="mt-2 text-lg font-semibold">
            {courses[currentCourse].title}
          </h3>
        </div>
        <FaArrowRight
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-500"
          onClick={goToNextCourse}
        />
      </div>
    </div>
  );
};

export default CourseSlider;
