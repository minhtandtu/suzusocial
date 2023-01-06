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
    <div className="bg-white py-16 bdd">
      <div className="bd w-[90%] mx-auto max-w-[78.75rem] ">
        <div className="flex flex-col items-center justify-center pb-8">
          <p className="text-4xl font-semibold">{trans.topservices.title}</p>
          <p>{trans.topservices.excerpt}</p>
        </div>
        <ProjectGrid projects={projects} numOfCard={numOfCard} />

        <div className="flex justify-center">
          <p
            onClick={handleOnClickMore}
            className=" bg-red-400 rounded-md cursor-pointer px-4"
          >
            Xem Them
          </p>
        </div>
      </div>
    </div>
  );
};
