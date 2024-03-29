"use client";

import { ProjectProps } from "@/types/types";
import Image from "next/image";
import placeholder from "../assets/placeholder.gif";
import { useEffect, useState } from "react";

export const Project = (props: ProjectProps) => {
  const [focused, setFocused] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const isMobile = windowSize < 1280;
  const exploreButtonAnimation =
    focused && !isMobile ? "pr-[24px] pl-[8px] bg-red-300" : "";
  const arrowAnimation =
    focused && !isMobile
      ? "opacity-100 right-[23px]"
      : "opacity-0 right-[27px]";
  const showDescriptionAnimation =
    focused && !isMobile ? "after:opacity-100" : "";
  const moveTitleUpAnimation = focused && !isMobile ? "mb-[40px]" : "";

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowSize(window.innerWidth);
      },
      false
    );
  }, []);

  return (
    <a
      className="relative bg-gray-100 bg-opacity-70 rounded-xl flex gap-3 shadow-lg h-[300px] items-center hover:bg-gray-100 hover:bg-opacity-90 duration-200 cursor-pointer"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      href={props.href}
      target="_blank"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl object-cover absolute w-full h-full -z-10"
      >
        <source src={props.backgroundVideo} type="video/mp4" />
      </video>
      <div className="flex flex-col gap-2 grow justify-center p-7">
        <h1
          className={`text-5xl uppercase font-bold duration-200 
        ${moveTitleUpAnimation}`}
        >
          {props.id}
        </h1>
        <div
          data-text={props.description}
          className={`text-2xl duration-200 inline-block absolute pt-2
          after:content-[attr(data-text)] after:absolute after:opacity-0 after:duration-200 w-[600px] xl:w-[1200px] h-[50px] 
          ${showDescriptionAnimation}`}
        ></div>
        <div className="">
          <button
            className={`text-xl uppercase bg-blue-200 rounded-lg py-2 w-[150px] delay-200 duration-200 inline-block relative
            ${exploreButtonAnimation} `}
          >
            Explore
            <span
              className={`absolute duration-200 delay-200 ${arrowAnimation}`}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </a>
  );
};
