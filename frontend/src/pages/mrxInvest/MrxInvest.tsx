import React from "react";
import styles from "./MrxInvest.module.scss";
import { MainRow } from "../../layouts/mainRow";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { InvestmentPackages } from "../../component/BinarProfitTeamGroup/InvestmentPackages";
import { ProfitCalculator } from "../../component/homePageLandingGroup/profitСalculator";
import MrxInvestImg from "../../assets/img/MrxInvestImg.jpg";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import mrx1 from "../../assets/svg/mrx1.svg";
import mrx2 from "../../assets/svg/mrx2.svg";
import mrx3 from "../../assets/svg/mrx3.svg";
import mrx4 from "../../assets/svg/mrx4.svg";
import { useTranslation } from "react-i18next";

interface MrxInvestProps {}

const MrxInvest: React.FC<MrxInvestProps> = () => {
  const { t } = useTranslation();
  const MrxInvestBenefitsData = [
    {
      title: "",
      text: t("MrxInvest.MrxInvestBenefitsData.1block.text"),
      icon: mrx1,
    },
    {
      title: "",
      text: t("MrxInvest.MrxInvestBenefitsData.2block.text"),
      icon: mrx2,
    },
    {
      title: "",
      text: t("MrxInvest.MrxInvestBenefitsData.3block.text"),
      icon: mrx3,
    },
    {
      title: "",
      text: t("MrxInvest.MrxInvestBenefitsData.4block.text"),
      icon: mrx4,
    },
  ];
  return (
    <div>
      <JumbotronCustom
        img={MrxInvestImg}
        title={"MRX-invest"}
        text={t("MrxInvest.JumbotronCustom.text")}
        lg={6}
        className={styles.MrxInvest}
      />

      <MainRow>
        <Benefits
          title={t("MrxInvest.MrxInvestBenefitsData.title")}
          data={MrxInvestBenefitsData}
          fourElement={true}
        />
      </MainRow>
      <FullWidthRow>
        <InvestmentPackages />
      </FullWidthRow>
      <FullWidthRow>
        <ProfitCalculator />
      </FullWidthRow>
    </div>
  );
};

export default MrxInvest;
