import React from "react";
import { ProjectGrid } from "../common/ProjectGrid";
import { useState } from "react";
import useTrans from "../hooks/useTrans";
import { AnimatedButton } from "../common/AnimatedButton";
export const OurHightLightProjects = ({ projects }) => {
  const trans = useTrans();
  const [numOfCard, setNumOfCard] = useState(9);

  function handleOnClickMore() {
    setNumOfCard(numOfCard + 3);
  }
  return (
    <div className="py-16">
      <div className="mx-auto w-[90%] max-w-[78.75rem] ">
        <div className="flex flex-col items-center justify-center pb-8">
          <p className="mb-8 text-3xl font-bold md:mb-8 md:text-[3.25rem] md:leading-[4rem] md:tracking-[-0.01em]">
            {trans.topservices.title}
          </p>
          <p className="mb-8 text-sm font-normal md:text-base">
            {trans.topservices.excerpt}
          </p>
        </div>
        <ProjectGrid projects={projects} numOfCard={numOfCard} />

        <div
          className="mt-8 flex cursor-pointer justify-center"
          onClick={handleOnClickMore}
        >
          <AnimatedButton
            text={trans.button.letusseeyourproject}
          ></AnimatedButton>
        </div>
      </div>
    </div>
  );
};
