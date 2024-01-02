import { MeetMentor } from "@/components/shared/meet-mentor";
import { TeamList } from "@/components/team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="h-full w-full">
      <section className="relative h-[690px] w-full bg-[#10001C] text-white">
        <div
          className=" absolute right-0 top-[200px] h-[80%] w-1/2 bg-contain bg-no-repeat md:top-0 md:h-[67%] md:w-[40%] lg:bg-repeat "
          style={{ backgroundImage: 'url("/assets/images/grid.png")' }}
        ></div>
        <div className="h-full w-full ">
          <div
            className=" flex h-[50%] w-full flex-col items-center justify-center  space-y-4 px-12 text-center md:space-y-6 xl:space-y-6
        "
          >
            <Image
              src="assets/font-shadow/making-sense.svg"
              alt="Making Sense with 0 & 1"
              height={200}
              width={200}
              className="w-full pb-4 pt-10 md:w-[60%] lg:w-[50%]"
            />
            <p className="pb-2 text-base md:text-lg lg:w-[60%] xl:w-[50%] xl:text-xl">
              Your pathway to job-ready skills! Our cracked courses transform
              coding complexity into accessible expertise, preparing you for
              in-demand jobs. Join us to bridge your ambitions with
              opportunities.
            </p>
          </div>
          <div className="relative h-[50%]">
            <Image
              src="/assets/images/background/making-png.png"
              alt="Making"
              width={400}
              height={400}
              objectFit="cover"
              className="h-full w-full rounded-t "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#10001C] via-[#10001C] to-transparent opacity-70"></div>
          </div>
        </div>
      </section>
      <div className=" flex w-full flex-col items-center justify-center gap-4 bg-light-white px-8 py-12 md:flex-row xl:px-32 ">
        <div
          className={` flex flex-col gap-4 py-4 md:w-1/2 lg:pr-8 xl:gap-8  `}
        >
          <Image
            src="/assets/font-shadow/mission.svg"
            alt="Our Mission"
            width={250}
            height={200}
          />
          <p className="text-lg font-normal text-gray-800">
            Our mission is to establish a tech environment. We garnish skills
            and make students job-ready through its best courses under the
            constant guidance of experienced industry experts. Spreading
            awareness on the hot skills of the market and making people
            understand its importance. Achieve the best goals with us through
            training, courses, resume building exercises, and mock interviews.
          </p>
        </div>
        <div className="mt-4  md:w-1/2 lg:mt-0  lg:flex lg:justify-end">
          <Image
            src={"/assets/images/mission-svg.svg"}
            alt={" Our Mission"}
            width={400}
            height={300}
          />
        </div>
      </div>
      <div
        className="h-full w-full bg-no-repeat"
        style={{
          backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
        }}
      >
        <div className=" flex w-full flex-col items-center justify-center gap-4 bg-light-white px-8 py-12 md:flex-row xl:px-32 ">
          <div
            className={` flex flex-col gap-4 py-4 md:order-1 md:w-1/2 lg:pr-8 xl:gap-8 `}
          >
            <Image
              src="/assets/font-shadow/vision.svg"
              alt={"Our  Vision"}
              width={250}
              height={200}
            />

            <p class Name="text-gray-800 text-lg font-normal">
              Promoting tech environment and helping out the candidates in
              cracking interviews. We want to expand the tech culture and
              establish cultural exchange with industry experts. Provide the
              best services in flexible mode and train coding enthusiasts to
              crack interviews like a pro.
            </p>
          </div>
          <div className="mt-4 md:w-1/2 lg:mt-0 lg:flex ">
            <Image
              src={"/assets/images/mission-svg.svg"}
              alt={"Our  Vision"}
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <MeetMentor />
      <section className="w-full bg-light-white  py-8 sm:px-0 ">
        <div
          className="flex w-full flex-col items-center justify-center bg-contain bg-no-repeat px-4"
          style={{
            backgroundImage: 'url("assets/vector/team-vector.svg")',
          }}
        >
          <div className="flex  w-full items-center justify-center py-8 md:py-8 lg:py-10 xl:py-12 ">
            <Image
              src="/assets/font-shadow/team.svg"
              alt="Our Team"
              width={200}
              height={200}
              className="w-[65%] sm:w-[60%] lg:w-[50%] xl:w-[35%]"
            />
          </div>
          <TeamList />
        </div>
      </section>
    </div>
  );
}
