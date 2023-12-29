import Image from "next/image";

const LearnFromUs = () => {
  return (
    <section
      className="shrink-0 bg-light-white  bg-opacity-[100%] bg-contain bg-no-repeat p-8 xl:px-20"
      style={{
        backgroundImage: 'url("assets/vector/learn-bg-svg.svg")',
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <div className="flex flex-col space-y-6 text-center md:text-left lg:space-y-12">
            <Image
              src="/assets/font-shadow/learn-from-svg.svg"
              alt="Learn From Us"
              height={200}
              width={200}
              className="w-[60%]"
            />
            <p className="text-left text-base font-normal leading-6 text-gray-700 md:text-lg md:leading-7 lg:text-xl lg:leading-8  ">
              We want to democratize coding education by reaching every corner
              of the state, Bihar. Learn from the industry experts and establish
              yourself in the field. Coding Commando focuses on practical and
              fun learning. We impart knowledge as well as skills. The learning
              process is liberal, and we promote both modes of education.
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:w-1/2 md:justify-end">
          <Image
            src="/assets/images/learn-img.svg"
            alt="program "
            height={300}
            width={350}
            className="h-[50%] w-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnFromUs;
