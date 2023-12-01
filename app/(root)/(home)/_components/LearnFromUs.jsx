import Image from "next/image";
const vectorUrl = "assets\vectorlearn-bg-svg.svg";

const LearnFromUs = () => {
  return (
    <section
      className="xl:px-20 px-8  py-8 bg-[#FBF5FC] flex-shrink-0 bg-contain bg-no-repeat bg-opacity-[100%]"
      style={{
        backgroundImage: 'url("assets/vector/learn-bg-svg.svg")',
      }}
    >
      {/* Learn from us content */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Content */}
        <div className="md:w-1/2 md:pr-8">
          <div className="flex flex-col space-y-6 lg:space-y-12 text-center md:text-left">
            <h1 className="text-left text-6xl font-semibold text-black md:text-8xl">
              Learn <br /> From Us
            </h1>

            <p className="text-left text-base font-normal leading-6 text-gray-700 md:text-lg md:leading-7 lg:text-xl lg:leading-8  ">
              We want to democratize coding education by reaching every corner
              of the state, Bihar. Learn from the industry experts and establish
              yourself in the field. Coding Commando focuses on practical and
              fun learning. We impart knowledge as well as skills. The learning
              process is liberal, and we promote both modes of education.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/learn-svg.svg"
            alt="program "
            height={420}
            width={430}
          />
        </div>
      </div>
    </section>
  );
};

export default LearnFromUs;
