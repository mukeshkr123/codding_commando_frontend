import ChooseUs from "./_components/ChooseUs";
import ExploreProgram from "./_components/ExploreProgram";
import LearnFromUs from "./_components/LearnFromUs";
import MeetMentor from "./_components/MeetMentor";
import Shaping from "./_components/Shaping";

export default function HomePage() {
  return (
    <div className=" h-full w-full">
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
