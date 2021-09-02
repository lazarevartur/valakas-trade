import React from "react";
import styles from "./enableComplaint.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { useTranslation } from "react-i18next";

interface EnableComplaintProps {}

const EnableComplaint: React.FC<EnableComplaintProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.EnableComplaint}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className={styles.title}>
              {t("AboutPage.EnableComplaint.title")}
            </h2>
          </Col>
          <Col lg={6} className={styles.flex}>
            <LinkContainer to={RoutePath.contacts}>
              <Button className={styles.button}>
                {t("AboutPage.EnableComplaint.button")}{" "}
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EnableComplaint;
