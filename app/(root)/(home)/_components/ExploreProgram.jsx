import Image from "next/image";
import Link from "next/link";

const ExploreProgram = () => {
  return (
    <section className="flex flex-col items-center xl:py-12 xl:px-20">
      <h1 className="xl:py-6 text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
        Explore Our Programs
      </h1>
      <Link href="/courses">
        <Image
          src="/assets/images/course-1.png"
          alt="Course 1"
          width={1200}
          height={600}
          className="py-12 px-8 xl:px-0"
        />
      </Link>
    </section>
  );
};

export default ExploreProgram;
