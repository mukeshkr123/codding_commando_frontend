import Image from "next/image";

const Vision = ({ title, description, imageUrl, className }) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-4 bg-light-white px-8 py-12 md:flex-row xl:px-32 ">
      <div
        className={` flex flex-col gap-4 py-4 md:w-1/2 lg:pr-8 xl:gap-8 ${className} `}
      >
        <Image
          src="/assets/font-shadow/vision.svg"
          alt={title}
          width={250}
          height={200}
        />

        <p class Name="text-gray-800 text-lg font-normal">
          {description}
        </p>
      </div>

      <div className="mt-4 md:w-1/2 lg:mt-0 lg:flex ">
        <Image src={imageUrl} alt={title} width={400} height={300} />
      </div>
    </div>
  );
};

export default Vision;
