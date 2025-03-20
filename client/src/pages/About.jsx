import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AboutP from "../components/About.jsx";

function About() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex flex-col min-h-screen justify-between transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <AboutP theme={theme} />
      <Footer />
    </div>
  );
}

export default About;
