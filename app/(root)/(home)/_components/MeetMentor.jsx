import MentorCard from "./MentorCard";

const MeetMentor = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-14 xl:pb-20 py-4 px-8 pt-16 text-center">
      <h1 className="pb-0 w-full flex justify-center xl:py-6 text-6xl leading-[4rem] font-semibold lg:text-8xl">
        Meet Your Mentor
      </h1>

      <div className="flex flex-col items-center justify-center xl:space-x-10 md:space-x-8 text-center text-[#000] md:flex-row md:items-center md:justify-center">
        {/* Mentor 1 */}
        <MentorCard
          src="/assets/images/mentors/mentor-1.svg"
          alt="Prateek Prasoon - Founder, Cloudprism Solutions"
          name="Prateek Prasoon"
          description="Founder- Cloudprism Solutions, Coding Commando, Tech enthusiast, tech-savvy, entrepreneur, Salesforce Certified Trainer"
        />

        {/* Mentor 2 */}
        <MentorCard
          src="/assets/images/mentors/mentor-2.svg"
          alt="Rohit Mishra - Co-Founder, Coding Commando"
          name="Rohit Mishra"
          description="Co-Founder: Coding Commando, Salesforce Gaya group leader, Techsavy, Tech enthusiast, Salesforce trainer"
        />
      </div>
    </section>
  );
};

export default MeetMentor;
