import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  BsFillMoonStarsFill,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { useState } from "react";

import pic from "../public/pic.jpg";
import Image from "next/image";

import open from "../public/open-talk.png"
import etalk from "../public/etalk.png";
import clever from "../public/clever.png";
import gamify from "../public/gamify.png";
import imaginify from "../public/imaginify.png";
import thequran from "../public/thequran.png";

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
              Shijaz Ks
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Fullstack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am very committed towards my projects.Love to learn more and
              more about the new technologies of this new world.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/ShijazKS">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/shijaz-ks/">
                <AiFillLinkedin />
              </a>
              <a href="https://twitter.com/ShijazKs">
                <AiFillTwitterCircle />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 sm:w-80 sm:h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={pic} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer, I've done
              remote work in
              <span className="text-teal-500"> websites </span>
              and collaborated with talanted people to create dynamic sites with
              database.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://cleversystems.vercel.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={clever}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={etalk}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://imaginify.vercel.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={imaginify}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://open-talk.vercel.app">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={open}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thequran.framer.ai/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={thequran}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://gamey-sage.vercel.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={gamify}
                />
              </a>
            </div>
          </div>
        </section>

        <footer className="">
          <div className="py-5 text-center dark:text-white">
            <ul className="flex justify-center py-2 items-center">
              <li>
                <a href="https://twitter.com/ShijazKs">
                  <BsTwitter className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com/_u/shijaz_ks/">
                  <BsInstagram className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shijaz-ks/">
                  <BsLinkedin className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="mailto:hafizshijaz@gmail.com">
                  <MdEmail className="cursor-pointer text-2xl mx-2" />
                </a>
              </li>
            </ul>
            <p className="text-sm">
              Copyright©2022{" "}
              <span className="text-blue-800 dark:text-yellow-500">
                {" "}
                Jaz Design{" "}
              </span>{" "}
              all rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
