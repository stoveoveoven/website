"use client";

import { Project } from "./Project";
import pastProjects from "../data/projects.json";
import { ProjectList } from "@/types/types";
import { useState } from "react";

export const Projects = () => {
  const projects: ProjectList = JSON.parse(JSON.stringify(pastProjects));


  const [numRenderedProjects, setNumRenderedProjects] = useState(4);

  const visibleProjects = projects.projects
    .slice(0, numRenderedProjects)
    .map((project) => (
      <Project
        key={project.id}
        id={project.id}
        href={project.href}
        description={project.description}
        backgroundVideo={project.backgroundVideo}
      />
    ));

  const hasMore = numRenderedProjects < projects.projects.length;

  return (
    <div className="flex flex-col gap-6 pb-16">
      {visibleProjects}

      <div className="flex justify-center relative">
        {hasMore && (
          <button
            className="bg-white border rounded-xl mt-5 w-fit p-2 text-2xl font-bold self-center"
            onClick={() => setNumRenderedProjects((prev) => prev + 4)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};