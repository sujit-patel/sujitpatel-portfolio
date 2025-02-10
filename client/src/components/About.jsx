import React from "react";
import codeImg from "../assets/code.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div className="flex md:px-14   flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-3/4 pt-2 flex items-center justify-center">
          <img src={codeImg} alt="codeImg" />
        </div>
        <div className="hero-content text-center space-y-1 flex flex-col">
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
          <button className="btn btn-outline btn-info">View My Work</button>
          <div className="flex items-center justify-center w-full">
            <blockquote className=" bg-slate-700 opacity-50 shadow-md shadow-slate-400 text-2xl rounded-lg px-5 py-3 hover:cursor-not-allowed">
              "Instead of staying idle, we should keep trying."
              <br />
              <span className="text-lg flex justify-center">- Sujit Patel</span>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-10 items-center gap-3">
        <div>
          <h1 className="text-5xl">FIND ME ON</h1>
          <p className="text-xl">Feel free to connect with me</p>
        </div>
        <nav>
          <div className="flex gap-5">
            <Link to="https://x.com/sujitpatel43">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link
              to="https://github.com/sujit-patel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.799 8.205 11.385.6.11.82-.26.82-.578v-2.14c-3.338.726-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.492.997.108-.775.42-1.304.762-1.603-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.47-2.382 1.237-3.222-.123-.303-.537-1.525.118-3.176 0 0 1.01-.324 3.3 1.23a11.37 11.37 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.287-1.554 3.296-1.23 3.296-1.23.657 1.65.244 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.432.374.824 1.11.824 2.237v3.317c0 .32.216.694.824.578C20.565 22.296 24 17.798 24 12.5 24 5.87 18.63.5 12 .5z"></path>
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/sujitpatel_43"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.975 1.243 2.243 1.305 3.608.058 1.265.069 1.645.069 4.849 0 3.204-.011 3.584-.069 4.849-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.243 1.243-3.608 1.305-1.265.058-1.645.069-4.849.069-3.204 0-3.584-.011-4.849-.069-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.243-1.305-3.608C2.174 15.596 2.163 15.216 2.163 12c0-3.204.011-3.584.069-4.849.062-1.366.33-2.633 1.305-3.608.975-.975 2.243-1.243 3.608-1.305 1.265-.058 1.645-.069 4.849-.069zm0-2.163C8.755 0 8.333.01 7.052.07 5.786.129 4.545.425 3.464 1.506 2.384 2.586 2.088 3.827 2.03 5.093.97 6.374.96 6.796.96 12c0 5.204.01 5.626.07 6.907.058 1.266.354 2.507 1.434 3.587 1.08 1.08 2.32 1.376 3.587 1.434 1.281.06 1.703.07 6.907.07 5.204 0 5.626-.01 6.907-.07 1.266-.058 2.507-.354 3.587-1.434 1.08-1.08 1.376-2.32 1.434-3.587.06-1.281.07-1.703.07-6.907 0-5.204-.01-5.626-.07-6.907-.058-1.266-.354-2.507-1.434-3.587C19.507.354 18.266.058 17 .07 15.719.01 15.297 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/in/sujitpatel43/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.39c.894-1.063 2.433-1.78 4-1.78 2.485 0 4.5 2.015 4.5 4.5v5.89z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default About;
