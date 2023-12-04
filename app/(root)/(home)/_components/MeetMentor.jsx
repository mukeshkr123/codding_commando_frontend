import Image from "next/image";
import MentorCard from "./MentorCard";

const MeetMentor = () => {
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
        className="w-[90%] xl:w-[60%]"
      />

      <div className="flex flex-col items-center justify-center text-center text-[#000] md:flex-row md:items-center md:justify-center md:space-x-8 xl:mt-10 xl:space-x-10">
        <MentorCard
          src="/assets/images/mentors/mentor-1.svg"
          alt=""
          name="Prateek Prasoon"
          description="Founder- Cloudprism Solutions, Coding Commando, Tech enthusiast, tech-savvy, entrepreneur, Salesforce Certified Trainer"
        />
        <MentorCard
          src="/assets/images/mentors/mentor-2.svg"
          alt=""
          name="Rohit Mishra"
          description="Co-Founder: Coding Commando, Salesforce Gaya group leader, Techsavy, Tech enthusiast, Salesforce trainer"
        />
      </div>
    </section>
  );
};

export default MeetMentor;
