import Image from "next/image";

const TalkToUs = () => {
  return (
    <div className="w-full min-h-[300px] bg-[#10001C] text-white relative overflow-hidden xl:px-20">
      <div className="flex">
        {/* Left Box */}
        <div className="flex h-full flex-col justify-center space-y-4 md:space-y-6 px-6 py-12 w-1/2 z-10 lg:mt-12">
          <h1 className="text-white text-shadow-syne font-syne text-4xl md:text-6xl font-semibold leading-8">
            Talk To Us
          </h1>
          <p className="text-white text-base md:text-lg font-normal leading-normal">
            You can connect directly with the help desk regarding clarity on
            courses, mode of course, and doubt-solving. Through its best-cracked
            courses, Coding Commando is giving you the best training under the
            guidance of industry experts.
          </p>

          <div className="hidden md:flex space-x-6">
            <button
              aria-label="Talk To Us"
              className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md"
            >
              <p className="text-white font-syne text-xl font- px-3">
                Talk To Us
              </p>
            </button>

            <button
              aria-label="Know About Us"
              className="bg-transparent border border-white text-white px-4 py-2 rounded-full shadow-lg"
            >
              <p className="text-white font-syne text-xl font-normal px-5">
                Know About Us
              </p>
            </button>
          </div>
        </div>

        {/* Right Box (Image) */}
        <div className="w-1/2 overflow-hidden hidden md:block">
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
