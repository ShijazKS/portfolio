import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import pic from "../public/pic.jpg";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import ProjectCase from "../components/ProjectCase";

import clever from "../public/projects/clever.png";
import opentalk from "../public/projects/opentalk.png";
import chexcare from "../public/projects/chexcare.png";
import dotconnect from "../public/projects/dotconnect.png";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-[#e8f0c8] dark:bg-slate-900 text-gray-800 dark:text-white px-10 xs:px-0 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons font-semibold text-xl">jazDesign.</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl text-[#3e3232] dark:text-white  "
              />
            </li>
            <li>
              <a
                className=" px-4 py-1.5 border-[3px] font-semibold border-[#3E3232] dark:border-white rounded ml-8 hover:bg-[#3E3232] hover:text-[#e8f0c8] dark:hover:text-slate-900 dark:hover:bg-white transition-colors duration-300"
                href="shijazks-resume.pdf"
                download="shijazks_resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-700 font-semibold dark:text-teal-300 md:text-6xl">
            SHIJAZ K S
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl text-[#3e3232] font-semibold">
            Software Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl  mx-auto md:text-xl">
            I am deeply committed to my projects and have a strong passion for
            continuously exploring and learning about emerging technologies in
            today's ever-evolving world.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              className="hover:text-black dark:hover:text-white"
              href="https://github.com/ShijazKS"
            >
              <AiFillGithub />
            </a>
            <a
              className="hover:text-orange-700 dark:hover:text-white"
              href="https://leetcode.com/shijaz/"
            >
              {/* <FaSquareXTwitter /> */}
              <TbBrandLeetcode />
              {/* <AiFillTwitterCircle/> */}
            </a>
            <a
              className="hover:text-blue-600 dark:hover:text-white"
              href="https://www.linkedin.com/in/shijaz-ks/"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 sm:w-80 sm:h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            {/* Image */}
            <Image src={pic} layout="fill" objectFit="cover" />

            <div className="absolute inset-0 bg-slate-900 bg-opacity-30 z-10 hover:bg-opacity-10 transition-colors duration-400" />
          </div>
        </div>

        {/* Projects */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-teal-800 font-semibold font-mono">
              My Projects
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <ProjectCase
              pic={clever}
              site="https://cleversystems.vercel.app/"
              description="A responsive and professional website developed for an electronic service company. It showcases the company's services, contact details, and customer support options. The design focuses on usability and clarity, optimized for desktop and mobile viewing."
              title="CleverSystems"
            />
            <ProjectCase
              pic={opentalk}
              site="https://cleversystems.vercel.app/"
              description="An anonymous real-time chat application that allows users to create and join temporary chat rooms without login or data storage. Built for privacy and simplicity, it supports seamless real-time communication using WebSockets."
              title="OpenTalk"
            />
            <ProjectCase
              pic={chexcare}
              site="https://cleversystems.vercel.app/"
              description="An AI-based medical application for detecting pneumonia from chest X-ray images. It provides diagnostic reports with probability scores, maintains patient history, and includes secure login features. Designed to assist in early diagnosis and streamline medical workflows."
              title="CheXCare"
              />
            <ProjectCase
              pic={dotconnect}
              site="https://cleversystems.vercel.app/"
              description="A nostalgic dot-connecting game with multiple play modes, including two-player local, multiplayer, AI opponent, and online play. The game features a clean UI and interactive experience, bringing a modern touch to a classic gameplay concept."
              title="DotConnect"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
