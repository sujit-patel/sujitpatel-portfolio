import React from "react";
import codeImg from "../assets/code.png";

function Banner() {
  return (
    <div className="flex md:px-14 flex-col-reverse sm:flex-row">
      <div className="hero-content text-center flex flex-col">
        <h1 className="mb-5 text-5xl font-bold">
          It is <span className="text-sky-500">Better</span> to
          <span className="text-sky-500"> Complete</span> than
          <span className="text-pink-500"> Perfect.</span>
        </h1>
        <p className="mb-5 text-2xl text-center">
          I specialize in crafting modern, responsive websites with a focus on
          clean design and efficient functionality. Let's build something great
          together!
        </p>
        <button className="btn btn-outline btn-info">View My Work</button>
      </div>
      <div className="w-full sm:w-3/4 flex items-center justify-center">
        <img src={codeImg} alt="codeImg" />
      </div>
    </div>
  );
}

export default Banner;
