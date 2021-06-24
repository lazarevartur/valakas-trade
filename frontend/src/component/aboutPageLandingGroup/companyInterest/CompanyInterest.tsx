import React from "react";
import styles from "./CompanyInterest.module.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import handsImg from "../../../assets/img/hands_clean.jpg";

interface CompanyInterestProps {}

const CompanyInterest: React.FC<CompanyInterestProps> = () => {
  return (
    <div className={styles.CompanyInterest}>
      <Container>
        <Row className={styles.container}>
          <Col lg={6} className={styles.reset_padding}>
            <Image width={500} height={450} src={handsImg} />
          </Col>
          <Col lg={5}>
            <h3>Взаимовыгодное со трудничество с Mirax</h3>
            <p>
              Каждый пользователь имеет возможность роста в рамках партнерской
              программы. Вы можете увеличивать прибыль без ограничений, а в
              дополнение, получать бонусы за участие в развитии платформы.
              Являясь платформой-посредником, Mirax получает процент от прибыли.
              Таким образом, растет не только инвестор, но и компания
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CompanyInterest.defaultProps = {};

export default CompanyInterest;
