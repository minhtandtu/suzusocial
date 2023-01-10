import React from "react";
import useTrans from "../hooks/useTrans";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export const Hero = () => {
  const trans = useTrans();

  return (
    <div className="bd relative ">
      <div>
        <img
          src="/image/bg.png"
          className="bdd h-full min-h-[718px] object-cover"
        ></img>
      </div>
      <div className="absolute top-0 h-full w-full px-4">
        <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center pt-20 text-center font-semibold text-white">
          <p className="pb-6 text-4xl font-bold md:text-[3.25rem]">
            {trans.home.hero.bigtext}
          </p>
          <div className="max-w-[38.75rem]">
            <p className="text-sm font-normal md:text-base ">
              {trans.home.hero.smalltext}
            </p>
          </div>
          <div className="relative">
            <div className="divtext mt-12 aspect-square w-28">
              <p className="text-circle text-sm font-semibold text-secondary md:text-base">
                KHÁM PHÁ NGAY KHÁM PHÁ NGAY
              </p>
            </div>
            <div className="absolute top-12 grid aspect-square w-28 place-content-center">
              <ArrowDownIcon className="h-5  w-5 text-secondary md:h-6 md:w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
