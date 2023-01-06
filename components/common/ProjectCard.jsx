import Image from "next/image";
import React from "react";
export const ProjectCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image.url}
        alt="image"
        width={300}
        height={300}
        className="aspect-square object-cover"
      ></img>
      <p>{project.name}</p>
      <p>{project.excerpt}</p>
    </div>
  );
};
