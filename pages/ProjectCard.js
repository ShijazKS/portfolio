import React from "react";
import Image from "next/image";

import open from "../public/openTalk.png";
import etalk from "../public/etalk.png";
import clever from "../public/clever.png";
import gamify from "../public/gamify.png";
import imaginify from "../public/imaginify.png";
import jazblog from "../public/jazblog.png";
import parkCar from "../public/parkcar.png";

const ProjectCard = () => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Embarking on my web development journey as a college student, I've
          engaged in remote collaborations, actively contributing to the
          creation of
          <span className="text-teal-500"> dynamic websites </span>. I am
          enthusiastic about expanding my knowledge in this area. I've had the
          privilege of working with talented individuals, collectively bringing
          innovative digital solutions to life.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl">
          <a href="https://cleversystems.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={clever}
            />
            <div class="overlay-text">CLEVER SYSTEMS</div>
          </a>
        </div>
        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl">
          <a href="https://open-talk.vercel.app">
            <Image
              class="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={open}
            />
            <div class="overlay-text">OPEN TALK</div>
          </a>
        </div>

        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl">
          <a href="https://imaginify.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={imaginify}
            />
            <div class="overlay-text">IMAGINIFY</div>
          </a>
        </div>
        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl">
          <a href="https://jaz-blog.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={jazblog}
            />
            <div class="overlay-text">JAZ BLOG</div>
          </a>
        </div>
        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl ">
          <a href="https://crazepark.web.app" className="link-wrapper">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={parkCar}
            />
            <div class="overlay-text">CRAZE PARK</div>
          </a>
        </div>

        <div className="projectBox basis-1/3 flex-1 border shadow-2xl border-gray-300 dark:border-none rounded-xl">
          <a href="https://gamey-sage.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={gamify}
            />
            <div class="overlay-text">GAMEY</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
