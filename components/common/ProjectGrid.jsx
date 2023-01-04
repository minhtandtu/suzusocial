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
    <div className="bg-red-200 grid grid-cols-3 gap-4 ">
      {newProjects.map((item) => (
        <div key={item.id} className="w-full bg-blue-300 ">
          <ProjectCard project={item} />
        </div>
      ))}
    </div>
  );
};
