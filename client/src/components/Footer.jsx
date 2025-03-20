import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-center py-5 px-10 md:px-20 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 items-center justify-between backdrop-blur-md shadow-md"
      style={{ boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.5)" }}
    >
      {" "}
      <div>
        <p>
          © {new Date().getFullYear()}{" "}
          <Link to={"/"} className="text-pink-500 font-bold hover:underline">
            Sujit Patel.
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center gap-4">
        <a
          href="mailto:sujitpatelp43@email.com"
          className=" hover:text-green-500"
        >
          <FaEnvelope size={25} />
        </a>
        <a
          href="https://linkedin.com/in/sujitpatel43"
          className=" hover:text-blue-500"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/sujit-patel"
          className=" hover:text-pink-600"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
