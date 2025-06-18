import React, { useState } from "react";
import Image from "next/image";

const ProjectCase = ({ pic, site, title, description }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="projectBox basis-1/3 flex-1 shadow-xl border-2 border-[#3e3232] dark:border-white rounded-xl overflow-hidden group relative">
      <a href={site} className="block w-full h-full relative">
        {/* Project Image - always clear */}
        <Image
          className="rounded-lg object-cover transition-opacity duration-300 opacity-100"
          layout="responsive"
          width={700}
          height={475}
          src={pic}
          alt="Project screenshot"
        />

        {/* --- Desktop: Right overlay shows only on hover --- */}
        <div
          className="hidden md:flex absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-60 backdrop-blur-md text-white px-4 py-2 items-center justify-center text-center text-sm sm:text-base
             transform translate-x-[0%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
             transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform will-change-opacity z-10"
        >
          <div>
            <div className="font-semibold text-lg mb-1">{title}</div>
            <div>{description}</div>
          </div>
        </div>

        {/* --- Mobile Title + Info Button --- */}
        <div className="md:hidden absolute top-2 left-2 z-10 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
          <span className="font-semibold">{title}</span>
        </div>

        <div className="md:hidden absolute top-2 right-2 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowInfo((prev) => !prev);
            }}
            className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded"
          >
            {showInfo ? "Close" : "Info"}
          </button>
        </div>

        {/* --- Mobile Description Panel --- */}
        {showInfo && (
          <div className="md:hidden absolute bottom-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md text-white px-4 py-3 text-sm text-center z-10">
            {description}
          </div>
        )}
      </a>
    </div>
  );
};

export default ProjectCase;
