import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";

import { TbBrandLeetcode } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { motion } from "framer-motion";

import pic from "../public/pic0.jpg";

import clever from "../public/projects/clever.png";
import opentalk from "../public/projects/opentalk.png";
import chexcare from "../public/projects/chexcare.png";
import dotconnect from "../public/projects/dotconnect.png";
import webSentinel from "../public/projects/websentinel.png";

const projects = [
  {
    title: "CleverSystems",
    image: clever,
    site: "https://cleversystems.vercel.app/",
    description:
      "Built a responsive and professional website for an electronics service company with optimized UI/UX, customer-focused design, and mobile-first responsiveness.",
    tech: ["Next.js", "TailwindCSS", "Responsive Design"],
  },
  {
    title: "OpenTalk",
    image: opentalk,
    site: "https://open-talk.vercel.app/",
    description:
      "Developed a real-time anonymous chat platform using Socket.IO supporting low-latency room-based communication without authentication.",
    tech: ["React", "Socket.IO", "Node.js", "WebSockets"],
  },
  {
    title: "CheXCare",
    image: chexcare,
    site: "https://chexcare.vercel.app/",
    description:
      "AI-powered pneumonia detection system using chest X-ray images with probability-based reports, secure authentication, and patient history management.",
    tech: ["Python", "TensorFlow", "Flask", "MongoDB"],
  },
  {
    title: "DotConnect",
    image: dotconnect,
    site: "https://dotconnect.vercel.app/",
    description:
      "Built a multiplayer nostalgic dot-connecting game featuring AI mode, local multiplayer, and online gameplay with interactive UI.",
    tech: ["React", "Firebase", "Game Logic", "Realtime DB"],
  },
  {
    // not ai powered but still a websecurity site
    title: "WebSentinel - AI Web Security",
    image: webSentinel,
    site: "https://github.com/ShijazKS/WebSentinel",
    description:" Developed a web security application that detects and prevents malicious activities on websites using AI-based threat detection algorithms and real-time monitoring.",
    tech: ["Python", "TensorFlow", "Flask", "MongoDB"],
  }
];

