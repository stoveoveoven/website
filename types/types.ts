export type ExperienceProps = {
  company: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  description: string[];
};

export type Experiences = {
  companies: [ExperienceProps];
};
