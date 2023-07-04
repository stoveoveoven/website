import React from "react";
import { ExperienceProps } from "@/types/types";

export const Experience = (prop: ExperienceProps) => {
  return (
    <div className="">
      <div>
        {prop.startDate} - {prop.endDate}
      </div>
      <div>{prop.jobTitle}</div>
      <div>{prop.company}</div>
      <div>{prop.description}</div>
    </div>
  );
};
