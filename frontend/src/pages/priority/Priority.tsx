import React from "react";
import styles from "./Priority.module.scss";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import optionalImg from "../../assets/img/MrxInvestImg.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import svg1 from "../../assets/svg/Rocket.svg";
import svg2 from "../../assets/svg/bage.svg";
import svg3 from "../../assets/svg/shield.svg";
import svg4 from "../../assets/svg/flight.svg";
import png1 from "../../assets/png/priorityImg.png";
import cn from "classnames";
import { PrioritySelector } from "../../component/prioritySelector";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PriorityProps {}

const Priority: React.FC<PriorityProps> = () => {
  const { t } = useTranslation();
  const dataBenefist = [
    {
      title: "",
      text: t("Priority.dataBenefist.block1"),
      icon: svg4,
    },
    {
      title: "",
      text: t("Priority.dataBenefist.block2"),
      icon: svg2,
    },
    {
      title: "",
      text: t("Priority.dataBenefist.block3"),
      icon: svg3,
    },
    {
      title: "",
      text: t("Priority.dataBenefist.block4"),
      icon: svg1,
    },
  ];
  const location = useLocation();
  const $startOffer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if ($startOffer.current) {
      $startOffer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname]);
  return (
    <>
      <JumbotronCustom
        img={optionalImg}
        title={"Priority"}
        text={t("Priority.JumbotronCustom")}
        className={styles.mobile_jimbotron}
      />
      <Container>
        <Row>
          <Col lg={12}>
            {" "}
            <Benefits
              title={t("Priority.dataBenefist.title")}
              data={dataBenefist}
              fourElement
            />
          </Col>
        </Row>
      </Container>
      <div className={cn(styles.bgf9)}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className={styles.title}>{t("Priority.Benefits.title")}</h2>
            </Col>
          </Row>
          <Row className={cn(styles.description)}>
            <Col lg={4}>
              <p className={cn(styles.accent)}>
                <span>30-60%</span>
              </p>
              <p>{t("Priority.Benefits.block1.text1")}</p>
            </Col>
            <Col lg={5}>
              <p className={cn(styles.accent)}>
                <span>60-300 {t("Priority.Benefits.block2.text2")}</span>
              </p>
              <p>{t("Priority.Benefits.block2.text1")}</p>
            </Col>
            <Col lg={3}>
              {" "}
              <p className={cn(styles.accent)}>
                <span>7</span>
              </p>
              <p>{t("Priority.Benefits.block3.text1")}</p>
            </Col>
          </Row>
          <Row ref={$startOffer}>
            <Col lg={12}>
              <PrioritySelector />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className={styles.quote}>{t("Priority.quote")}</div>
      </Container>
      <Row className={styles.desc}>
        <Col lg={5}>
          <Image src={png1} />
        </Col>
        <Col lg={6}>
          <div className={styles.desc2}>
            <h2 className={styles.title}>{t("Priority.desk.title")} </h2>
            <ol>
              <li>{t("Priority.desk.li1")}</li>
              <li>{t("Priority.desk.li2")}</li>
              <li>{t("Priority.desk.li3")}</li>
              <li>{t("Priority.desk.li4")}</li>
            </ol>
            <small>*{t("Priority.desk.small")}</small>
          </div>
        </Col>
      </Row>
    </>
  );
};

Priority.defaultProps = {};

export default Priority;
