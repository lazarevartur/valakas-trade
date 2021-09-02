import React from "react";
import styles from "./HighQualityPrototype.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import cn from "classnames";
import { Trans, useTranslation } from "react-i18next";

interface HighQualityPrototypeProps extends defaultComponentProps {}

const HighQualityPrototype: React.FC<HighQualityPrototypeProps> = ({
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.bg)}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h5 className={styles.title}>
              <Trans i18nKey={"AboutPage.HighQualityPrototype.title"}>
                {t("AboutPage.HighQualityPrototype.title")}
              </Trans>
            </h5>
            <div className={styles.content}>
              <div>{t("AboutPage.HighQualityPrototype.row1")}</div>
              <br />
              <div> {t("AboutPage.HighQualityPrototype.row2")}</div>
              <br />
              <div>{t("AboutPage.HighQualityPrototype.row3")}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityPrototype;
