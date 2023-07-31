import { Experience } from "./Experience";
import { ExperienceList } from "@/types/types";

import jobs from "../data/jobs.json";

export const Experiences = () => {
  const experiences: ExperienceList = JSON.parse(JSON.stringify(jobs));
  return (
    <div className="w-[1200px]">
      {experiences.companies.map((experience) => {
        return (
          <Experience
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            jobTitle={experience.jobTitle}
            description={experience.description}
            logo={experience.logo}
            key={experience.company}
          />
        );
      })}
    </div>
  );
};
