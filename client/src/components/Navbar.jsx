import React from "react";
import Profile from "../assets/Profile.png";
import Themecontroller from "./Themecontroller";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 w-full px-2 md:px-20 py-3 flex items-center justify-between rounded backdrop-blur-sm shadow-md z-50">
      <div>
        <Link
          to="/"
          className="font-bold hover:cursor-pointer hover:underline decoration-3 text-xl"
        >
          Sujit <span className="text-pink-500">Patel</span>
        </Link>
      </div>

      <div className="hidden">
        <ul className="menu menu-horizontal rounded-box">
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h5m-9 8l3-3h11a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-3">
        <div>
          <Themecontroller />
        </div>
        <div className="form-control h-10">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 rounded-full">
              <img alt="Profile" src={Profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