const otherprojects = [
  {
    title: "Travel Assistant AI",
    github: "https://github.com/ShijazKS/Travel_Assist",
    description:
      "A desktop application powered by a reinforcement learning agent that recommends tourist destinations within Indian states based on user preference history.",
  },
  {
    title: "Smart Accounting & Billing Mobile App",
    description:"Full-featured mobile accounting solution with inventory management, customer management, invoice generation, GST computation, and sales tracking functionalities."
  },
  {
    title: "Gamey - One Minute",
    github: "https://github.com/ShijazKS/Gamey",
    description:
      "A fast-paced one-minute game where players catch balls to score while avoiding two enemies — inspired by classic snake mechanics.",
  },
  {
    title: "Minimo - Expense Tracker",
    github: "https://github.com/ShijazKS/Minimo",
    description:
      "A full-stack expense tracker with interactive visualizations, allowing users to monitor spending by category through dynamic charts and graphs.",
  },
  {
    title: "Detectify AI - Object Detection",
    // github: "https://github.com/ShijazKS",
    description:
      "A computer vision application for detecting and classifying objects from images and webcam feeds using OpenCV and TensorFlow. Built with real-time detection capabilities and a Flask-based interface for interactive predictions.",
  },
  {
    title: "Arch Linux Rice",
    github: "https://github.com/ShijazKS/dotfiles",
    description:
      "A personalized Arch Linux development environment featuring bspwm, Polybar, Neovim, Alacritty, Picom, and custom productivity-focused configurations optimized for workflow efficiency and minimal aesthetics.",
  },
  {
    title: "Data Entry Software",
    description:
      "A business-oriented data management application built for handling customer data entry, analytics, automated reporting, and secure backup workflows. Designed to streamline operational tasks through an intuitive interface and real-time insights.",
  },
  {
    title: "Medata - Medicine Information API",
    github: "https://github.com/ShijazKS/Medata",
    description:"A REST API for scraping and displaying information about various medicines, including their uses and side effects."
  },
  {
    title: "QuoridorGame",
    github: "https://github.com/ShijazKS/QuoridorGame",
    description:
      "A digital implementation of the classic Quoridor board game, featuring a responsive UI and smooth gameplay mechanics."
  }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-white transition-all duration-300">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800 px-6 md:px-20 lg:px-40 py-4">
          <div className="relative flex items-center justify-between">
            {/* LOGO */}
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Jaz<span className="text-teal-400">Dev.</span>
            </h1>

            {/* CENTER NAV LINKS - ONLY PC */}
            <ul className="hidden lg:flex items-center gap-10 font-medium absolute left-1/2 -translate-x-1/2">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-teal-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-slate-300 hover:text-teal-400 transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-teal-400 transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-teal-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* DESKTOP RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download="ShijazKS_Resume.pdf"
              className="hidden sm:flex relative overflow-hidden items-center gap-2
  px-6 py-2.5 rounded-full
  border border-slate-700
  bg-slate-900/80
  text-slate-200 font-medium
  hover:border-teal-400/50
  hover:text-white
  transition-all duration-300 group"
            >
              {/* SHINE EFFECT */}
              <span
                className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    group-hover:translate-x-full transition duration-1000"
              ></span>

              <HiOutlineDownload className="text-lg text-teal-400 relative z-10" />

              <span className="relative z-10">Download CV</span>
            </a>

            {/* MOBILE DOWNLOAD BUTTON */}
            <a
              href="/resume.pdf"
              download="ShijazKS_Resume.pdf"
              className="sm:hidden relative w-11 h-11 flex items-center justify-center
  rounded-2xl border border-white/10
  bg-white/5 backdrop-blur-md
  text-teal-400
  shadow-lg shadow-black/20
  hover:bg-teal-500 hover:text-white
  hover:border-teal-400
  hover:-translate-y-0.5
  transition-all duration-300"
            >
              <HiOutlineDownload className="text-xl" />

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-teal-400/10 blur-xl -z-10"></div>
            </a>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section
          id="about"
          className="relative px-6 md:px-20 lg:px-40 py-8  lg:min-h-screen flex items-center overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[140px] rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center w-full relative z-10">
            {/* MOBILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:hidden"
            >
              <div className="relative">
                {/* IMAGE GLOW */}
                <div className="absolute inset-0 rounded-full bg-teal-500 blur-[100px] opacity-20"></div>

                {/* IMAGE */}
                <div
                  className="relative bg-black 
          w-[240px] h-[240px]
          sm:w-[300px] sm:h-[300px]
          md:w-[380px] md:h-[380px]
          rounded-full overflow-hidden
          border-[5px] border-teal-400/80
          shadow-2xl shadow-teal-500/10"
                >
                  <Image
                    src={pic}
                    alt="profile"
                    fill
                    priority
                    className="object-cover scale-[0.85] transition duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              {/* TAG */}
              <div
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 
        rounded-full border border-teal-500/20 
        bg-teal-500/10 mb-7"
              >
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>

                <span className="text-sm tracking-wide text-teal-400 font-medium">
                  Open to Software Engineering Opportunities
                </span>
              </div>

              {/* NAME */}
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl 
        font-black leading-tight tracking-tight text-white"
              >
                SHIJAZ K S
              </h1>

              {/* ROLE */}
              <h2
                className="mt-4 text-xl sm:text-2xl md:text-4xl 
        font-bold text-teal-400"
              >
                Software Engineer & AI Enthusiast
              </h2>

              {/* DESCRIPTION */}
              <p
                className="mt-7 text-base sm:text-lg leading-8 
        text-slate-400 max-w-2xl mx-auto lg:mx-0"
              >
                Passionate about building scalable web applications and
                AI-powered solutions using modern technologies. Focused on
                creating impactful digital experiences with clean architecture
                and efficient engineering.
              </p>

              {/* PRIMARY CTA */}
              <div
                className="flex flex-wrap justify-center lg:justify-start 
        items-center gap-4 mt-10"
              >
                {/* GITHUB */}
                <a
                  href="https://github.com/ShijazKS"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl
          bg-[#111827]/80 backdrop-blur-md
          border border-slate-800
          text-slate-200 font-medium
          hover:border-teal-400/40
          hover:text-white
          hover:-translate-y-1
          transition duration-300"
                >
                  <AiFillGithub className="text-2xl" />
                  <span>GitHub</span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/shijaz-ks/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl
          bg-[#111827]/80 backdrop-blur-md
          border border-slate-800
          text-slate-200 font-medium
          hover:border-blue-400/40
          hover:text-white
          hover:-translate-y-1
          transition duration-300"
                >
                  <AiFillLinkedin className="text-2xl text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                {/* LEETCODE */}
                <a
                  href="https://leetcode.com/shijazks/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl
  bg-[#111827]/80 backdrop-blur-md
  border border-slate-800
  text-slate-200 font-medium
  hover:border-yellow-400/40
  hover:text-white
  hover:-translate-y-1
  transition duration-300"
                >
                  <TbBrandLeetcode className="text-2xl text-yellow-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </motion.div>

            {/* DESKTOP IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* IMAGE GLOW */}
                <div className="absolute inset-0 rounded-full bg-teal-500 blur-[120px] opacity-20"></div>

                {/* IMAGE */}
                <div
                  className="relative bg-black
          w-[420px] h-[420px]
          xl:w-[470px] xl:h-[470px]
          rounded-full overflow-hidden
          border-[6px] border-teal-400/80
          shadow-2xl shadow-teal-500/10"
                >
                  <Image
                    src={pic}
                    alt="profile"
                    fill
                    priority
                    className="object-cover scale-[0.9] transition duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="px-6 md:px-20 lg:px-40 py-16 relative overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[140px] rounded-full"></div>

          <div className="relative z-10">
            {/* SECTION HEADER */}
            <div className="mb-10 pt-4">
              <h2 className="text-4xl md:text-5xl font-black mt-4">Projects</h2>
            </div>

            {/* FEATURED PROJECT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-[36px]
  border border-slate-800/80
  bg-gradient-to-br from-slate-900 via-slate-950 to-black
  backdrop-blur-xl"
            >
              {/* BACKGROUND GLOW */}
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px]
    bg-teal-500/10 blur-[120px] rounded-full"
              ></div>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr] relative z-10">
                {/* LEFT CONTENT */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  {/* BADGE */}

                  {/* TITLE */}
                  <h3
                    className="text-2xl md:text-4xl lg:text-5xl
  font-black leading-tight tracking-tight text-white
  text-center lg:text-left"
                  >
                    Web Ad Positioning
                    <span className="block text-teal-400 mt-1">
                      using Explainable RL
                    </span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="mt-6 md:mt-8
  text-slate-400 leading-7 md:leading-8
  text-sm sm:text-base md:text-lg
  max-w-2xl lg:max-w-3xl
  mx-auto lg:mx-0
  text-center lg:text-left"
                  >
                    Building an explainable reinforcement learning system for
                    personalized advertisement placement using behavioral
                    analytics and user engagement patterns.
                    <span className="hidden lg:inline">
                      {" "}
                      The system focuses on optimizing ad positioning decisions
                      while generating transparent, interpretable explanations
                      for recommendation outputs through explainable AI methods.
                    </span>
                  </p>

                  {/* TECH STACK */}
                  <div className=" hidden lg:flex flex-wrap gap-3 mt-8">
                    {[
                      "Python",
                      "Reinforcement Learning",
                      "Explainable AI",
                      "Machine Learning",
                      "Decision Trees",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm
            bg-slate-800/80 border border-slate-700
            text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT VISUAL */}
                <div
                  className="relative
  min-h-[240px] sm:min-h-[280px] lg:min-h-full
  border-t lg:border-t-0 lg:border-l border-slate-800/80"
                >
                  {/* GRID BACKGROUND */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  ></div>

                  {/* CONTENT */}
                  <div
                    className="relative h-full
    flex flex-col justify-center
    px-6 py-10 sm:px-8 sm:py-12 lg:p-10
    text-center"
                  >
                    {/* TOP LABEL */}
                    <div
                      className="inline-flex mx-auto items-center gap-2
      px-3 py-1.5 rounded-full
      bg-teal-500/10 border border-teal-500/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>

                      <span className="text-[11px] sm:text-xs text-teal-400 font-medium tracking-wide">
                        Featured Project
                      </span>
                    </div>

                    {/* HEADING */}
                    <h4
                      className="mt-6
      text-xl sm:text-2xl md:text-3xl
      font-bold text-white leading-tight"
                    >
                      Explainable Reinforcement Learning
                    </h4>

                    {/* SUBTEXT */}
                    <p
                      className="mt-4
      text-sm sm:text-base
      text-slate-400 leading-7
      max-w-md mx-auto"
                    >
                      Optimizing advertisement placement decisions using
                      interpretable machine learning and user behavior
                      analytics.
                    </p>

                    {/* METRICS */}
                    <div
                      className="grid grid-cols-3 gap-3
      mt-8 sm:mt-10"
                    >
                      {[
                        ["XRL", "Explainability"],
                        ["RL", "Optimization"],
                        ["AI", "Analytics"],
                      ].map(([title, subtitle], i) => (
                        <div
                          key={i}
                          className="rounded-2xl
          border border-slate-800
          bg-slate-900/60
          px-3 py-4"
                        >
                          <h5
                            className="text-lg sm:text-2xl
            font-bold text-teal-400"
                          >
                            {title}
                          </h5>

                          <p
                            className="text-[10px] sm:text-xs
            text-slate-500 mt-1 leading-4"
                          >
                            {subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LIVE PROJECTS */}
            <div className="mt-20">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-black mt-4">
                  Live Projects
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                  <motion.a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group rounded-3xl overflow-hidden
            bg-slate-900/70 backdrop-blur-xl
            border border-slate-800
            hover:border-teal-400/30
            hover:-translate-y-2
            transition duration-300"
                  >
                    {/* IMAGE */}
                    <div className="overflow-hidden border-b border-slate-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-5 leading-7 text-slate-400">
                        {project.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FUTURE PROJECTS PLACEHOLDER */}
            <div className="mt-20 ">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-black mt-4">
                  Experiments & Explorations
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherprojects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-3xl
        border border-slate-800
        bg-slate-900/60 backdrop-blur-xl
        hover:border-teal-400/30
        hover:-translate-y-1.5
        transition duration-300"
                  >
                    {/* TOP GLOW */}
                    <div
                      className="absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-teal-400/50 to-transparent
          opacity-0 group-hover:opacity-100 transition duration-500"
                    ></div>

                    <div className="p-7">
                      {/* PROJECT NUMBER */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-medium text-slate-500">
                          0{index + 1}
                        </span>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-500 hover:text-white transition duration-300"
                          >
                            <AiFillGithub className="text-2xl" />
                          </a>
                        )}
                      </div>

                      {/* TITLE */}
                      <h4
                        className="text-xl font-bold text-white
            group-hover:text-teal-400 transition duration-300"
                      >
                        {project.title}
                      </h4>

                      {/* DESCRIPTION */}
                      <p className="mt-4 text-slate-400 leading-7 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="relative px-6 md:px-20 lg:px-40 py-20 overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div
            className="absolute left-0 top-20
    w-[220px] h-[220px] md:w-[300px] md:h-[300px]
    bg-teal-500/10 blur-[100px] md:blur-[120px]
    rounded-full"
          ></div>

          <div className="relative z-10">
            {/* HEADER */}
            <div className="mb-12 md:mb-14">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl
        font-black tracking-tight text-white
        text-center lg:text-left"
              >
                Skills & Technologies
              </h2>

              <p
                className="mt-5 text-sm sm:text-base md:text-lg
        text-slate-400 leading-7 max-w-2xl
        mx-auto lg:mx-0 text-center lg:text-left"
              >
                Technologies, frameworks, and developer tools used to build
                scalable applications and AI-powered systems.
              </p>
            </div>

            {/* SKILL CATEGORIES */}
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {/* FULL STACK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group rounded-[28px]
        border border-slate-800
        bg-slate-900/60 backdrop-blur-xl
        p-6 sm:p-8
        hover:border-teal-400/20
        transition duration-300"
              >
                {/* TOP LINE */}
                <div
                  className="w-12 h-[2px]
          bg-gradient-to-r from-teal-400 to-transparent
          mb-6"
                ></div>

                {/* TITLE */}
                <h3
                  className="text-xl sm:text-2xl
          font-bold text-white"
                >
                  Web Development
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-7">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Firebase",
                    "Socket.IO",
                    "TailwindCSS",
                    "Redux",
                    "REST APIs",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 sm:px-4
              rounded-full text-xs sm:text-sm
              bg-slate-800 border border-slate-700
              text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* AI & INTELLIGENT SYSTEMS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group rounded-[28px]
        border border-slate-800
        bg-slate-900/60 backdrop-blur-xl
        p-6 sm:p-8
        hover:border-teal-400/20
        transition duration-300"
              >
                {/* TOP LINE */}
                <div
                  className="w-12 h-[2px]
          bg-gradient-to-r from-teal-400 to-transparent
          mb-6"
                ></div>

                {/* TITLE */}
                <h3
                  className="text-xl sm:text-2xl
          font-bold text-white"
                >
                  AI & Intelligent Systems
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-7">
                  {[
                    "Python",
                    "Machine Learning",
                    "Reinforcement Learning",
                    "OpenCV",
                    "TensorFlow",
                    "Computer Vision",
                    "Explainable AI",
                    "Data Analysis",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 sm:px-4
              rounded-full text-xs sm:text-sm
              bg-slate-800 border border-slate-700
              text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* TOOLS & LINUX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group rounded-[28px]
        border border-slate-800
        bg-slate-900/60 backdrop-blur-xl
        p-6 sm:p-8
        hover:border-teal-400/20
        transition duration-300"
              >
                {/* TOP LINE */}
                <div
                  className="w-12 h-[2px]
          bg-gradient-to-r from-teal-400 to-transparent
          mb-6"
                ></div>

                {/* TITLE */}
                <h3
                  className="text-xl sm:text-2xl
          font-bold text-white"
                >
                  Developer Tools & Linux
                </h3>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-7">
                  {[
                    "Git",
                    "Docker",
                    "Linux",
                    "Kubernetes",
                    "CI/CD",
                    "Figma",
                    "Cloud Platforms",
                    "Postman",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 sm:px-4
              rounded-full text-xs sm:text-sm
              bg-slate-800 border border-slate-700
              text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 md:px-20 lg:px-40 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold">Let’s Build Something Great</h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Open to internships, collaborations, freelance opportunities, and
              full-time roles in software development and AI engineering.
            </p>

            <a
              href="mailto:shijazofficial@gmail.com"
              className="inline-block mt-10 px-8 py-4 rounded-2xl bg-teal-600 text-white font-semibold hover:scale-105 transition"
            >
              Get In Touch
            </a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 py-6">
          <div className="flex items-center justify-center">
            <p className="text-sm tracking-wide text-slate-500">
              © {new Date().getFullYear()} Shijaz K S • MTech CSE • NITian
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
