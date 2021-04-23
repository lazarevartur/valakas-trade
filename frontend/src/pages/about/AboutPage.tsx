import React from "react";
import { defaultComponentProps } from "../../types/types";
import { HighQualityPrototype } from "../../component/aboutPageLandingGroup/highQualityPrototype";
import { FullWidthRow } from "../../layouts/fullWidthRow";

interface AboutProps extends defaultComponentProps {}

const AboutPage: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <>
      <FullWidthRow>
        <HighQualityPrototype />
      </FullWidthRow>
    </>
  );
};

export default AboutPage;
