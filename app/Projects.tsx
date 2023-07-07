"use client";

import { Project } from "./Project";
import pastProjects from "../data/projects.json";
import { ProjectList } from "@/types/types";

export const Projects = () => {
  const projects: ProjectList = JSON.parse(JSON.stringify(pastProjects));

  return (
    <div className="flex flex-col gap-4">
      {projects.projects.map((project) => {
        return (
          <Project
            key={project.id}
            id={project.id}
            href={project.href}
            description={project.description}
            backgroundImage={project.backgroundImage}
          />
        );
      })}
    </div>
  );
};
