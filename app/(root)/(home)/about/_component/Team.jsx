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
    name: "Nitish",
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

const Team = () => {
  return (
    <div className="w-full bg-light-white  py-8 sm:px-0 ">
      <div
        className="flex w-full flex-col items-center justify-center bg-contain bg-no-repeat px-4"
        style={{
          backgroundImage: 'url("assets/vector/team-vector.svg")',
        }}
      >
        <div className="flex  w-full items-center justify-center py-8 md:py-8 lg:py-10 xl:py-12 ">
          <Image
            src="/assets/font-shadow/team.svg"
            alt="Our Team"
            width={200}
            height={200}
            className="w-[65%] sm:w-[60%] lg:w-[50%] xl:w-[35%]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 sm:gap-16 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-24  ">
          {TeamData &&
            TeamData.map((team) => (
              <div
                key={team._id}
                className="flex w-full flex-col items-center justify-center space-y-6 py-4 md:py-0"
              >
                <Image
                  src={team.imageUrl}
                  alt="profile"
                  width={170}
                  height={170}
                />

                <div className="text-center">
                  <h1 className="text-2xl font-bold ">{team.name}</h1>
                  <p className="text-lg">{team.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
