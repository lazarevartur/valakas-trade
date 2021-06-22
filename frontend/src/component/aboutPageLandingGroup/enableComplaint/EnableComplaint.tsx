import React from "react";
import styles from "./enableComplaint.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";

interface EnableComplaintProps {}

const EnableComplaint: React.FC<EnableComplaintProps> = () => {
  return (
    <div className={styles.EnableComplaint}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col lg={6}>
            <strong>Оставьте заявку на бесплатную консультацию</strong>
          </Col>
          <Col lg={6} className={styles.flex}>
            <Button className={styles.button}>Отправить заявку </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EnableComplaint;
