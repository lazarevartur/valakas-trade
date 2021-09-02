import React from "react";
import styles from "./about.module.scss";
import { defaultComponentProps } from "../../types/types";
import { HighQualityPrototype } from "../../component/aboutPageLandingGroup/highQualityPrototype";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { MainRow } from "../../layouts/mainRow";
import { MainAdvantages } from "../../component/aboutPageLandingGroup/mainAdvantages";
import { MiraxHistory } from "../../component/aboutPageLandingGroup/miraxHistory";
import { CompanyInterest } from "../../component/aboutPageLandingGroup/companyInterest";
import { EnableComplaint } from "../../component/aboutPageLandingGroup/enableComplaint";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import aboutUsImg from "../../assets/img/aboutPage.jpg";
import { Trans, useTranslation } from "react-i18next";

interface AboutProps extends defaultComponentProps {}

const AboutPage: React.FC<AboutProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <>
      <FullWidthRow>
        <HighQualityPrototype />
      </FullWidthRow>
      <FullWidthRow>
        <JumbotronCustom
          bgPos={"top"}
          img={aboutUsImg}
          title={
            <h3 className={styles.block2_title}>
              {t("AboutPage.descriptionBLock.title")}
            </h3>
          }
          text={
            <>
              <p className={styles.block2_p}>
                {t("AboutPage.descriptionBLock.block.text1")}
              </p>
              <p className={styles.block2_p}>
                <span style={{ color: "#FEC825" }}>Mirax</span>{" "}
                {t("AboutPage.descriptionBLock.block.text2")}
              </p>
            </>
          }
          lg={5}
        />
      </FullWidthRow>
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
