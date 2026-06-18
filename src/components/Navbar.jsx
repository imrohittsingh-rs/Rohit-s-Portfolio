import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";
import contact from "../assets/contact.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";

import { motion } from "motion/react";

const active = "text-yellow-600 border-yellow-600 dark:text-yellow-300 dark:border-yellow-300";
const items = ["Home", "About", "Skills", "Projects", "Contact"];

const navItems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
];

const Navbar = () => {
  const [menuVisible, setMenusVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="sticky font-poppins top-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 py-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-transparent transition-colors duration-300">
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        offset={-86}
        className="cursor-pointer transition-transform hover:scale-105"
      >
        <img
          src={favicon}
          alt="desktop-logo"
          className="w-16 object-cover rounded-md"
        />
      </Link>

      <div className="hidden md:flex items-center gap-14 text-lg font-medium text-slate-600 dark:text-gray-400">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-86}
            activeClass={active}
            className="cursor-pointer border-b-4 border-transparent text-slate-600 dark:text-gray-300 pb-1 transition-all duration-300 ease-in-out hover:text-yellow-600 dark:hover:text-yellow-300 hover:border-yellow-600 dark:hover:border-yellow-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex md:justify-start items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full text-slate-700 dark:text-yellow-300 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer text-xl"
        >
          {darkMode ? <IoSunnyOutline /> : <IoSunny />}
        </button>
        <button className="bg-slate-900 text-white dark:bg-white dark:text-black font-semibold rounded-full shadow-lg hover:bg-slate-800 dark:hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-86}
            className="flex items-center gap-3 px-6 py-3"
          >
            <img
              src={contact}
              alt="contact-me-btn"
              className="w-5 h-5 object-cover dark:invert-0 invert"
            />
            <span className="font-semibold">Contact me</span>
          </Link>
        </button>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full text-slate-700 dark:text-yellow-300 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer text-2xl"
        >
          {darkMode ? <IoSunnyOutline /> : <IoSunny />}
        </button>
        <button
          onClick={() => {
            setMenusVisible((prev) => !prev);
          }}
          className="text-slate-800 dark:text-white text-4xl hover:text-yellow-600 dark:hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
        >
          {menuVisible ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
        {menuVisible && (
          <motion.ul
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-full mt-3 w-52 bg-white/95 dark:bg-neutral-950/90 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-2 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col mr-3"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={`${item.toLowerCase()}`}
                  onClick={() => setMenusVisible(false)}
                  className="block w-full text-slate-700 dark:text-neutral-300 hover:text-yellow-600 dark:hover:text-yellow-300 hover:bg-slate-100 dark:hover:bg-white/5 px-4 py-2.5 rounded-lg text-base font-medium tracking-wide transition-all duration-200 cursor-pointer"
                  smooth={true}
                  duration={300}
                  spy={true}
                >
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
