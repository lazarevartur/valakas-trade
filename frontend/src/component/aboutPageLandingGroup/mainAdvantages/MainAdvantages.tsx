import React from "react";
import styles from "./mainAdvantages.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Row, Col, Container } from "react-bootstrap";
import HomeBg from "../../../svg/HomeBg";

interface MainAdvantagesProps extends defaultComponentProps {}

const MainAdvantages: React.FC<MainAdvantagesProps> = () => {
  return (
    <div className={styles.MainAdvantages}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h2 className={styles.title}>Главные преимущества</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>01</span>
              <p>
                <strong>Мы не торгуем на бирже,</strong> никаких сделок на
                повышение или понижение, в такой стратегии есть риск
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 6, span: 6 }}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>02</span>
              <p>
                Предоставляем возможность{" "}
                <strong>построить свою структуру,</strong> получая
                дополнительную прибыль
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.advantage}>
              <span className={styles.big_number}>03</span>
              <p>
                Участие в{" "}
                <strong>нескольких проектах по разным направлениям,</strong>{" "}
                данная стратегия повышает доходность и снижает риски
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
