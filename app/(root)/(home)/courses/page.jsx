import React from "react";
import UnLocking from "./_components/UnLocking";
import Courses from "./_components/Courses";

export default function CoursePage() {
  return (
    <div className="h-full w-full bg-light-white">
      <UnLocking />

      <Courses />
    </div>
  );
}

const coursesData = [
  {
    id: 1,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course2",
  },
  {
    id: 2,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course2",
  },
  {
    id: 3,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course3",
  },
  {
    id: 4,
    imageUrl: "/assets/images/mission-svg.svg",
    href: "/course4",
  },
];

// const Courses = () => {
//   return (
//     <div className=" flex h-full w-full flex-col items-center justify-center bg-light-white py-8">
//       <div className="py-6">
//         <h1 className="text-4xl font-bold ">Explore Job Skills</h1>
//       </div>
//       <div className="grid w-full grid-cols-1 items-center justify-center gap-4 px-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
//         {coursesData.map((course) => (
//           <div
//             key={course.id}
//             className="flex w-full items-center justify-center"
//           >
//             <Link href={course.href}>
//               <Image
//                 src={course.imageUrl}
//                 alt="course image"
//                 width={300}
//                 height={300}
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
