import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
function Contact() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
