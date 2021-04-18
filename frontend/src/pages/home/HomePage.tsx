import React from "react";
import styles from "./homePage.module.scss";
import { JumbotronMain } from "../../component/homePageLandingGroup/jumbotronMain";
import { VideoBlock } from "../../component/homePageLandingGroup/videoBlock";
import { MainRow } from "../../layouts/mainRow";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import { PartnershipPrograms } from "../../component/homePageLandingGroup/partnershipPrograms";
import { ProfitabilityTableLanding } from "../../component/homePageLandingGroup/profitabilityTableLanding";
import { ProfitCalculator } from "../../component/homePageLandingGroup/profitСalculator";
import { News } from "../../component/homePageLandingGroup/news";

const HomePage = () => {
  return (
    <>
      <FullWidthRow>
        <JumbotronMain />
      </FullWidthRow>
      <FullWidthRow>
        <VideoBlock />
      </FullWidthRow>
      <MainRow>
        <Benefits />
      </MainRow>
      <FullWidthRow>
        <PartnershipPrograms />
      </FullWidthRow>
      <MainRow>
        <ProfitabilityTableLanding />
      </MainRow>
      <FullWidthRow>
        <ProfitCalculator />
      </FullWidthRow>
      <FullWidthRow>
        <News />
      </FullWidthRow>
    </>
  );
};

HomePage.defaultProps = {};

export default HomePage;
