import Image from "next/image";

const TalkToUs = () => {
  return (
    <div className="w-full min-h-[300px] bg-[#10001C] text-white relative overflow-hidden xl:px-20">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left Box */}
        <div className="flex h-full flex-col justify-center space-y-4 md:space-y-6 px-6 py-12 w-full md:w-1/2 z-10 lg:mt-12 text-center md:text-left">
          {/* <h1 className="text-white text-shadow-syne font-syne text-4xl md:text-6xl font-semibold leading-8">
            Talk To Us
          </h1> */}

          <div className="flex w-full justify-center md:inline-block py-4">
            <Image
              src="/assets/font-shadow/talkus-svg.svg"
              alt="Talk To Us"
              width={200}
              height={200}
              className="w-[60%] md:w-[70%] "
            />
          </div>

          <p className="text-white text-base md:text-lg font-normal leading-normal md:pl-0">
            You can connect directly with the help desk regarding clarity on
            courses, mode of course, and doubt-solving. Through its best-cracked
            courses, Coding Commando is giving you the best training under the
            guidance of industry experts.
          </p>

          <div className="flex flex-col md:flex-row items-center py-4 md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <button
              className="bg-[#F5478E] w-44 font-semibold md:font-bold md:text-xl rounded-[45px] py-2 xl:py-3 xl:px-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              style={{ boxShadow: "1.5px 1.5px white" }}
            >
              <p>Talk To Us</p>
            </button>

            <button
              className="w-60 bg-transparent border font-semibold border-white py-2 px-4 xl:py-3 rounded-[45px] transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              style={{
                boxShadow: "2.5px 3.5px 6px 0.5px rgba(234, 56, 152, 1)",
              }}
            >
              <p>Know About Us</p>
            </button>
          </div>
        </div>

        {/* Right Box (Image) */}
        <div className="w-full md:block md:w-1/2 hidden overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#10001C] via-[#10001C] to-transparent" />
          <Image
            src="/assets/images/talk-us.svg"
            alt="Talk To Us Illustration"
            layout="responsive"
            width={400}
            height={400}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
