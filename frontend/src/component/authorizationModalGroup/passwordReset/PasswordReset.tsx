import React from "react";
import styles from "./PasswordReset.module.scss";
import { defaultModalComponentProps } from "../../../types/types";
import ModalBg from "../../../assets/svg/ModalBg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";

interface PasswordResetProps extends defaultModalComponentProps {}

const PasswordReset: React.FC<PasswordResetProps> = ({ url }) => {
  return (
    <>
      <ModalBg className={styles.bg} />
      <Container>
        <Form>
          <Row className={cn(styles.signInContainer)}>
            <Col lg={6} className={cn(styles.registration)}>
              <h5>У вас еще нет аккаунта?</h5>
              <div className={cn(styles.button_group)}>
                <p>
                  Exercitationem rerum nesciunt dicta voluptatem eligendi
                  laudantium temporibus
                </p>
                <LinkContainer to={`${url}${RoutePath.registration}`}>
                  <Button className={cn(styles.button)}>Регистрация</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col lg={6} className={cn(styles.singIn)}>
              <h5>Восстановление пароля</h5>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" name="email" />
              </Form.Group>
              <div className={cn(styles.button_group)}>
                <Button className={cn(styles.button)}>Войти</Button>
                <Link to={`${url}${RoutePath.login}`}>
                  Вход в личный кабинет
                </Link>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

PasswordReset.defaultProps = {};

export default PasswordReset;
