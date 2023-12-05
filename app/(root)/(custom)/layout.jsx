import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/navbar";
import React from "react";

export default function Rootlayout({ children }) {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      {children}

      {/* Footer  */}
      <Footer />
    </>
  );
}
