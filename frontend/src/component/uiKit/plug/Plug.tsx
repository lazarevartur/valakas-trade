import React from "react";
import styles from "./Plug.module.scss";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import bg from "../../../assets/png/plug_bg.png";

interface PlugProps {
  text?: string;
  link?: string;
  buttonText?: string;
}

const Plug: React.FC<PlugProps> = ({
  text = `Необходимо преобрести программу`,
  buttonText = `Пополнить счет`,
  link = RoutePath.replenishmentWallet,
}) => {
  return (
    <div
      className={styles.Plug}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: `center`,
        backgroundSize: "auto",
      }}
    >
      <div className={styles.infoBlock}>
        <Row>
          <Col lg={12}>
            <h2>{text}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <LinkContainer to={link}>
              <Button>{buttonText}</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Plug.defaultProps = {};

export default Plug;
