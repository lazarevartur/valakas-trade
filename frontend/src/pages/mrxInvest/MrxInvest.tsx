import React from "react";
import { BinarProfitTeamMain } from "../../component/BinarProfitTeamGroup/binarProfitTeamMain";
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
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

interface MrxInvest {}

const MrxInvestBenefitsData = [
  {
    title: "",
    text:
      "Заработок от вкладов по нескольким направлениям одновременно: майнинг криптовалют, депозиты, Launchpool, DeFi-стейкинг",
    icon: mrx1,
  },
  {
    title: "",
    text: "Ежедневные выплаты до 2% без выходных",
    icon: mrx2,
  },
  {
    title: "",
    text:
      "Возможность участия в партнерской программе с доходностью до 40% в месяц",
    icon: mrx3,
  },
  {
    title: "",
    text:
      "Простой линейный маркетинг-план без ограничений по развитию структуры в ширину",
    icon: mrx4,
  },
];

const MrxInvest: React.FC<MrxInvest> = () => {
  return (
    <div>
      <FullWidthRow>
        <JumbotronCustom
          img={MrxInvestImg}
          title={"MRX-invest"}
          text={
            "Инвестиционная программа MRX-invest позволяет партнерам получать доход с плавающей ставкой до 2% в день в зависимости от вклада. В основе лежит классический маркетинг"
          }
          lg={5}
        />
      </FullWidthRow>
      <MainRow>
        <Benefits
          title={"Преимущества с MRX-invest"}
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
