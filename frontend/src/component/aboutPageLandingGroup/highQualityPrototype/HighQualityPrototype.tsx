import React from "react";
import styles from "./HighQualityPrototype.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";

interface HighQualityPrototypeProps extends defaultComponentProps {}

const HighQualityPrototype: React.FC<HighQualityPrototypeProps> = ({
  className = "",
}) => {
  return (
    <div className={styles.bg}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h5 className={styles.title}>
              Навсегда решите эти <br /> проблемы
            </h5>
            <div className={styles.content}>
              <div>Как приумножить свой капитал?</div>
              <br />
              <div> Куда инвестировать, чтобы не прогореть?</div>
              <br />
              <div>Как выйти на доход, который покроет мои расходы?</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityPrototype;
