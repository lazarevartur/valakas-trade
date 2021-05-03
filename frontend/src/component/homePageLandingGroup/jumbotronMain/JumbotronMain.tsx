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
          <Col lg={5}>
            <h1>
              <strong>Quis veniam sed placeat porro</strong>
            </h1>
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col lg={6}>
            <h1>
              <p className={styles.text}>
                Exercitationem rerum nesciunt dicta voluptatem eligendi
                laudantium temporibus voluptatibus pariatur. Numquam veritatis
                dolorem et. Tenetur omnis qui omnis minus. Omnis sit eaque
                doloremque ullam quae eaque qui iste ut. Atque officia laborum
                recusandae.
              </p>
              <LinkContainer to={RoutePath.login}>
                <Button size={"lg"}>Вход/Регистрация</Button>
              </LinkContainer>
            </h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

JumbotronMain.defaultProps = {};

export default JumbotronMain;
