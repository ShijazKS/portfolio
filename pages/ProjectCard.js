import React from "react";
import Image from "next/image";

import open from "../public/OpenTalk.png";
import dot from "../public/dotConnect2.png";
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

        <div className="projectBox basis-1/3 flex-1  shadow-2xl border-2 border-slate-400  rounded-xl">
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
        <div className="projectBox basis-1/3 flex-1 border-2 border-slate-400  shadow-2xl  rounded-xl">
          <a href="https://open-talk.vercel.app">
            <Image
              class="rounded-xl object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={open}
            />
           
          </a>
        </div>

        <div className="projectBox basis-1/3 flex-1  shadow-2xl border-2 border-slate-400   rounded-xl">
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
      
        <div className="projectBox basis-1/3 flex-1 border-2 border-slate-400  shadow-2xl  rounded-xl ">
          <a href="https://crazepark.web.app" className="link-wrapper">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={parkCar}
            />
            
          </a>
        </div>
        <div className="projectBox basis-1/3 flex-1 border-2 border-slate-400 shadow-2xl  rounded-xl bg-gray-100">
          <a href="https://jaz-blog.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={jazblog}
            />

          </a>
        </div>

        <div className="projectBox basis-1/3 flex-1 border-2 border-slate-400  shadow-2xl  rounded-xl">
          <a href="https://dotconnect.vercel.app/">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={dot}
            />
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
