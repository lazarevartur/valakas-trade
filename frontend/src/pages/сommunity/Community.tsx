import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Loader } from "../../component/uiKit/loader";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import { BecomePartner } from "../../component/homePageLandingGroup/becomePartner";
import styles from "./Community.module.scss";
import LoyaltyPng from "../../assets/png/community/Loyalty.png";
import ManufacturabilityPng from "../../assets/png/community/Manufacturability.png";
import OpennessPng from "../../assets/png/community/Openness.png";
import StabilityPng from "../../assets/png/community/Stability.png";
import SuccessPng from "../../assets/png/community/Success.png";
import UnityPng from "../../assets/png/community/Unity.png";
const JumbotronCustom = React.lazy(
  () => import("../../component/uiKit/JumbotronCustom/JumbotronCustom")
);

const BenefitsData = [
  {
    title: "Объединенность",
    text:
      "Мы живем ярко, достигаем наших целей, проводим мероприятия и строим вместе команды",
    icon: UnityPng,
  },
  {
    title: "Лояльность",
    text:
      "Мы взаимодействуем, поддерживаем и относимся друг к другу с уважением",
    icon: LoyaltyPng,
  },
  {
    title: "Открытость",
    text:
      "Наше сообщество открыто для каждого – вы можете связаться с нами в любой момент и всегда получите помощь",
    icon: OpennessPng,
  },
  {
    title: "Технологичность",
    text:
      "Мы следим за тенденциями в мире, и выбираем наиболее прибыльные проекты для сотрудничества",
    icon: ManufacturabilityPng,
  },
  {
    title: "Успех",
    text:
      "Мы не только закрываем свои базовые потребности, но и получаем дополнительную награду за активность",
    icon: SuccessPng,
  },
  {
    title: "Стабильность",
    text:
      "Резиденты Mirax всегда знают дату, когда получат выплату по программе ",
    icon: StabilityPng,
  },
];

interface CommunityProps {}

const Community: React.FC<CommunityProps> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <JumbotronCustom />
      <div className={styles.bgGrey}>
        <Container>
          <Benefits data={BenefitsData} title={"Принципы сообщества"} />
          <BecomePartner title={"Начните получать доход уже сегодня"} />
        </Container>
      </div>
    </Suspense>
  );
};

Community.defaultProps = {};

export default Community;
