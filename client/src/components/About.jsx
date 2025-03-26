import React from "react";
import { Link } from "react-router-dom";

function AboutP({ theme }) {
  return (
    <div
      className={`flex min-h-screen justify-between transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900"
      }`}
    >
      <div className="flex flex-col-reverse sm:flex-row items-center w-full max-w-6xl">
        {/* Image Section */}
        <div className="w-full profile sm:w-3/4 pt-2 flex items-center justify-center">
          <img src="sujitpatel.png" alt="codeImg" className="rounded-lg shadow-lg" />
        </div>

        {/* Text Content Section */}
        <div className="hero-content text-center space-y-3 flex flex-col">
          <h1 className="mb-5 text-5xl font-bold">
            It is <span className="text-sky-500">Better</span> to
            <span className="text-sky-500"> Complete</span> than
            <span className="text-pink-500"> Perfect.</span>
          </h1>
          <p className="mb-5 text-2xl text-center">
            I specialize in crafting modern, responsive websites with a focus on
            clean design and efficient functionality. Let's build something
            great together!
          </p>
          <Link to={"https://github.com/sujit-patel"} className="btn btn-outline btn-info">View My Work</Link>
          {/* Quote Section */}
          <div className="flex items-center justify-center w-full">
            <blockquote
              className={`shadow-md text-2xl rounded-lg px-5 py-3 hover:cursor-not-allowed ${
                theme === "dark"
                  ? "bg-gray-700 text-white shadow-gray-500"
                  : "bg-gray-200 text-gray-900 shadow-gray-400"
              }`}
            >
              "Instead of staying idle, we should keep trying."
              <br />
              <span className="text-lg flex justify-center">- Sujit Patel</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutP;
