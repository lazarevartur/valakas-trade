import React from "react";
import styles from "./homePage.module.scss";
import { JumbotronMain } from "../../component/homePageLandingGroup/jumbotronMain";
import { VideoBlock } from "../../component/homePageLandingGroup/videoBlock";
import { MainRow } from "../../layouts/mainRow";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import { PartnershipPrograms } from "../../component/homePageLandingGroup/partnershipPrograms";

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
    </>
  );
};

HomePage.defaultProps = {};

export default HomePage;
