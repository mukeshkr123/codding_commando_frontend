import Image from "next/image";
import React from "react";

const TeamData = [
  {
    _id: 1,
    name: "Prateek Prasoon",
    description: "Founder",
    imageUrl: "/assets/images/teams/profile-1.svg",
  },
  {
    _id: 2,
    name: "Rohit Mishra",
    description: "Training Module Head, Mentor",
    imageUrl: "/assets/images/teams/profile-2.svg",
  },
  {
    _id: 3,
    name: "Nitesh",
    description: "Mentor",
    imageUrl: "/assets/images/teams/profile-7.svg",
  },
  {
    _id: 4,
    name: "Aakarshan",
    description: "BDA",
    imageUrl: "/assets/images/teams/profile-3.svg",
  },
  {
    _id: 5,
    name: "Shalinee Kumari",
    description: "Public Relation Officer",
    imageUrl: "/assets/images/teams/profile-4.svg",
  },
  {
    _id: 6,
    name: "Akash Umang",
    description: "Ui/Ux Designer",
    imageUrl: "/assets/images/teams/profile-5.svg",
  },
  {
    _id: 7,
    name: "Rajnish Kumar",
    description: "Admission Counsellor",
    imageUrl: "/assets/images/teams/profile-6.svg",
  },
];

export const TeamList = () => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 py-6 sm:gap-16 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-24">
      {TeamData.map(({ _id, name, description, imageUrl }) => (
        <div
          key={_id}
          className="flex w-full flex-col items-center justify-center space-y-6 py-4 md:py-0"
        >
          <Image src={imageUrl} alt="profile" width={170} height={170} />

          <div className="text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
