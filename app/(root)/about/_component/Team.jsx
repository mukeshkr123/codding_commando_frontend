import Image from "next/image";
import React from "react";

const TeamData = [
  {
    _id: 1,
    name: "Prateek Prasoon",
    description: "Founder",
    imageUrl:"/assets/images/teams/profile-1.svg"
  },
  {
    _id: 2,
    name: "Rohit Mishra",
    description: "Co-Founder, Mentor",
    imageUrl:"/assets/images/teams/profile-2.svg"
  },
  {
    _id: 1,
    name: "Prateek Prasoon",
    description: "Founder",
    imageUrl:"/assets/images/teams/profile-1.svg"
  },
  {
    _id: 2,
    name: "Rohit Mishra",
    description: "Co-Founder, Mentor",
    imageUrl:"/assets/images/teams/profile-2.svg"
  },
  {
    _id: 3,
    name: "Aakarshan",
    description: "BDA",
    imageUrl:"/assets/images/teams/profile-3.svg"
  },
  {
    _id: 4,
    name: "Shalinee Kumari",
    description: "Public Relation Officer",
    imageUrl:"/assets/images/teams/profile-4.svg"
  },
  {
    _id: 5,
    name: "Akash Umang",
    description: "Ui/Ux Designer",
    imageUrl:"/assets/images/teams/profile-5.svg"
  },
  {
    _id: 6,
    name: "Rajnish Kumar",
    description: "Admission Counsellor",
    imageUrl:"/assets/images/teams/profile-6.svg"
  },
];

const Team = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-0">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full  flex justify-center item-center py-6 md:py-8 lg:py-10 xl:py-12 ">
          <h1 className="text-7xl xl:text-8xl capitalize font-semibold md:text6xl">Our Team</h1>
        </div>

        <div className="grid py-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-16 md:gap-8 xl:gap-24  ">
          {TeamData &&
            TeamData.map((team) => (
              <div key={team._id} className="flex flex-col items-center space-y-6 py-4 md:py-0 justify-center w-full">
                <Image src={team.imageUrl} alt="profile" width={170} height={170} />
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
