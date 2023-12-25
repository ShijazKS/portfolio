import React from "react";

const ProjectList = () => {
  return (
    <section>
      <h3 className="text-3xl py-1 mb-4 dark:text-white ">Other Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="projectList  p-2 rounded-lg dark:border-gray-400 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
          <a href="https://github.com/ShijazKS/dotfiles">
            <h1 className="font-bold text-lg">DotFiles</h1>
            <p className="text-sm">
            Optimized Arch Linux dotfiles with a BSPWM window manager configuration, featuring an efficient setup.
            </p>
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Bspwm
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                PolyBar
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Alacritty
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Zathura
              </span>
            </div>
          </a>
        </div>
        <div className="projectList  p-2 rounded-lg dark:border-gray-400 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
          <a href="https://github.com/ShijazKS/ExpenseTracker">
            <h1 className="font-bold text-lg">ExpenseTracker</h1>
            <p className="text-sm">
              Dynamic web application for efficient expense tracking with
              insightful reports.
            </p>
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Python
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Tkinder
              </span>
            </div>
          </a>
        </div>
        <div className="projectList  p-2 rounded-lg dark:border-gray-400 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
          <a href="https://github.com/ShijazKS/Quran-Reciters">
            <h1 className="font-bold text-lg">QuranReciters</h1>
            <p className="text-sm">
            Interactively  explore and listen to recitations of Quranic chapters (surahs) by various reciters.
            </p>
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Python
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                CLI
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                API
              </span>
            </div>
          </a>
        </div>
        <div className="projectList  p-2 rounded-lg dark:border-gray-400 dark:text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-700">
          <a href="https://github.com/ShijazKS/Minimo">
            <h1 className="font-bold text-lg">Minimo</h1>
            <p className="text-sm">
            Dynamic website for efficient expense tracking, providing an intuitive platform to manage financial activities. 
            </p>
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                MERN
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                Auth
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 mt-2 px-2 py-1 mr-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400 dark:bg-gray-800 dark:text-blue-50 dark:ring-slate-400">
                DataAnalysis
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="flex-grow border border-gray-300 dark:border-gray-800 mt-4"></div>
    </section>
  );
};

export default ProjectList;
