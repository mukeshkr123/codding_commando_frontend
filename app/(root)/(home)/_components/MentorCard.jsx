import Image from "next/image";

const MentorCard = ({ src, alt, name, description }) => {
  return (
    <div className="flex max-w-[350px] flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={100}
        className="mx-auto h-[353px] lg:w-[250px]"
      />
      <h1 className="py-4 text-2xl font-semibold md:text-4xl">{name}</h1>
      <p className="text-lg lg:text-xl">{description}</p>
    </div>
  );
};

export default MentorCard;
