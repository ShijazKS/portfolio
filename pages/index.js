import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import pic from "../public/pic.jpg";
import Image from "next/image";


import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import ProjectList from "./ProjectList";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 xs:px-0 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">jazDesign</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="shijazks-resume.pdf"
                  download="shijazks_resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              SHIJAZ KS
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Fullstack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am very committed towards my projects.Love to learn more and
              more about the new technologies of this new world.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                className="hover:text-black dark:hover:text-white"
                href="https://github.com/ShijazKS"
              >
                <AiFillGithub />
              </a>
              <a
                className="hover:text-blue-600 "
                href="https://www.linkedin.com/in/shijaz-ks/"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="hover:text-black dark:hover:text-white"
                href="https://twitter.com/ShijazKs"
              >
                <FaSquareXTwitter />
                {/* <AiFillTwitterCircle/> */}
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 sm:w-80 sm:h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={pic} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <ProjectCard />
        <ProjectList/>

        <Footer />
      </main>
    </div>
  );
}
