import React from "react";
import { MiniHero } from "../../components/common/MiniHero";
import { OurMission } from "../../components/common/OurMission";
import { OurTeam } from "../../components/common/OurTeam";
import { StepsToStart } from "../../components/common/StepsToStart";

const AboutSocialMedia = () => {
  return (
    <div className="bg-white ">
      <div className="bg-purple-200 h-[23.719rem] pt-40 ">
        <MiniHero pageTitle="Ve Social Media" breadcrumbs="Breadcrumbs" />
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
