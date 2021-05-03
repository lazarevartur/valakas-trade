import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatchTyped } from "../../../hooks/useTypedRedux";
import styles from "./loginPage.module.scss";
import { RoutePath } from "../../../routes/routesConfig";
import { Loader } from "../../loader";
import { login } from "../../../store/action/authAction";
import { MainRow } from "../../../layouts/mainRow";
import { FullWidthRow } from "../../../layouts/fullWidthRow";
//TODO ОБРАБОТКА ОШИБОК
export interface userLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatchTyped();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: userLogin) => {
    dispatch(login(data));
  };
  return (
    <FullWidthRow className={styles.login} lg={12}>
      <h2 className={"text-center mb-4"}>Вход в личный кабинет.</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите email"
            ref={register}
            name="email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            ref={register}
            name="password"
          />
        </Form.Group>
        <Row>
          <Col className={styles.two_column}>
            <Form.Group controlId="formBasicCheckbox1" className={styles.reset}>
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <a href="#">Забыли пароль?</a>
          </Col>
        </Row>
        <Row>
          <Col className={styles.two_column}>
            <a href="#">Регистрация</a>
            <Button className={styles.login_button}>Войти</Button>
          </Col>
        </Row>
      </Form>
    </FullWidthRow>
  );
};

Login.defaultProps = {};

export default Login;
