import React from "react";
import styles from "./JumbotronCustom.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import hands from "../../../assets/img/hands.jpg";
import { RoutePath } from "../../../routes/routesConfig";
import { LinkContainer } from "react-router-bootstrap";
import cn from "classnames";
import { useTranslation } from "react-i18next";

interface JumbotronCustomProps {
  img?: string;
  bgPos?: string;
  contentPosRight?: boolean;
  bgSize?: string;
  title?: JSX.Element | string;
  text?: JSX.Element | string;
  lg?: number;
  button?: boolean;
  className?: string;
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
  button = true,
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(styles.JumbotronCustom, { [className]: className })}
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
            <h1 className={cn("pb-4", styles.title)}>{title}</h1>
          </Col>
        </Row>
        {text && (
          <Row>
            <Col lg={6}>
              <p className={"pb-4"}>{text}</p>
              {button && (
                <LinkContainer to={RoutePath.login}>
                  <Button size={"lg"}>{t("ui.JumbotronCustom_button")}</Button>
                </LinkContainer>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

JumbotronCustom.defaultProps = {};

export default JumbotronCustom;
