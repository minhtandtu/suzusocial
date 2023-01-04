import React from "react";
export const ProjectCard = ({ project }) => {
  return (
    <div>
      <img
        src={project?.image?.url}
        alt="image"
        className="aspect-square object-cover"
      ></img>
      <p>{project.name}</p>
      <p>{project.excerpt}</p>
    </div>
  );
};
