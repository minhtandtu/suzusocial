import React from "react";
import useTrans from "../hooks/useTrans";
export const Hero = () => {
  const trans = useTrans();

  return (
    <div className="bg-purple-500 h-[100vh] max-h-[700px]">
      <div className="flex items-center justify-center font-semibold text-white h-full">
        <p className="text-7xl">{trans.home.content}</p>
      </div>
    </div>
  );
};
