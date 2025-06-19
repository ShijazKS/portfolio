import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Travel Assistant AI",
    github: "https://github.com/ShijazKS/Travel_Assist",
    description:
      "A desktop application powered by a reinforcement learning agent that recommends tourist destinations within Indian states based on user preference history.",
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
  
];

const ProjectCard = ({ title, github, description }) => (
  <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-5 border border-slate-900 dark:border-white transition-all hover:shadow-xl">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
      {description}
    </p>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-blue-600 dark:text-blue-400 inline-flex items-center hover:underline"
    >
      <FaGithub className="mr-1" />
      View on GitHub
    </a>
  </div>
);

const ProjectList = () => {
  return (
    <section className="pb-8 ">
      <h3 className="text-3xl pb-6 dark:text-white text-teal-800 font-semibold font-sans">
        Other Projects
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
