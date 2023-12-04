import Image from "next/image";
import CourseSlider from "./CourseSlider";

const ExploreProgram = () => {
  return (
    <section className=" w-full bg-light-white xl:p-20">
      <div className="flex w-full flex-col items-center justify-center  space-y-8 md:space-y-10 xl:space-y-12">
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

        <CourseSlider />
      </div>
    </section>
  );
};

export default ExploreProgram;
