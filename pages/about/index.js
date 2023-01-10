import React from "react";
import { MiniHero } from "../../components/common/MiniHero";
import { OurMission } from "../../components/common/OurMission";
import { OurTeam } from "../../components/common/OurTeam";
import { StepsToStart } from "../../components/common/StepsToStart";
import useTrans from "../../components/hooks/useTrans";
import Image from "next/image";
import { MainLayout } from "../../components/layout/MainLayout";
const AboutSocialMedia = () => {
  const trans = useTrans();
  return (
    <div className="bg-white ">
      <div className="">
        <MiniHero pageTitle={trans.aboutpage.pagetitle} />
      </div>
      {/* Our mission */}
      <div>
        <OurMission />
        <StepsToStart />
        <OurTeam />
      </div>
    </div>
  );
};
AboutSocialMedia.Layout = MainLayout;

export default AboutSocialMedia;
