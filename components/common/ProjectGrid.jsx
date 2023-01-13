import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ projects, numOfCard }) => {
  let newProjects;
  if (numOfCard) {
    newProjects = projects.slice(0, numOfCard);
  } else {
    newProjects = projects;
  }
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {newProjects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
};
