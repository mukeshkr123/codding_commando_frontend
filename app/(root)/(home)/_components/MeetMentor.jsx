import Image from "next/image";

const MeetMentor = () => {
  return (
    <section className="flex flex-col items-center pb-14 xl:pb-36 py-4">
      <h1 className="pb-0 xl:pb-8 xl:py-6 text-5xl font-semibold lg:text-8xl">
        Meet Your Mentor
      </h1>

      <div className="flex flex-col items-center justify-center xl:space-x-10 md:space-x-8 text-center text-[#000] md:flex-row md:items-center md:justify-center">
        {/* Mentor 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/mentors/mentor-1.svg"
            alt="Mentor 1"
            width={150}
            height={150}
            className="mx-auto h-[353px] lg:w-[250px]"
          />
          <h1 className="py-4 text-2xl font-semibold md:text-4xl">
            Prateek Prasoon
          </h1>
          <p className="text-lg">
            Founder- Cloudprism Solutions, Coding <br /> Commando, Tech
            enthusiast, tech-savvy, <br /> entrepreneur, Salesforce Certified
            Trainer
          </p>
        </div>

        {/* Mentor 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/mentors/mentor-2.svg"
            alt="Mentor 2"
            width={150}
            height={150}
            className="mx-auto h-[353px] lg:w-[250px]"
          />
          <h1 className="py-4 text-2xl font-semibold md:text-4xl">
            Rohit Mishra
          </h1>
          <p className="text-lg">
            Co-Founder: Coding Commando, Salesforce <br /> Gaya group leader,
            Techsavy, Tech enthusiast, <br /> Salesforce trainer
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetMentor;
