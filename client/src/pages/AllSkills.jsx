import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function AllSkills() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="py-10">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default AllSkills;
