import React from "react";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/AllSkills.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
