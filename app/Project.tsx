"use client";

import { ProjectProps } from "@/types/types";
import Image from "next/image";
import placeholder from "../assets/placeholder.gif";

export const Project = (props: ProjectProps) => {
  return (
    <div className="bg-gray-100 rounded-xl p-7">
      <h1 className="text-xl">{props.id}</h1>
      <div className="flex gap-3 justify-between">
        <div>{props.description}</div>
        <a id={props.id} href={props.href} target="_blank">
          {" "}
          LINK
        </a>
        <Image src={placeholder} alt={""} className="w-32 h-32"></Image>
      </div>
    </div>
  );
};
