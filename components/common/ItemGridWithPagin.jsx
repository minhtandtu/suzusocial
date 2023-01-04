import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { ProjectCard } from "./ProjectCard";

export const ItemGridWithPagin = ({ projects, numOfCard }) => {
  const [currentPage, setcurrentPage] = useState(0);
  const [itemsInPage, setitemsInPage] = useState(6);

  const newprojects = [...projects];
  const start = currentPage * itemsInPage;
  const totalItems = projects.length;
  const totalPages = Math.ceil(totalItems / itemsInPage);

  const [currentProjects, setcurrentProjects] = useState(() => {
    return newprojects.splice(start, itemsInPage);
  });

  function handleChangePage(newPage) {
    setcurrentPage(newPage);
  }
  let newPJ = [...projects];
  newPJ = newPJ.splice(start, itemsInPage);
  return (
    <div className="flex flex-col items-center space-y-4">
      <p>Pagination</p>
      <p>CurrentPage: {currentPage + 1}</p>
      <div className="bg-red-200 grid grid-cols-3 gap-4 ">
        {newPJ.map((item, index) => (
          <div key={index} className="w-full bg-blue-300 ">
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsInPage={itemsInPage}
        totalPages={totalPages}
        totalItems={totalItems}
        changePage={handleChangePage}
      />
    </div>
  );
};
