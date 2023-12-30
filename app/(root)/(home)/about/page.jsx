import React from "react";
import Making from "./_component/Making";
import Team from "./_component/Team";
import Mission from "./_component/Mission";
import Vision from "./_component/Vision";
import MeetMentor from "@/components/shared/meet-mentor";

export default function AboutPage() {
  return (
    <div className="h-full w-full">
      {/* Making  */}
      <Making />

      {/* Our Mission  */}
      <Mission
        title=" Our Mission"
        description="Our mission is to establish a tech environment. We garnish skills and
          make students job-ready through its best courses under the constant
          guidance of experienced industry experts. Spreading awareness on the
          hot skills of the market and making people understand its importance.
          Achieve the best goals with us through training, courses, resume
          building exercises, and mock interviews."
        imageUrl="/assets/images/mission-svg.svg"
      />

      {/* Our Vission  */}
      <div
        className="h-full w-full bg-no-repeat"
        style={{
          backgroundImage: 'url("assets/vector/mentor-bg-svg.svg")',
        }}
      >
        <Vision
          title="Our  Vision"
          description="Promoting tech environment and helping out the candidates in cracking interviews. We want to expand the tech culture and establish cultural exchange with industry experts. Provide the best services in flexible mode and train coding enthusiasts to crack interviews like a pro."
          imageUrl="/assets/images/mission-svg.svg"
          className="md:order-1 "
        />
      </div>

      {/* Meet My Mentor  */}
      <MeetMentor />

      {/* Our Team  */}
      <Team />
    </div>
  );
}
