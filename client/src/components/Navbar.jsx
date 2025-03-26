import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Profile from "../assets/Profile.png";
import Themecontroller from "./Themecontroller";
import { FaHandshake } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = localStorage.getItem("theme");
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToSection(id);
    }
  }, [location]);

  const menuItems = (
    <ul className="menu menu-horizontal rounded-box">
      <li className="nav-link bg-transparent">
        <Link to="/">
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/#service" onClick={() => scrollToSection("service")}>
          <FaHandshake />
          Service
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/skills">
          <GiSkills />
          Skills
        </Link>
      </li>
      {/* <li className="nav-link">
        <Link to="/about">
          <IoInformationCircleOutline />
          About
        </Link>
      </li> */}
      <li className="nav-link">
        <Link to="/contact">
          <LuMessageSquareText />
          Contact
        </Link>
      </li>
      <li className="nav-link">
        <Link
          to="https://github.com/sujit-patel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <FaGithub className="text-xl" />
          See GitHub
        </Link>
      </li>
    </ul>
  );

  return (
    <div
      className="px-10 md:px-20 py-2 flex items-center justify-between rounded-md backdrop-blur-sm shadow-md"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)" }}
    >
      <div>
        <Link
          to="/"
          className="font-bold text-xl hover:underline decoration-pink-500"
        >
          <span className="text-pink-500">Sujit</span> Patel
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-pink-500"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <div>{menuItems}</div>
        <div>
          <Themecontroller />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 rounded-full">
              <img alt="Profile" src="/assets/Profile.png"/>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute top-16 right-5 shadow-xl backdrop-blur-sm p-5 space-y-3 bg-gray-700 text-pink-500 font-bold ${
            theme === "dark" ? "" : "bg-gray-300 text-sky-500"
          } rounded-md md:hidden`}
        >
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#service"
                onClick={() => {
                  scrollToSection("service");
                  setIsOpen(false);
                }}
              >
                Service
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Themecontroller />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
