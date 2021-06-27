import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import diamondsSvg from "../../assets/svg/diamonds.svg";
import { Loader } from "../../component/uiKit/loader";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import { BecomePartner } from "../../component/homePageLandingGroup/becomePartner";
import styles from "./Community.module.scss";
const JumbotronCustom = React.lazy(
  () => import("../../component/uiKit/JumbotronCustom/JumbotronCustom")
);

const BenefitsData = [
  {
    title: "Concept",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
  },
  {
    title: "Research",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
  },
  {
    title: "Marketing",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
  },
  {
    title: "Concept",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
  },
  {
    title: "Research",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
  },
  {
    title: "Marketing",
    text:
      "Exercitationem rerum nesciunt dicta voluptatem eligendi laudantium temporibus voluptatibus pariatur. Numquam veritatis dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque doloremque ullam quae eaque qui iste ut. ",
    icon: diamondsSvg,
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
