"use client"

import React, { createContext, useContext, useState } from "react";
import {
  SwatchBook,
  Info,
  SunDim,
  Moon,
  ChevronLeft,
} from "lucide-react";

const ExpandedContext = createContext(false);

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ExpandedContext.Provider value={expanded}>
      <aside
        className={`
            fixed top-0 left-0
            h-screen flex flex-col gap-5 bg-gradient-to-b from-white/80 to-primary/10 shadow-md rounded-r-3xl p-3 z-20 backdrop-blur-xs
            transition-all ease-linear
            ${expanded ? "w-72" : "w-20"}
        `}
      >
        <div className="flex flex-col gap-2">
          <div
            className={`relative flex items-center ${
              expanded ? "gap-5" : "gap-0"
            }`}
          >
            <div className={`overflow-hidden ${expanded ? "w-42" : "w-0"} `}>
              <h4 className="font-semibold">Fanantenana</h4>
            </div>

            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`
                absolute -right-10 -translate-x-1/2
                bg-primary/10 ring-2 ring-primary rounded-lg p-0.5 backdrop-blur-sm transition-transform
                ${expanded ? "rotate-0" : "rotate-180"}
                `}
            >
              <ChevronLeft color="gray" size={20} />
            </button>
          </div>
        </div>

        <nav className="h-full flex flex-col gap-3 items-center">
          <div className="w-full flex-1 flex flex-col items-center gap-2">
            <Menu title="Principale">{children}</Menu>
            <hr className="border-gray-500 border-1 w-10/12" />
          </div>

          <div className="w-full flex flex-col items-center gap-5">
            <Menu title="Paramètre">
              <SidebarItem icon={<SwatchBook size={20} />} text="Thème" />
            </Menu>

            <Menu title="Compte">
              <SidebarItem icon={<Info size={20} />} text="Aide" />
            </Menu>
          </div>
        </nav>

        <ThemeMode />
      </aside>
    </ExpandedContext.Provider>
  );
};

export default Sidebar;

export const Menu = ({ title, children }) => {
  const expanded = useContext(ExpandedContext);

  return (
    <div className="w-full">
      <h4
        className={`
            mb-4 transition-all
            ${expanded ? "text-start text-md" : "text-center text-xs"}
        `}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};

export const ThemeMode = () => {
  const expanded = useContext(ExpandedContext);

  return (
    <div className="relative w-full bg-white/40 shadow-xl shadow-teal-300 min-h-14 flex overflow-hidden rounded-full border-2 border-primary px-1 py-2">
      <div
        className={`
            absolute z-10 bg-teal-500 h-10/12 top-1/2 -translate-y-1/2 rounded-full
            ${expanded ? "w-1/2" : "w-10/12"}
        `}
      ></div>
      <div className="flex w-full items-center justify-between p-1 z-20">
        <div
          className={`
            ${
            expanded
              ? "relative flex w-1/2 justify-center gap-4 items-center cursor-pointer"
              : "absolute left-1/2 -translate-x-1/2"
          } 
            `}
        >
          <SunDim size={20} />
          <span className={`${expanded ? "inline-block" : "hidden"}`}>
            Light
          </span>
        </div>
        <div
          className={`
            ${
            expanded
              ? "relative flex w-1/2 justify-center gap-4 items-center cursor-pointer"
              : "absolute left-1/2 -translate-x-1/2 hidden"
          } 
            `}
        >
          <Moon size={20} />
          <span className={`${expanded ? "inline-block" : "hidden"}`}>
            Dark
          </span>
        </div>
      </div>
    </div>
  );
};

export const SidebarItem = ({ icon, text, active }) => {
  const expanded = useContext(ExpandedContext);

  return (
    <li
      className={`
        relative flex items-center
        font-medium rounded-full cursor-pointer
        transition-colors px-4.5 py-4
        ${
        active
          ? "bg-gradient-to-b from-teal-600 to-teal-400 text-white"
          : "hover:bg-primary/30 text-gray-600"
      }
    `}
    >
      {icon}
      <span
        className={`
            overflow-hidden transition-all text-nowrap
            text-sm ${expanded ? "ml-3 w-52" : "w-0"}
        `}
      >
        {text}
      </span>
    </li>
  );
};
