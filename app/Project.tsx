"use client";

import { ProjectProps } from "@/types/types";
import Image from "next/image";
import placeholder from "../assets/placeholder.gif";
import { useState } from "react";

export const Project = (props: ProjectProps) => {
  const [focused, setFocused] = useState(false);

  const exploreButtonAnimation = focused
    ? "pr-[24px] pl-[8px] bg-red-300 after:opacity-100 after:right-[20px]"
    : "";

  const showDescriptionAnimation = focused ? "after:opacity-100" : "";
  const moveTitleUpAnimation = focused ? "mb-[40px]" : "";
  const grayTintAnimation = focused ? "" : "";

  return (
    <a
      className="bg-gray-100 rounded-xl p-7 flex gap-3 shadow-lg w-[1200px] h-[300px] items-center hover:bg-slate-200 duration-200 cursor-pointer"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      href={props.href}
      target="_blank"
    >
      <div className="flex flex-col gap-2 grow justify-center">
        <h1
          className={`text-5xl uppercase font-bold duration-200 
        ${moveTitleUpAnimation}`}
        >
          {props.id}
        </h1>
        <div
          data-text={props.description}
          className={`text-2xl duration-200 inline-block absolute pt-2
          after:content-[attr(data-text)] after:absolute after:opacity-0 after:duration-200 w-[1200px] h-[50px] 
          ${showDescriptionAnimation}`}
        ></div>
        <div className="">
          <button
            className={`text-xl uppercase bg-blue-200 rounded-lg py-2 w-[150px] delay-200 duration-200 inline-block relative 
          after:content-['→'] after:absolute after:opacity-0 after:duration-200 after:delay-200 after:right-[30px]
            ${exploreButtonAnimation} `}
          >
            Explore
          </button>
        </div>
      </div>
    </a>
  );
};
