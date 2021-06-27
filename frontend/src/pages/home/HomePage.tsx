import React from "react";
import { VideoBlock } from "../../component/homePageLandingGroup/videoBlock";
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

const HomePage: React.FC = () => {
  useRefferalLink();
  const dataBenefits = [
    {
      title: "Доходность __% годовых ",
      text:
        "Выбор из представленных тарифных пакетов с высокой окупаемостью до __% годовых. Гарантированный доход уже через день",
      icon: mountainsSvg,
    },
    {
      title: "Прибыльная бизнес-модель  ",
      text:
        "Возможность построить собственную структуру благодаря интегрированным реферальным системам, получая дополнительный доход, бонусы и премии за активность ",
      icon: circlesSvg,
    },
    {
      title: "Отсутствие рисков  ",
      text:
        "Никаких нелегальных проектов, торговли на биржах, сделок на повышение или понижение, несущих риск",
      icon: diamondsSvg,
    },
  ];
  return (
    <>
      <FullWidthRow>
        <JumbotronCustom
          img={JumbotronImg}
          bgPos={"center top"}
          title={"Готовые инвестиционные решения с ежедневным доходом"}
          text={`Платформа Mirax предоставляет широкие инвестиционные предложения в проекты блокчейн-индустрии для создания активного и пассивного доходов с помощью модели партнерских программ`}
          lg={8}
        />
      </FullWidthRow>
      <FullWidthRow>
        <VideoBlock />
      </FullWidthRow>
      <MainRow>
        <Benefits data={dataBenefits} />
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
        <BecomePartner
          img={img}
          title={
            "Станьте партнером Mirax и сделайте ваш бизнес высокодоходным с первого дня"
          }
        />
      </FullWidthRow>
    </>
  );
};

export default HomePage;
