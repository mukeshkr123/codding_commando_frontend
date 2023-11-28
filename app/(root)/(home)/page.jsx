import React from "react";
import ChooseUs from "./_components/ChooseUs";
import Testimonial from "./_components/Testimonial";
import Shaping from "./_components/Shaping";
import LearnFromUs from "./_components/LearnFromUs";
import ExploreProgram from "./_components/ExploreProgram";
import MeetMentor from "./_components/MeetMentor";

export default function HomePage() {
  return (
    <div>
      {/* Shaping  */}
      <Shaping />

      {/* Learn From Us  */}
      <LearnFromUs />

      {/* Explore page */}
      <ExploreProgram />

      {/* Meet mentor  */}
      <MeetMentor />

      {/* Choose us  */}
      <ChooseUs />

      {/* Testimonials  */}
      {/* <Testimonial /> */}
    </div>
  );
}
