import React from "react";
import styles from "./signIn.module.scss";
import {
  defaultModalComponentProps,
  IUserRegistration,
  rootState,
} from "../../../types/types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cn from "classnames";
import ModalBg from "../../../assets/svg/ModalBg";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";
import { CustomInput } from "../../uiKit/customInput";
import { useForm } from "react-hook-form";
import {
  login,
  register as registerAction,
} from "../../../store/action/authAction";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { Loader } from "../../uiKit/loader";

interface SignInProps extends defaultModalComponentProps {}

const SignIn: React.FC<SignInProps> = ({ isOpened = false, url = "" }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatchTyped();
  const { isLoading } = useSelectorTyped(
    (state: rootState) => state.authentication
  );
  const onSubmit = (data: IUserRegistration) => {
    dispatch(login(data));
  };

  return (
    <>
      <ModalBg className={styles.bg} />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className={cn(styles.signInContainer)}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
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
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={watch("email")}
                      reff={register}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <CustomInput
                      type="password"
                      placeholder="Пароль"
                      name="password"
                      value={watch("password")}
                      reff={register}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня" />
                  </Form.Group>
                  <div className={cn(styles.button_group)}>
                    <Button type="submit" className={cn(styles.button)}>
                      Войти
                    </Button>
                    <Link to={`${url}${RoutePath.resetPassword}`}>
                      Забыли пароль?
                    </Link>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
