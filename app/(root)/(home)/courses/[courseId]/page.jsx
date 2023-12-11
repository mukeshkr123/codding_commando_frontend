import Link from "next/link";
import React from "react";
import CuriculumCard from "../_components/CuriculumCard";
import ProgramCard from "../../../../../components/shared/card/programCard";
import MeetMentor from "../../_components/MeetMentor";
import PayMentDetail from "../../../../../components/shared/payment/PayMentDetail";

const courseData = {
  _id: 1,
  title: "Complete Salesforce Training Admin, LWC and Development",
  duration: "3 Months",
  trainingMode: "Live Classes & Recorded Sessions",
  description:
    "After completing the Complete Salesforce Training Admin, LWC and Development, you will be able to optimize Salesforce configurations, troubleshoot difficulties, design custom solutions, and administer Salesforce with skill. With these abilities, you'll be able to work with teams with assurance and get ready to get certified in Salesforce, making you a priceless asset to any company.",

  strategy: [
    {
      _id: 1,
      imageUrl: "/assets/icons/strat-1.svg",
      title: " Mentor-Guided Instruction",
      description: " Learn under the guidance of seasoned mentors",
    },
    {
      _id: 2,
      imageUrl: "/assets/icons/strat-2.svg",
      title: "Real-World Application",
      description:
        "Gain practical experience through industry-specific projects",
    },
    {
      _id: 3,
      imageUrl: "/assets/icons/strat-3.svg",
      title: "Interactive Challenges",
      description: "Engage in group activities for innovative problem-solving",
    },
    {
      _id: 4,
      imageUrl: "/assets/icons/strat-4.svg",
      title: "Tailored Learning Path",
      description:
        "Customize your education with hands-on tasks, quizzes, and practical projects",
    },
    {
      _id: 5,
      imageUrl: "/assets/icons/strat-5.svg",
      title: " Collaborative Learning Community",
      description: "Expand your professional network while learning from peers",
    },
    {
      _id: 6,
      imageUrl: "/assets/icons/strat-6.svg",
      title: "Job-Ready Curriculum",
      description:
        "Acquire skills that align with industry demands for immediate employability",
    },
  ],
  curriculum: [
    {
      _id: 1,
      title: "Data Modelling",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 2,
      title: "UI Customization",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 3,
      title: "Data Management",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 4,
      title: "Data Management",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 5,
      title: "Data Management",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 6,
      title: "Data Modelling",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
    {
      _id: 7,
      title: "Data Modelling",
      topics: [
        {
          title: "SalesForce CRM",
        },
        {
          title: "CRM",
        },
        {
          title: "SalesForce Architecture",
        },
        {
          title: "Benefits of Salesforce",
        },
      ],
    },
  ],
  paymentDetails: {
    title: "Complete Salesforce Training Admin, LWC and Developmen",
    courseDesc:
      " Master Salesforce with our comprehensive course. Gain proficiency in Salesforce app builder, administration, advanced developer skills, application design, security, automation, and reporting. Learn through real-world projects in this online training program.",
    price: "19,999",
    installments: "Three",
  },
};

const CoursePage = () => {
  return (
    <div className="flex  w-full flex-col  overflow-hidden ">
      <div className="flex w-full flex-col items-center justify-center bg-dark-purple px-4  py-12 text-center text-white">
        <div className="absolute bottom-[-100px] right-20 hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1067"
            height="535"
            viewBox="0 0 1067 535"
            fill="none"
          >
            <path
              opacity="0.29"
              d="M284.274 470.636L141.163 326.723L0 465.774L40.8887 506.615L149.925 397.707L287.194 534.814L576.336 246.014L713.605 383.121L1023.19 73.9016V246.014H1067V0H818.747V40.8403H996.905L710.684 322.833L572.442 186.699L284.274 470.636Z"
              fill="url(#paint0_linear_130_2391)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_2391"
                x1="1098.15"
                y1="35.006"
                x2="172.812"
                y2="535.73"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A59FFF" />
                <stop offset="1" stop-color="#A59FFF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className=" mt-2 max-w-5xl text-3xl font-semibold leading-[1.3]  sm:text-4xl md:mt-6 md:text-5xl lg:leading-[1.3] xl:text-6xl">
          {courseData.title}
        </h1>
        <div className="mt-4 flex flex-col items-center gap-2 text-center lg:mt-8">
          <p className="text-base md:text-lg xl:text-xl">
            Total Duration:
            <span className="font-semibold capitalize text-[#F5478E]">
              {courseData.duration}
            </span>
          </p>
          <p className="text-base md:text-lg xl:text-xl">
            Training Mode:
            <span className=" font-semibold  capitalize text-[#F5478E]">
              {courseData.trainingMode}
            </span>
          </p>
        </div>
        <div className="rounded-custom bg-gradient-custom from-custom via-custom backdrop-blur-custom mx-1 mt-4 max-w-5xl p-6 md:p-8 lg:mt-8 lg:p-12">
          <p className="text-base md:text-lg">{courseData.description}</p>
        </div>
        <div className="mt-6 flex flex-col gap-6 md:mb-8 md:flex-row lg:mt-10 lg:gap-8">
          <Link href="/">
            <button className="button-white-shadow cursor-pointer rounded-3xl bg-pink-500 px-8 py-2 text-base font-semibold capitalize transition-transform hover:scale-105 sm:text-lg">
              Enroll Now!
            </button>
          </Link>
          <Link href="/demo">
            <button className="button-pink-shadow cursor-pointer rounded-3xl border border-white bg-transparent px-10 py-1.5 text-base transition-transform hover:scale-105 sm:text-lg  ">
              Book Yourself A{" "}
              <span className="font-semibold text-pink-500">Free</span> Demo
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-light-white px-4 py-12 text-center md:gap-6 md:py-16  lg:gap-12">
        <h1 className="text-3xl  font-bold capitalize sm:text-4xl  md:text-5xl lg:text-6xl ">
          Curriculum Strategy
        </h1>
        <div className="grid gap-2 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-8">
          {courseData.strategy.map((curriculum) => (
            <CuriculumCard
              imageUrl={curriculum.imageUrl}
              title={curriculum.title}
              description={curriculum.description}
              key={curriculum._id}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-light-white px-4">
        <h1 className="mt-8  text-3xl font-bold capitalize  sm:text-4xl md:text-5xl lg:text-6xl ">
          Program Curriculum
        </h1>
        <div className="my-8 flex w-full flex-col items-center justify-center gap-4 px-2 lg:mt-10 lg:gap-6">
          {courseData.curriculum.map((curriculumData) => (
            <ProgramCard
              key={curriculumData._id}
              title={curriculumData.title}
              topics={curriculumData.topics}
            />
          ))}
        </div>
      </div>
      <MeetMentor />
      <PayMentDetail
        courseTitle={courseData.paymentDetails.title}
        courseDesc={courseData.paymentDetails.courseDesc}
        price={courseData.paymentDetails.price}
        installments={courseData.paymentDetails.installments}
      />
    </div>
  );
};

export default CoursePage;
