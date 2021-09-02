import React from "react";
import styles from "./MiraxHistory.module.scss";
import { Col, Row } from "react-bootstrap";
import cn from "classnames";
import { useTranslation } from "react-i18next";

interface MiraxHistoryProps {}

const MiraxHistory: React.FC<MiraxHistoryProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.MiraxHistory)}>
      <Row className={"mb-5"}>
        <Col lg={6}>
          <h3 className={styles.title}>{t("AboutPage.MiraxHistory.title")}</h3>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.text")}</p>
          {t("AboutPage.MiraxHistory.text2")}
        </Col>
      </Row>
      <Row className={cn(styles.block)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2008</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line1")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.bg_grey)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2009</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line2")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.block)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2010-2013</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line3")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.bg_grey)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2014-2015</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line4")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.block)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2016</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line5")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.bg_grey)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2017-2019</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line6")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.block)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2020</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line7")}</p>
        </Col>
      </Row>
      <Row className={cn(styles.bg_grey)}>
        <Col lg={{ offset: 2, span: 3 }}>
          <span>2021</span>
        </Col>
        <Col lg={6}>
          <p>{t("AboutPage.MiraxHistory.line8")}</p>
        </Col>
      </Row>
    </div>
  );
};

MiraxHistory.defaultProps = {};

export default MiraxHistory;
