import React from "react";
import styles from "./howToMakeMoneyHere.module.scss";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import TwoCols from "../../layouts/TwoCols/TwoCols";
import cn from "classnames";
import { Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import howMakeImg1 from "../../assets/img/HowToMakeMoneyHere1.jpg";
import howMakeImg2 from "../../assets/img/HowToMakeMoneyHere2.jpg";
import howMakeImg3 from "../../assets/img/HowToMakeMoneyHere3.jpg";
import howMakeImg4 from "../../assets/img/HowToMakeMoneyHere4.jpg";
import howMakeMoney from "../../assets/img/howMakeMoney.jpg";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import { useTranslation } from "react-i18next";

interface HowToMakeMoneyHereProps {}

const HowToMakeMoneyHere: React.FC<HowToMakeMoneyHereProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.HowToMakeMoneyHere}>
      <FullWidthRow>
        <JumbotronCustom
          img={howMakeMoney}
          bgPos={"top center"}
          title={t("HowToMakeMoneyHere.title")}
          contentPosRight={true}
          text={""}
          button={false}
          className={styles.bgSize}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          bigMargin
          className={cn(styles.NewApproach)}
          LeftCol={() => {
            return (
              <>
                <h5 className={cn(styles.title)}>
                  {t("HowToMakeMoneyHere.row1.title")}
                </h5>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row1.text1")}
                </p>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row1.text2")}
                </p>
              </>
            );
          }}
          RightCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg2} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        {" "}
        <TwoCols
          className={cn(styles.thinkOutside)}
          bigMargin
          RightCol={() => {
            return (
              <>
                <h5 className={cn(styles.title)}>
                  {t("HowToMakeMoneyHere.row2.title")}
                </h5>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row2.text1")}
                </p>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row2.text2")}
                </p>
              </>
            );
          }}
          LeftCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg3} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.Dreams)}
          LeftCol={() => {
            return (
              <div>
                <h5 className={cn(styles.title)}>
                  {t("HowToMakeMoneyHere.row3.title")}
                </h5>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row3.text1")}
                </p>
              </div>
            );
          }}
          RightCol={() => {
            return (
              <p className={styles.text_right}>
                {t("HowToMakeMoneyHere.row4.text1")}
              </p>
            );
          }}
          FullWidthRow={() => {
            return <Image className={styles.full_width} src={howMakeImg4} />;
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.Satisfied)}
          RightCol={() => {
            return (
              <div className={styles.Satisfied_bg}>
                <h5 className={cn(styles.Satisfied_title)}>
                  {t("HowToMakeMoneyHere.row5.title")}
                </h5>
                <p className={styles.text}>
                  {t("HowToMakeMoneyHere.row5.text1")}
                </p>
              </div>
            );
          }}
          LeftCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg1} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.become_partner)}
          FullWidthRow={() => {
            return (
              <div className={styles.become_partner_flex}>
                <h5 className={styles.become_partner_title}>
                  {t("HowToMakeMoneyHere.row6.title")}
                  <span>{t("HowToMakeMoneyHere.row6.text1")}</span>!
                </h5>
                <LinkContainer to={RoutePath.registration}>
                  <Button className={styles.become_partner_button}>
                    {t("HowToMakeMoneyHere.row6.text2")}
                  </Button>
                </LinkContainer>
              </div>
            );
          }}
        />
      </FullWidthRow>
    </div>
  );
};

export default HowToMakeMoneyHere;
