"use client";

import { Project } from "./Project";
import pastProjects from "../data/projects.json";
import { ProjectList } from "@/types/types";
import { useEffect, useState } from "react";

export const Projects = () => {
  const projects: ProjectList = JSON.parse(JSON.stringify(pastProjects));

  const [numRenderedProjects, setNumRenderedProjects] = useState(4);
  const [renderedProjects, setRenderedProjects] = useState<JSX.Element[]>([]);
  const renderProjects = () => {
    setRenderedProjects(
      projects.projects
        .filter((project, index) => {
          return index < numRenderedProjects && project;
        })
        .map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              href={project.href}
              description={project.description}
              backgroundImage={project.backgroundImage}
            />
          );
        })
    );
  };

  useEffect(() => {
    renderProjects();
  }, [numRenderedProjects]);

  return (
    <div className="flex flex-col gap-4">
      {renderedProjects}

      <div className="flex justify-center relative">
        <button
          className="bg-white border rounded-xl mt-5 w-fit p-2 text-2xl font-bold self-center"
          onClick={() => {
            setNumRenderedProjects(numRenderedProjects + 4);
          }}
        >
          Load more
        </button>
        <p className="absolute bottom-3 right-[28%] text-red-500">
          {numRenderedProjects > projects.projects.length + 3 &&
            "No more projects!"}
        </p>
      </div>
    </div>
  );
};
