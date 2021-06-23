import React from "react";
import styles from "./JumbotronCustom.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import hands from "../../../assets/img/hands.jpg";
import { RoutePath } from "../../../routes/routesConfig";
import { LinkContainer } from "react-router-bootstrap";

interface JumbotronCustomProps {
  img?: string;
  bgPos?: string;
  contentPosRight?: boolean;
  bgSize?: string;
  title?: JSX.Element | string;
  text?: JSX.Element | string;
  lg?: number;
}

const JumbotronCustom: React.FC<JumbotronCustomProps> = ({
  img = hands,
  bgPos = "right",
  contentPosRight = false,
  bgSize = "cover",
  title = "Что такое сообщество Mirax",
  text = ` Мы убеждены в том, что каждый человек способен стать продуктивнее,
              если он работает в команде. Для развития творческого и живого
              общения среди партнёров мы создали сообщество Mirax.`,
  lg = 6,
}) => {
  return (
    <div
      className={styles.JumbotronCustom}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: `${bgPos}`,
        backgroundSize: bgSize,
      }}
    >
      <Container className={styles.container}>
        <Row>
          <Col
            lg={contentPosRight ? { offset: 6 } : lg}
            className={styles.content}
          >
            <h1 className={"pb-4"}>{title}</h1>
            <p className={"pb-4"}>{text}</p>
            <LinkContainer to={RoutePath.login}>
              <Button size={"lg"}>Присоединиться</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

JumbotronCustom.defaultProps = {};

export default JumbotronCustom;
