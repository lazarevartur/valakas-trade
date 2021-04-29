import React from "react";
import styles from "./signIn.module.scss";
import { defaultModalComponentProps } from "../../../types/types";
import { useHistory } from "react-router";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { ModalLayout } from "../../../layouts/ModalLayout";
import cn from "classnames";
import ModalBg from "../../../svg/ModalBg";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";

interface SignInProps extends defaultModalComponentProps {}

const SignIn: React.FC<SignInProps> = ({ isOpened = false, url }) => {
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
              <h5>Вход в личный кабинет</h5>
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
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
