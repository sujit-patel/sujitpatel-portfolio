import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Skills from "./pages/AllSkills.jsx";
import About from "./pages/About.jsx";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
