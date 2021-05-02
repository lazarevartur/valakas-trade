import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../signIn/signIn.module.scss";
import cn from "classnames";
import { defaultModalComponentProps } from "../../../types/types";
import ModalBg from "../../../svg/ModalBg";
import { RoutePath } from "../../../routes/routesConfig";

interface SignUpProps extends defaultModalComponentProps {}

const SignUp: React.FC<SignUpProps> = ({ url }) => {
  return (
    <>
      <ModalBg className={styles.bg} />
      <Container>
        <Form>
          <Row className={cn(styles.signInContainer)}>
            <Col lg={6} className={cn(styles.singUp)}>
              <h5>Регистрация</h5>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" name="email" />
              </Form.Group>
              <Row>
                <Col lg={6}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Имя" name="name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="formCountry">
                    <Form.Control as="select">
                      <option>Выбирите страну</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Пароль"
                  name="password"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Повторите пароль"
                  name="rPassword"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="text"
                  placeholder="ID/ email пригласителя"
                  name="referralId"
                />
              </Form.Group>
              <Form.Group controlId="formCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Я соглашаюсь с условиями защиты персональных данных и пользовательского соглашения"
                />
              </Form.Group>
              <div className={cn(styles.button_group)}>
                <Button className={cn(styles.button)}>
                  Зарегистрироваться
                </Button>
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
                  <Button className={cn(styles.button)}>Вход</Button>
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
