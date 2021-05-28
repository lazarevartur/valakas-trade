import React from "react";
import styles from "./jumbotronMain.module.scss";
import cn from "classnames";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";

interface JumbotronMainProps {
  className?: string;
}

const JumbotronMain: React.FC<JumbotronMainProps> = ({ className = "" }) => {
  return (
    <Jumbotron className={cn(styles.jumbotron, { [className]: className })}>
      <Container>
        <Row className={styles.content}>
          <Col lg={9}>
            <h1>
              <strong>
                Готовые инвестиционные решения с ежедневным доходом{" "}
              </strong>
            </h1>
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col lg={6}>
            <h2>
              <p className={styles.text}>
                Платформа Mirax предоставляет широкие инвестиционные предложения
                в проекты блокчейн-индустрии для создания активного и пассивного
                доходов с помощью модели партнерских программ.
              </p>
              <LinkContainer to={RoutePath.login}>
                <Button size={"lg"}>Присоединиться</Button>
              </LinkContainer>
            </h2>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

JumbotronMain.defaultProps = {};

export default JumbotronMain;
