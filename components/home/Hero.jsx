import React from "react";
import useTrans from "../hooks/useTrans";
export const Hero = () => {
  const trans = useTrans();

  return (
    <div className="bg-purple-500 h-[100vh] max-h-[700px]">
      <div className="flex flex-col items-center justify-center font-semibold text-white h-full max-w-4xl text-center mx-auto pt-20">
        <p className="text-7xl pb-10">{trans.home.hero.bigtext}</p>
        <p className="text-xl">{trans.home.hero.smalltext}</p>
      </div>
    </div>
  );
};
