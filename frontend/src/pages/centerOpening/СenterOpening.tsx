import React, { Suspense } from "react";
import styles from "../сommunity/Community.module.scss";
import { Col, Container, Row, Image, Table } from "react-bootstrap";
import openCenter from "../../assets/img/openCenter.jpg";
import miraxCenter from "../../assets/img/miraxCenter.jpg";
import miraxRooms from "../../assets/img/miraxRooms.jpg";
import miraxAva from "../../assets/img/Availability.jpg";
import miraxMot from "../../assets/img/Motivation.jpg";
import miraxReliability from "../../assets/img/Reliability.jpg";
import miraxMap from "../../assets/img/miraxMap.jpg";
import deskLine from "../../assets/png/deskLine.png";
import deskLine_en from "../../assets/png/deskLine_en.png";
import png1 from "../../assets/png/recomendate/1.png";
import png2 from "../../assets/png/recomendate/2.png";
import png3 from "../../assets/png/recomendate/3.png";
import png4 from "../../assets/png/recomendate/4.png";
import png5 from "../../assets/png/recomendate/5.png";
import png6 from "../../assets/png/recomendate/6.png";

import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import { Loader } from "../../component/uiKit/loader";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import cn from "classnames";
import { useTranslation, getI18n } from "react-i18next";

interface CenterOpeningProps {}

const CenterOpening: React.FC<CenterOpeningProps> = () => {
  const activeLang = getI18n().language;
  const { t } = useTranslation();
  const benData = [
    {
      text: t("CenterOpening.benData.block1"),
      icon: png1,
    },
    {
      text: t("CenterOpening.benData.block2"),
      icon: png2,
    },
    {
      text: t("CenterOpening.benData.block3"),
      icon: png3,
    },
    {
      text: t("CenterOpening.benData.block4"),
      icon: png4,
    },
    {
      text: t("CenterOpening.benData.block5"),
      icon: png5,
    },
    {
      text: t("CenterOpening.benData.block6"),
      icon: png6,
    },
  ];

  const benData2 = [
    {
      title: t("CenterOpening.benData2.block1.title"),
      text: t("CenterOpening.benData2.block2.text"),
      icon: miraxAva,
    },
    {
      title: t("CenterOpening.benData2.block2.title"),
      text: t("CenterOpening.benData2.block2.text"),
      icon: miraxMot,
    },
    {
      title: t("CenterOpening.benData2.block3.title"),
      text: t("CenterOpening.benData2.block3.text"),
      icon: miraxReliability,
    },
  ];
  return (
    <div className={styles.CenterOpening}>
      <Suspense fallback={<Loader />}>
        <JumbotronCustom
          img={openCenter}
          contentPosRight
          title={t("CenterOpening.JumbotronCustom.title")}
          text={t("CenterOpening.JumbotronCustom.text")}
          className={styles.mobile_jimbotron}
        />
        <div>
          <div className={styles.bgGrey}>
            <div className={styles.block_info}>
              <Container className={styles.main_padding}>
                <Row>
                  <Col lg={12}>
                    {" "}
                    <h2 className={styles.title}>
                      {t("CenterOpening.block_info.title")}
                      <span className={styles.accent}>
                        {t("CenterOpening.block_info.accent")}
                      </span>{" "}
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>{t("CenterOpening.block_info.text1")}</Col>
                  <Col lg={6}>{t("CenterOpening.block_info.text2")}</Col>
                </Row>
                <Row className={"pt-5"}>
                  <Col lg={12}>
                    <Image src={miraxCenter} />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <Container>
            <Row>
              <Col lg={{ offset: 1, span: 10 }}>
                <Benefits
                  title={t("CenterOpening.benData.title")}
                  data={benData}
                />
              </Col>
            </Row>
          </Container>
          <div className={cn(styles.bgGrey, styles.candidate)}>
            <Container className={"pt-5"}>
              <Row>
                <Col lg={6}>
                  <Row>
                    <Col lg={12}>
                      <h2 className={styles.title_fullwidth}>
                        {t("CenterOpening.candidate.title")}
                      </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <p>{t("CenterOpening.candidate.text")}</p>
                      <ul className={styles.list}>
                        <li>{t("CenterOpening.candidate.li1")}</li>
                        <li>{t("CenterOpening.candidate.li2")}</li>
                        <li>{t("CenterOpening.candidate.li3")}</li>
                        <li>{t("CenterOpening.candidate.li4")}</li>
                        <li>{t("CenterOpening.candidate.li5")}</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Image src={miraxRooms} />
                </Col>
              </Row>
            </Container>
          </div>
          <Container className={cn(styles.ruleOpen, styles.main_padding)}>
            <Row>
              <Col lg={6}>
                <Image src={activeLang === "ru" ? deskLine : deskLine_en} />
              </Col>
              <Col lg={6}>
                <h2 className={styles.title}>
                  <span className={styles.accent}>
                    {t("CenterOpening.ruleOpen.title_accent")}
                  </span>{" "}
                  {t("CenterOpening.ruleOpen.title")}{" "}
                </h2>
                <p>{t("CenterOpening.ruleOpen.text")}</p>
                <ul className={styles.list}>
                  <li>{t("CenterOpening.ruleOpen.li1")}</li>
                  <li>{t("CenterOpening.ruleOpen.li2")}</li>
                  <li>{t("CenterOpening.ruleOpen.li3")}</li>
                </ul>
              </Col>
              <Row>
                <Col lg={{ offset: 1, span: 10 }}>
                  <div className={styles.quote}>{t("CenterOpening.quote")}</div>
                </Col>
              </Row>
            </Row>
          </Container>
          <div className={cn(styles.bgGrey, styles.table_profit)}>
            <Container className={styles.main_padding}>
              <Row>
                <Col lg={12} className={styles.text_center}>
                  <h2 className={styles.title}>
                    {t("CenterOpening.table_profit.title")}
                  </h2>
                  <small>{t("CenterOpening.table_profit.small")}</small>
                </Col>
              </Row>
              <Row className={styles.main_padding}>
                <Col lg={{ offset: 1, span: 10 }}>
                  <Table striped hover size="sm" className={styles.table}>
                    <thead>
                      <tr className={styles.thead}>
                        <th>{t("CenterOpening.table_profit.th1")}</th>
                        <th>{t("CenterOpening.table_profit.th2")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 5 {t("CenterOpening.table_profit.line")}</td>
                        <td>0,6%</td>
                      </tr>
                      <tr>
                        <td> 6 {t("CenterOpening.table_profit.line")}</td>
                        <td>0,7%</td>
                      </tr>
                      <tr>
                        <td> 7 {t("CenterOpening.table_profit.line")}</td>
                        <td>0,8%</td>
                      </tr>
                      <tr>
                        <td> 8 {t("CenterOpening.table_profit.line")}</td>
                        <td>0,9%</td>
                      </tr>
                      <tr>
                        <td> 9 {t("CenterOpening.table_profit.line")}</td>
                        <td>1%</td>
                      </tr>
                      <tr>
                        <td> 10 {t("CenterOpening.table_profit.line")}</td>
                        <td>1,1%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <Benefits
              title={t("CenterOpening.benData2.title")}
              data={benData2}
            />
          </Container>
          <Row className={styles.main_padding}>
            <Col lg={{ offset: 2, span: 10 }}>
              {" "}
              <Image src={miraxMap} width={1000} className={styles.mapImg} />
            </Col>
          </Row>
        </div>
      </Suspense>
    </div>
  );
};

CenterOpening.defaultProps = {};

export default CenterOpening;
