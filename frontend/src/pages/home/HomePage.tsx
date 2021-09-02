import React, { Suspense } from "react";
import { MainRow } from "../../layouts/mainRow";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import { PartnershipPrograms } from "../../component/homePageLandingGroup/partnershipPrograms";
import { ProfitabilityTableLanding } from "../../component/homePageLandingGroup/profitabilityTableLanding";
import { ProfitCalculator } from "../../component/homePageLandingGroup/profitСalculator";
import { News } from "../../component/homePageLandingGroup/news";
import { BecomePartner } from "../../component/homePageLandingGroup/becomePartner";
import useRefferalLink from "../../hooks/useRefferalLink";
import img from "../../assets/img/homePageImg.jpg";
import JumbotronImg from "../../assets/img/homePageJumbotronImg.jpg";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import mountainsSvg from "../../assets/svg/mountains.svg";
import circlesSvg from "../../assets/svg/circles.svg";
import diamondsSvg from "../../assets/svg/diamonds.svg";
import { VideoBlock } from "../../component/homePageLandingGroup/videoBlock";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  useRefferalLink();
  const { t } = useTranslation();
  const root = "HomePage";
  const dataBenefits = [
    {
      title: t(`${root}.benefitsBlock.firstBlock.title`),
      text: t(`${root}.benefitsBlock.firstBlock.text`),
      icon: mountainsSvg,
    },
    {
      title: t(`${root}.benefitsBlock.secondBlock.title`),
      text: t(`${root}.benefitsBlock.secondBlock.text`),
      icon: circlesSvg,
    },
    {
      title: t(`${root}.benefitsBlock.thirdBlock.title`),
      text: t(`${root}.benefitsBlock.thirdBlock.text`),
      icon: diamondsSvg,
    },
  ];

  return (
    <>
      <FullWidthRow>
        <JumbotronCustom
          img={JumbotronImg}
          bgPos={"center top"}
          title={t("HomePage.title")}
          text={t("HomePage.text")}
          lg={8}
        />
      </FullWidthRow>
      <FullWidthRow>
        <VideoBlock />
      </FullWidthRow>
      <MainRow>
        <Benefits
          data={dataBenefits}
          title={t(`${root}.benefitsBlock.title`)}
        />
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
      <FullWidthRow>
        <BecomePartner img={img} title={t(`${root}.BecomePartner.title`)} />
      </FullWidthRow>
    </>
  );
};

export default HomePage;
