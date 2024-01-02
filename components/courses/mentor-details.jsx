import Image from "next/image";

export const MentorDetails = ({ mentors }) => {
  const MentorCard = ({ imageUrl, alt, name, description }) => {
    return (
      <div className="relative max-w-[350px]">
        <div className="relative flex flex-col items-center">
          <Image
            src={imageUrl}
            alt={alt || "Profile Picture"}
            width={150}
            height={100}
            className="mx-auto h-[250px] md:h-[353px] lg:w-[250px]"
          />
          <div className="relative z-10 cursor-pointer p-4">
            <h1 className="py-4 text-2xl font-semibold md:text-4xl">{name}</h1>
            <p className="text-lg lg:text-xl">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-24 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:justify-between md:gap-x-24 md:gap-y-20 xl:gap-x-32 ">
      {mentors &&
        mentors.map((mentor) => <MentorCard key={mentor._id} {...mentor} />)}
    </div>
  );
};
