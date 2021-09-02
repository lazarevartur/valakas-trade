import React from "react";
import styles from "./CompanyInterest.module.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import handsImg from "../../../assets/img/hands_clean.jpg";
import { useTranslation } from "react-i18next";

interface CompanyInterestProps {}

const CompanyInterest: React.FC<CompanyInterestProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.CompanyInterest}>
      <Container>
        <Row className={styles.container}>
          <Col lg={6} className={styles.reset_padding}>
            <Image
              width={500}
              height={450}
              src={handsImg}
              className={styles.img}
            />
          </Col>
          <Col lg={5}>
            <h3 className={styles.title}>
              {t("AboutPage.CompanyInterest.title")}
            </h3>
            <p>{t("AboutPage.CompanyInterest.text")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CompanyInterest.defaultProps = {};

export default CompanyInterest;
