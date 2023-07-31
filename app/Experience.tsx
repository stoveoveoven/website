"use client";
import React, { useState } from "react";
import { ExperienceProps } from "@/types/types";
import Image from "next/image";

export const Experience = (props: ExperienceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const animation = isHovered ? "rotate-45 bg-red-300" : "-rotate-45";

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="flex justify-center cursor-pointer">
        <div className="flex relative">
          <div className="w-3 bg-gray-500"></div>
          <label
            htmlFor="a"
            className={` w-8 h-8 absolute top-[30px] left-[-10px] z-10 ease-in-out duration-300 bg-blue-200 border-2 border-black ${animation}`}
          ></label>
        </div>
        <div className="m-8 w-10/12 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm  p-1 bg-white w-fit rounded-lg">
              {props.startDate} - {props.endDate}
            </p>
            <div className="text-5xl font-bold uppercase">{props.company}</div>
            <div className="text-2xl font-bold uppercase">{props.jobTitle}</div>
            <div className="text-xl">{props.description}</div>
          </div>
          <div className="relative w-[80px] h-[80px] shadow-xl ">
            <Image src={props.logo} alt={""} fill className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
