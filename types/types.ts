export type ExperienceProps = {
  company: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  description: string[];
};

export type ExperienceList = {
  companies: [ExperienceProps];
};

export type ProjectProps = {
  id: string;
  href: string;
  description: string;
};
export type ProjectList = {
  projects: [ProjectProps];
};
