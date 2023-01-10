import React from "react";
import { ProjectGrid } from "../common/ProjectGrid";
import { useState } from "react";
import useTrans from "../hooks/useTrans";
export const OurHightLightProjects = ({ projects }) => {
  const trans = useTrans();
  const [numOfCard, setNumOfCard] = useState(9);

  function handleOnClickMore() {
    setNumOfCard(numOfCard + 3);
  }
  return (
    <div className="bdd bg-white py-16">
      <div className="bd mx-auto w-[90%] max-w-[78.75rem] ">
        <div className="flex flex-col items-center justify-center pb-8">
          <p className="text-4xl font-semibold">{trans.topservices.title}</p>
          <p>{trans.topservices.excerpt}</p>
        </div>
        <ProjectGrid projects={projects} numOfCard={numOfCard} />

        <div className="flex justify-center">
          <p
            onClick={handleOnClickMore}
            className="cursor-pointer rounded-md px-4"
          >
            Xem Them
          </p>
        </div>
      </div>
    </div>
  );
};
