import React from "react";
import { GiSkills } from "react-icons/gi";
import { motion } from "framer-motion";
import { getAnimationVariants } from "./animations.js";

const skills = [
  { src: "../public/Skills/html.webp", alt: "HTML" },
  { src: "../public/Skills/css.png", alt: "CSS" },
  { src: "../public/Skills/js.webp", alt: "JavaScript" },
  { src: "../public/Skills/php.png", alt: "PHP" },
  { src: "../public/Skills/mysql.png", alt: "MySQL" },
  { src: "../public/Skills/bootstrap.png", alt: "Bootstrap" },
];

const otherSkills = [
  { src: "../public/Skills/react.svg", alt: "React.js" },
  { src: "../public/Skills/Tailwind_CSS.png", alt: "Tailwind CSS" },
  { src: "../public/Skills/node-js.png", alt: "Node-js" },
  { src: "../public/Skills/express-js.png", alt: "Express-js" },
  { src: "../public/Skills/MongoDB.webp", alt: "MongoDB" },
];

const tools = [
  { src: "../public/Tools/vs_code.png", alt: "VS Code" },
  { src: "../public/Tools/Github img.jpg", alt: "GitHub" },
  { src: "../public/Tools/Power_Bi.png", alt: "Power Bi" },
  { src: "../public/Tools/jupyter.png", alt: "Jupyter" },
  { src: "../public/Tools/wordpress.webp", alt: "WordPress" },
];

const Skills = () => {
  return (
    <div className="px-20">
      <motion.div
        className="px-10 space-y-5 py-8 border border-slate-600 rounded-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading Section */}
        <div className="px-5 py-3">
          <h1 className="text-6xl font-serif bg-clip-text">
            What <span className="font-extrabold">I</span> Do
          </h1>
        </div>

        {/* Basic Skillset Section */}
        <div className="px-5 py-3 space-y-5">
          <h1 className="flex items-center gap-2 text-xl font-extrabold">
            <GiSkills className="scale-150 text-pink-500" />
            <span className="text-pink-500 bg-gray-800 p-2 rounded-md shadow-lg">
              Basic Skillset
            </span>
          </h1>
          <div className="flex flex-wrap gap-5 px-5 border border-slate-600 py-5 rounded-md">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.alt}
                className="flex flex-col items-center"
              >
                <motion.img
                  className="h-16 shadow-lg cursor-pointer hover:scale-110 hover:shadow-[0_0_20px_rgba(255,105,180,0.7)] transition-transform duration-300"
                  src={skill.src}
                  alt={skill.alt}
                  variants={getAnimationVariants(0)}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                />
                <span className="text-sm text-gray-400">{skill.alt}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advanced Skillset Section */}
        <div className="px-5 py-3 space-y-5">
          <h1 className="flex items-center gap-2 text-xl font-extrabold">
            <GiSkills className="scale-150 text-pink-500" />
            <span className="text-pink-500 bg-gray-800 p-2 rounded-md shadow-lg">
              Advanced Skillset
            </span>
          </h1>
          <div className="flex flex-wrap gap-5 px-5 border border-slate-600 py-5 rounded-md">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.alt}
                className="flex flex-col items-center"
              >
                <motion.img
                  className="h-16 cursor-pointer shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(255,105,180,0.7)] transition-transform duration-300"
                  src={skill.src}
                  alt={skill.alt}
                  variants={getAnimationVariants(1.5)}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                />
                <span className="text-sm text-gray-400">{skill.alt}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="px-5 py-3 space-y-5">
          <h1 className="flex items-center gap-2 text-xl font-extrabold">
            <GiSkills className="scale-150 text-blue-500" />
            <span className="text-blue-500 bg-gray-800 p-2 rounded-md shadow-lg">
              Tools & Technologies
            </span>
          </h1>
          <div className="flex flex-wrap gap-5 px-5 border border-slate-600 py-5 rounded-md">
            {tools.map((tool, index) => (
              <motion.div key={tool.alt} className="flex flex-col items-center">
                <motion.img
                  className="h-16 cursor-pointer shadow-lg hover:scale-125 hover:shadow-[0_0_20px_rgba(255,105,180,0.7)] transition-transform duration-300"
                  src={tool.src}
                  alt={tool.alt}
                  variants={getAnimationVariants(3)}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                />
                <span className="text-sm text-gray-400">{tool.alt}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
