import React from "react";
import useTrans from "../hooks/useTrans";
import { FourShape } from "./FourShape";
export const OurMission = () => {
  const trans = useTrans();
  return (
    <div className="bg-white py-24">
      <div className="bd mx-auto block h-full w-[90%] max-w-[78.75rem] md:flex">
        <div className=" grid place-content-center md:w-2/3 md:pr-16">
          <p className="mb-8 text-5xl">{trans.aboutpage.mission.bigtext}</p>
          <p className="text-xl">{trans.aboutpage.mission.smalltext}</p>
        </div>
        <div className="py-10 md:w-1/3">
          <FourShape />
        </div>
      </div>
    </div>
  );
};
