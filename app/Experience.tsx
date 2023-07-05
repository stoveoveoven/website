"use client";
import React, { useState } from "react";
import { ExperienceProps } from "@/types/types";

export const Experience = (props: ExperienceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const animation = isHovered
    ? "bg-blue-600 rotate-45"
    : "bg-red-500 -rotate-45";

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="flex justify-center">
        <div className="flex relative">
          <div className="w-3 bg-gray-300"></div>
          <label
            htmlFor="a"
            className={` w-8 h-8 absolute top-[30px] left-[-10px] z-10 ease-in-out duration-300 ${animation}`}
          ></label>
        </div>
        <div className="m-8 w-10/12">
          <div>
            {props.startDate} - {props.endDate}
          </div>
          <div>{props.jobTitle}</div>
          <div>{props.company}</div>
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
};
