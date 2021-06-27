import React from "react";
import styles from "./AboutUsComponent.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Image, Row } from "react-bootstrap";

interface AboutUsComponentProps extends defaultComponentProps {}

const AboutUsComponent: React.FC<AboutUsComponentProps> = ({
  className = "",
}) => {
  return (
    <Row className={styles.bg}>
      <Col lg={6} className={styles.content}>
        <h2>
          Руководствуйтесь балансом между возможными рисками и потенциальной
          доходностью
        </h2>
        <p>
          На современном рынке финансовые инструменты работают в одном
          направлении, ограничивая возможности инвесторов и увеличивая риски.
        </p>
        <p>
          <span className={styles.accent}>Mirax</span> расширяет возможности
          заработка для своих партнеров, объединяя самые прибыльные и
          перспективные направления: блокчейн-проекты, майнинговые компании,
          цифровые продукты, сетевые компании и стартапы. Откройте для себя
          возможность получения финансовой свободы без рисков!
        </p>
      </Col>
    </Row>
  );
};

AboutUsComponent.defaultProps = {};

export default AboutUsComponent;
