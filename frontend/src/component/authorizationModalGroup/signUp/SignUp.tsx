import React from "react";
import { defaultModalComponentProps } from "../../../types/types";
import { ModalLayout } from "../../../layouts/ModalLayout";
import ModalBg from "../../../svg/ModalBg";
import styles from "../signIn/signIn.module.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";

interface SignUpProps extends defaultModalComponentProps {}

const SignUp: React.FC<SignUpProps> = ({ url }) => {
  return (
    <>
      <ModalBg className={styles.bg} />
      <Container>
        <Form>
          <Row className={cn(styles.signInContainer)}>
            <Col lg={6} className={cn(styles.singIn)}>
              <h5>Регистрация</h5>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" name="email" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Пароль"
                  name="password"
                />
              </Form.Group>
              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Запомнить меня" />
              </Form.Group>
              <div className={cn(styles.button_group)}>
                <Button className={cn(styles.button)}>Войти</Button>
                <Link to={`${url}${RoutePath.resetPassword}`}>
                  Забыли пароль?
                </Link>
              </div>
            </Col>
            <Col lg={6} className={cn(styles.registration)}>
              <h5>Уже зарегистрированы?</h5>
              <div className={cn(styles.button_group)}>
                <p>
                  Exercitationem rerum nesciunt dicta voluptatem eligendi
                  laudantium temporibus
                </p>
                <LinkContainer to={`${url}${RoutePath.login}`}>
                  <Button className={cn(styles.button)}>Войти</Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

SignUp.defaultProps = {};

export default SignUp;
