"use client";

import { ProjectProps } from "@/types/types";
import Image from "next/image";
import placeholder from "../assets/placeholder.gif";
import { useState } from "react";

export const Project = (props: ProjectProps) => {
  const [focused, setFocused] = useState(false);

  const exploreButtonAnimation = focused
    ? "pr-[24px] pl-[8px] bg-red-300 after:opacity-100 after:right-[26px]"
    : "";

  const showDescriptionAnimation = focused ? "after:opacity-100" : "";
  const moveTitleUpAnimation = focused ? "pt-[10px] bg-red-300" : "";

  return (
    <div
      className="bg-gray-100 rounded-xl p-7 flex gap-3 border-2 shadow-lg w-[1200px] items-center "
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      <div className="flex flex-col gap-2 grow">
        <h1
          className={`text-xl font-bold duration-200
        ${moveTitleUpAnimation}`}
        >
          {props.id}
        </h1>
        <div
          data-text={props.description}
          className={`duration-200 inline-block relative 
          after:content-[attr(data-text)] after:absolute after:opacity-0 after:duration-200
          ${showDescriptionAnimation}`}
        ></div>
        <button
          className={`"border-2 bg-blue-200 rounded-lg py-2 w-[150px] duration-200 inline-block relative 
          after:content-['-->'] after:absolute after:opacity-0 after:duration-200 after:right-[30px]
            ${exploreButtonAnimation} `}
        >
          Explore
        </button>
        {/* <button
          className="border-2 bg-blue-200 rounded-lg py-2 w-[150px] duration-200 inline-block relative 
        after:content-['-->'] after:absolute after:opacity-0 after:duration-200 after:right-[30px] 
        hover:pr-[24px] hover:pl-[8px] hover:bg-red-300 
        hover:after:opacity-100 hover:after:right-[26px]"
        >
          Explore
        </button> */}
      </div>
      <Image src={placeholder} alt={""} className="w-32 h-32"></Image>
    </div>
  );
};
