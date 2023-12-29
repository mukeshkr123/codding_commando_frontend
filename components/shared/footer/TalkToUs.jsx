import Image from "next/image";

const TalkToUs = () => {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden bg-dark-purple text-white xl:pl-20">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="z-10 flex h-full w-full flex-col justify-center space-y-4 px-6 py-12 text-center md:w-1/2 md:space-y-6 md:text-left lg:mt-12">
          <div className="flex w-full justify-center py-4 md:inline-block">
            <Image
              src="/assets/font-shadow/talkus-svg.svg"
              alt="Talk To Us"
              width={200}
              height={200}
              className="w-[60%] md:w-[70%] "
            />
          </div>

          <p className="text-base font-normal leading-normal text-white md:pl-0 md:text-lg">
            You can connect directly with the help desk regarding clarity on
            courses, mode of course, and doubt-solving. Through its best-cracked
            courses, Coding Commando is giving you the best training under the
            guidance of industry experts.
          </p>

          <div className="flex flex-col items-center space-y-4 py-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
            <button
              className="w-44 rounded-[45px] bg-[#F5478E] py-2 font-semibold transition-transform hover:scale-105 focus:border-blue-300 focus:outline-none focus:ring md:text-xl md:font-bold xl:px-2 xl:py-3"
              style={{ boxShadow: "1.5px 1.5px white" }}
            >
              <p>Talk To Us</p>
            </button>

            <button
              className="w-60 rounded-[45px] border border-white bg-transparent px-4 py-2 font-semibold transition-transform hover:scale-105 focus:border-blue-300 focus:outline-none focus:ring xl:py-3"
              style={{
                boxShadow: "2.5px 3.5px 6px 0.5px rgba(234, 56, 152, 1)",
              }}
            >
              <p>Know About Us</p>
            </button>
          </div>
        </div>

        <div className="hidden w-full overflow-hidden md:block md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-[#10001C] via-[#10001C] to-transparent" />
          <Image
            src="/assets/images/talk-us.svg"
            alt="Talk To Us Illustration"
            layout="responsive"
            width={400}
            height={300}
            objectFit="cover"
            className="flex h-full w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
