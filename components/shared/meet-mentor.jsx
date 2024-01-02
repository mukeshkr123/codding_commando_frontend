import Image from "next/image";
import { MentorCard } from "./card/mentor-card";

const mentorData = [
  {
    id: 1,
    src: "/assets/images/teams/profile-1.svg",
    name: "Prateek Prasoon",
    description:
      "Founder- Cloudprism Solutions, Coding Commando, Tech enthusiast, tech-savvy, entrepreneur, Salesforce Certified Trainer",
    additionalDetails: [
      { id: 1, title: "Founder at Cloudprism Solutions" },
      { id: 2, title: "Founder at Coding Commando" },
      { id: 3, title: "Salesforce Certified Trainer" },
      { id: 4, title: "Having industry experience of more than 09 years" },
    ],
  },
  {
    id: 2,
    src: "/assets/images/mentors/mentor-2.svg",
    name: "Rohit Mishra",
    description:
      "Co-Founder: Coding Commando, Salesforce Gaya group leader, Techsavy, Tech enthusiast, Salesforce trainer",
    additionalDetails: [
      { id: 1, title: "Training Module Head" },
      { id: 2, title: "Salesforce trainer" },
      { id: 3, title: "Salesforce Gaya Group Leader" },
      { id: 4, title: "Having industry experience of 5 years" },
    ],
  },
];

export const MeetMentor = () => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center bg-light-white bg-cover px-8 py-4 pb-14 pt-16 text-center xl:pb-20 "
      style={{
        backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
      }}
    >
      <Image
        src="/assets/font-shadow/meet-mentor-svg.svg"
        alt="Meet Your Mentor"
        height={200}
        width={200}
        className="hidden w-[90%] sm:flex xl:w-[58%]"
      />

      <Image
        src="/assets/font-shadow/meet-mentor-sm.svg"
        alt="Meet Your Mentor"
        height={200}
        width={200}
        className="w-[70%] sm:hidden"
      />

      <div className="flex flex-col items-center justify-center text-center text-[#000] md:flex-row md:items-center md:justify-center md:space-x-20 xl:mt-28 xl:space-x-36">
        {mentorData.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </section>
  );
};
