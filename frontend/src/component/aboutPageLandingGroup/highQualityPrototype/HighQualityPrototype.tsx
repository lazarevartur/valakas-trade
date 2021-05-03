import React from "react";
import styles from "./HighQualityPrototype.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../svg/HomeBg";

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
              Высококачественный
              <br /> прототип будущего
            </h5>
            <small>Каждый день большинство людей задумываются</small>
            <div className={styles.content}>
              <div>Как приумножить свой капитал?</div>
              <br />
              <div>Что бы я сделал, будь у меня такая сумма?</div>
              <br />
              <div>
                Как выйти на пассивный доход ,который покроет мои расходы?
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityPrototype;
