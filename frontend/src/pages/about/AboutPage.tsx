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
interface AboutProps extends defaultComponentProps {}

const AboutPage: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <>
      <FullWidthRow>
        <HighQualityPrototype />
      </FullWidthRow>
      <FullWidthRow>
        <JumbotronCustom
          img={aboutUsImg}
          title={
            <h3 className={styles.block2_title}>
              Руководствуйтесь балансом между возможными рисками и потенциальной
              доходностью
            </h3>
          }
          text={
            <>
              <p className={styles.block2_p}>
                На современном рынке финансовые инструменты работают в одном
                направлении, ограничивая возможности инвесторов и увеличивая
                риски.
              </p>
              <p className={styles.block2_p}>
                <span style={{ color: "#FEC825" }}>Mirax</span> расширяет
                возможности заработка для своих партнеров, объединяя самые
                прибыльные и перспективные направления: блокчейн-проекты,
                майнинговые компании, цифровые продукты, сетевые компании и
                стартапы. Откройте для себя возможность получения финансовой
                свободы без рисков!{" "}
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
