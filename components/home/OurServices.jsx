import React from "react";
import { LSServices } from "../common/LSServices";
import { RSServices } from "../common/RSServices";
import useTrans from "../hooks/useTrans";
export const OurServices = () => {
  const trans = useTrans();
  return (
    <div className="bg-white py-16">
      <div className="bd container mx-auto flex w-[90%] max-w-[78.75rem] ">
        <div className="bdd min-h-screen w-1/2">
          Left Side Services
          <LSServices services={trans.services} />
        </div>
        <div className="bdd w-1/2 ">
          Right Side Services
          <p className="text-4xl font-semibold">
            {trans.home.rightservice.bigtext}
          </p>
          <p>{trans.home.rightservice.smalltext}</p>
        </div>
      </div>
    </div>
  );
};
