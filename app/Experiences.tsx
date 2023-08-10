import { Experience } from "./Experience";
import { ExperienceList } from "@/types/types";

import data from "../data/experiences.json";

export const Experiences = () => {
  const experiences: ExperienceList = JSON.parse(JSON.stringify(data));
  return (
    <div className="">
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
