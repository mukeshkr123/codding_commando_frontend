import React from "react";
import ChooseUs from "./_components/ChooseUs";
import Testimonial from "./_components/Testimonial";
import Shaping from "./_components/Shaping";

export default function HomePage() {
  return (
    <div>
      {/* Shaping  */}
      <Shaping />

      {/* Choose us  */}
      <ChooseUs />

      {/* Testimonials  */}
      <Testimonial />
    </div>
  );
}
