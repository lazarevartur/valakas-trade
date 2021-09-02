import React from "react";
import styles from "./mainAdvantages.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Row, Col, Container } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import { useTranslation } from "react-i18next";

interface MainAdvantagesProps extends defaultComponentProps {}

const MainAdvantages: React.FC<MainAdvantagesProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.MainAdvantages}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h2 className={styles.title}>
              {t("AboutPage.MainAdvantages.title")}
            </h2>
            <p className={styles.sub_title}>
              {t("AboutPage.MainAdvantages.sub_title")}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>01</span>
              <p>
                <strong>
                  {t("AboutPage.MainAdvantages.advantage_block1.title")}
                </strong>{" "}
                {t("AboutPage.MainAdvantages.advantage_block1.text")}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 6, span: 6 }}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>02</span>
              <p>
                <strong>
                  {t("AboutPage.MainAdvantages.advantage_block2.text")}
                </strong>{" "}
                {t("AboutPage.MainAdvantages.advantage_block2.text")}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>03</span>
              <p>
                <strong>
                  {t("AboutPage.MainAdvantages.advantage_block3.title")}
                </strong>{" "}
                {t("AboutPage.MainAdvantages.advantage_block3.text")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

MainAdvantages.defaultProps = {};

export default MainAdvantages;
