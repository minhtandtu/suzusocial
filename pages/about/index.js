import React from "react";
import { MiniHero } from "../../components/common/MiniHero";
import { OurMission } from "../../components/common/OurMission";
import { OurTeam } from "../../components/common/OurTeam";
import { StepsToStart } from "../../components/common/StepsToStart";
import useTrans from "../../components/hooks/useTrans";

const AboutSocialMedia = () => {
  const trans = useTrans();
  return (
    <div className="bg-white ">
      <div className="bg-purple-200 pt-40 ">
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

export default AboutSocialMedia;
