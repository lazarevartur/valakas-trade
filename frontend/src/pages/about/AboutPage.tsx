import React from "react";
import { defaultComponentProps } from "../../types/types";
import { HighQualityPrototype } from "../../component/aboutPageLandingGroup/highQualityPrototype";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { MainRow } from "../../layouts/mainRow";
import { AboutUsComponent } from "../../component/aboutPageLandingGroup/aboutUsComponent";
import { MainAdvantages } from "../../component/aboutPageLandingGroup/mainAdvantages";
import { MiraxHistory } from "../../component/aboutPageLandingGroup/miraxHistory";
import { CompanyInterest } from "../../component/aboutPageLandingGroup/companyInterest";
import { EnableComplaint } from "../../component/aboutPageLandingGroup/enableComplaint";

interface AboutProps extends defaultComponentProps {}

const AboutPage: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <>
      <FullWidthRow>
        <HighQualityPrototype />
      </FullWidthRow>
      <MainRow>
        <AboutUsComponent />
      </MainRow>
      <FullWidthRow>
        <MainAdvantages />
      </FullWidthRow>
      <MainRow>
        <MiraxHistory />
      </MainRow>
      <FullWidthRow>
        <CompanyInterest />
      </FullWidthRow>
      <FullWidthRow>
        <EnableComplaint />
      </FullWidthRow>
    </>
  );
};

export default AboutPage;
