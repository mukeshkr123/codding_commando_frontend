import Image from "next/image";
import Link from "next/link";

const ExploreProgram = () => {
  return (
    <section className="flex flex-col items-center  xl:px-20 xl:py-20 bg-[#FBF5FC] w-full ">
      {/* <h1 className="xl:py-6 text-4xl md:text-5xl lg:text-7xl font-bold text-black text-center">
        Explore Our Programs
      </h1> */}
      <Image
        src="/assets/font-shadow/explore-program-svg.svg"
        alt="Explore Our Programs"
        height={200}
        width={200}
        className="w-[75%] hidden sm:flex"
      />
      <Image
        src="/assets/font-shadow/explore-prgram-sm.svg"
        alt="Explore Our Programs"
        height={200}
        width={200}
        className="w-[65%] sm:hidden"
      />
      <Link href="/courses">
        <Image
          src="/assets/images/course-1.png"
          alt="Course 1"
          width={1200}
          height={600}
          className="py-10 xl:py-12  px-8 xl:px-0"
        />
      </Link>
    </section>
  );
};

export default ExploreProgram;
