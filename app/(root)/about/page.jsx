import React from "react";
import Making from "./_component/Making";
import Team from "./_component/Team";
import Mission from "./_component/Mission";

export default function AboutPage() {
  return (
    <div>
      {/* Making  */}
      <Making />

      {/* Our Mission  */}
      <Mission
        title=" Our Mission"
        description="   Our mission is to establish a tech environment. We garnish skills and
          make students job-ready through its best courses under the constant
          guidance of experienced industry experts. Spreading awareness on the
          hot skills of the market and making people understand its importance.
          Achieve the best goals with us through training, courses, resume
          building exercises, and mock interviews."
        imageUrl="/assets/images/mission-svg.svg"
      />

      {/* Our Team  */}
      <Team />
    </div>
  );
}
