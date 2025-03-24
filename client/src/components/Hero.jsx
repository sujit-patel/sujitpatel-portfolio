import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  // Trigger animation on page load
  useEffect(() => {
    handleCelebration();
  }, []);

  const project = [
    {
      title: "Real-Time Chat",
      link: "https://github.com/sujit-patel/Real-Time-Chat",
      image: "../public/project/real time chat img.png",
    },
    {
      title: "Bookstore Website",
      link: "https://github.com/sujit-patel/bookstore",
      image: "../public/project/bookstore img.png",
    },
    {
      title: "Amazon Sales Data Board",
      link: "https://github.com/sujit-patel/Amazon-Sales-Dataset-Power-Bi",
      image: "../public/project/power bi.png",
    },
    {
      title: "Sidcup Golf Family Clone",
      link: "https://github.com/sujit-patel/sidcup-golf-family-clone",
      image: "../public/project/sidcup family golf clone img.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 md:px-20">
      {showConfetti && <Confetti width={width} height={height} />}

      {/* ✅ Hero Section */}
      <section className="flex flex-col md:flex-row w-full pt-5 px-5 items-center justify-center h-screen text-center">
        <div className="flex w-full md:w-1/2 flex-col space-y-5">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-white">Sujit Patel</span>👋
          </motion.h1>
          <p className="text-gray-300 text-base md:text-lg">
            A Passionate Full-Stack Developer 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="./src/assets/Sujitpatel_Resume.pdf"
              download="SujitPatel_Resume.pdf"
              className="bg-pink-500 px-6 py-3 rounded-md text-white font-bold hover:bg-pink-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              Download Resume
            </motion.a>
            <motion.button
              className="bg-purple-500 px-6 py-3 rounded-md text-white font-bold hover:bg-purple-600 transition"
              whileHover={{ scale: 1.1 }}
              onClick={handleCelebration}
            >
              👋 Say Hello
            </motion.button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
          <img
            src="../public/sujitpatel.png"
            className="w-2/3 md:w-1/2 scale-150"
            alt="Sujit Patel"
          />
        </div>
      </section>

      {/* ✅ About Me with Scroll Animation */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-pink-500">About Me</h2>
        <p className="text-gray-300 text-xl mt-5 max-w-3xl mx-auto">
          I am a{" "}
          <span className="font-bold hover:underline cursor-pointer">
            MERN Stack Developer
          </span>{" "}
          with a passion for building scalable web applications.
        </p>
      </motion.section>

      {/* ✅ Services with Scroll Animation */}
      <motion.div
        id="service"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center gap-2 mb-4 text-2xl font-semibold">
          <FaBriefcase />
          <h2 className="uppercase">Work With Me</h2>
        </div>
        <p className="text-lg mb-4">
          Looking for a{" "}
          <span className="font-semibold">professional website</span> for your
          business? I specialize in dynamic, responsive web solutions.
          <FaRocket className="inline ml-1" />
        </p>
        <p className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
          📩 Let’s Connect
        </p>
      </motion.div>

      {/* ✅ Projects with Scroll Animation */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-blue-500">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-5">
          {project.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-blue-500 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full object-cover mb-3"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                className="mt-3 text-blue-400 hover:underline"
              >
                View More
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="https://github.com/sujit-patel"
            target="_blank"
            className="bg-blue-500 px-6 py-3 rounded-md text-white font-bold hover:bg-blue-600 transition"
          >
            See All My Work
          </Link>
        </div>
      </motion.section>

      {/* ✅ Contact with Scroll Animation */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-green-500">Get in Touch</h2>
        <p className="text-gray-300 mt-5">
          Let's work together on something amazing! 🚀
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <a
            href="mailto:sujitpatelp43@email.com"
            className="text-gray-300 hover:text-green-500"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://linkedin.com/in/sujitpatel43"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/sujit-patel"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </motion.section>

      {/* ✅ Footer */}
      <footer className="text-center py-5 border-t border-gray-700">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sujit Patel. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Hero;
