import Image from "next/image";
import Link from "next/link";

const ExploreProgram = () => {
  return (
    <section className="flex w-full flex-col  items-center bg-light-white xl:p-20">
      <Image
        src="/assets/font-shadow/explore-program-svg.svg"
        alt="Explore Our Programs"
        height={200}
        width={200}
        className="hidden w-[75%] sm:flex"
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
          className="px-8 py-10  xl:px-0 xl:py-12"
        />
      </Link>
    </section>
  );
};

export default ExploreProgram;
