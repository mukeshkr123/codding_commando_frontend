import Image from "next/image";

const Mission = ({ title, description, imageUrl, className }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:flex-row justify-center items-center px-8 xl:-16 py-12 xl:px-32 bg-[#FBF5FC] ">
      {/* Box 1 */}
      <div
        className={` md:w-1/2 lg:pr-8 flex flex-col gap-4 xl:gap-8 py-4 ${className} `}
      >
        <h2 className="text-black leading-tight font-semibold text-6xl uppercase xl:w-1/2  ">
          {title}
        </h2>
        <p className="text-gray-800 text-lg font-normal">{description}</p>
      </div>

      {/* Box 2 */}
      <div className="md:w-1/2 mt-4 lg:mt-0 lg:flex ">
        <Image src={imageUrl} alt={title} width={400} height={300} />
      </div>
    </div>
  );
};

export default Mission;
