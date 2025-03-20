import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (  
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <Banner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
