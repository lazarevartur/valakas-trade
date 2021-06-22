import React from "react";
import styles from "./howMakingMoney.module.scss";
import cn from "classnames";
import { defaultComponentProps } from "../../../types/types";
import { Col, Row, Container } from "react-bootstrap";
import BgMakeMoney from "../../../assets/svg/BgMakeMoney";

interface HowMakingMoneyProps extends defaultComponentProps {}

const HowMakingMoney: React.FC<HowMakingMoneyProps> = () => {
  return (
    <Container>
      <Row className={cn(styles.HowMakingMoney)}>
        <Col lg={6}>
          <BgMakeMoney className={cn(styles.bg_img)} />
        </Col>
        <Col lg={6} className={styles.content}>
          <h5 className={styles.title}>Как начать зарабатывать с Mirax </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default HowMakingMoney;
