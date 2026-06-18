import React from "react";
import pfp from "../assets/pfp.png";
import resumePdf from "../assets/rohit_resume.pdf";
import resume from "../assets/resume.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Intro = () => {
  return (
    <section
      className="font-poppins flex items-center justify-center min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto px-6 md:px-14 py-10"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-gray-400">
              Hello,
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              I'm{" "}
              <span className="text-amber-500 dark:text-yellow-400">Rohit</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-gray-300">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            A B.Tech student in Computer Science at USICT, GGSIPU. I'm
            passionate about Full-Stack Web Development and have experience in
            building scalable applications using the MERN stack.
          </p>

          <div className="flex justify-center md:justify-start">
            <motion.button
              initial={{
                x: -80,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-slate-900 text-white dark:bg-white dark:text-black font-semibold rounded-full shadow-lg hover:bg-slate-800 dark:hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <a
                className="flex items-center gap-3 px-6 py-3"
                href={resumePdf}
                target="_blank"
              >
                <img
                  src={resume}
                  alt="resume-icon"
                  className="w-5 h-5 object-cover dark:invert-0 invert"
                />
                <span>View Resume</span>
              </a>
            </motion.button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative max-w-sm md:max-w-md lg:max-w-lg w-full aspect-square">
            <img
              src={pfp}
              alt="profile-pic"
              className="w-full h-full object-cover rounded-full border-2 border-amber-500 dark:border-yellow-400 shadow-lg shadow-amber-500/10 dark:shadow-yellow-400/20 transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_30px_rgba(245,158,11,0.15)] dark:drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
