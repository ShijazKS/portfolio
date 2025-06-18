import React from "react";
import Image from "next/image";

const ProjectCase = ({ pic, site, title, description }) => {
  return (
    <div className="projectBox basis-1/3 flex-1 shadow-xl border-2 border-[#3e3232] dark:border-white rounded-xl overflow-hidden group relative bg-white dark:bg-slate-800">
      <a href={site} className="block w-full h-full relative">
        {/* Project Image */}
        <Image
          className="lg:rounded-lg rounded-t-lg  object-cover transition-opacity duration-300 opacity-100"
          layout="responsive"
          width={700}
          height={475}
          src={pic}
          alt="Project screenshot"
        />

        {/* --- Title (Always at Top-Left on Mobile) --- */}
        <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-60 text-white px-2 py-1 rounded md:hidden">
          <span className="font-semibold">{title}</span>
        </div>

        {/* --- Desktop Hover Description Overlay --- */}
        <div
          className="hidden md:flex absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-60 backdrop-blur-md text-white px-4 py-2 items-center justify-center text-center text-sm sm:text-base
             transform translate-x-[0%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
             transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10"
        >
          <div>
            <div className="font-semibold text-lg mb-1">{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </a>

      {/* --- Mobile Description (Below the Image) --- */}
      <div className="md:hidden px-4 py-3 text-sm text-[#3e3232] dark:text-white bg-white dark:bg-slate-800">
        {description}
      </div>
    </div>
  );
};

export default ProjectCase;
