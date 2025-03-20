import React from "react";
import ContactP from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <ContactP />
      <Footer />
    </div>
  );
};

export default Contact;
