import React from "react";
import { LSServices } from "../common/LSServices";
import { RSServices } from "../common/RSServices";
export const OurServices = () => {
  return (
    <div className="bg-white py-16">
      <div className="container bd w-[90%] mx-auto max-w-[78.75rem] flex ">
        <div className="w-1/2 bdd min-h-screen">
          Left Side Services
          <LSServices />
        </div>
        <div className="w-1/2 bdd ">
          Right Side Services
          <RSServices />
        </div>
      </div>
    </div>
  );
};
