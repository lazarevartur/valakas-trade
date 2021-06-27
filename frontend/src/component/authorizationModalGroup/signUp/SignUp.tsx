import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../signIn/signIn.module.scss";
import cn from "classnames";
import {
  defaultModalComponentProps,
  IUserRegistration,
  rootState,
} from "../../../types/types";
import ModalBg from "../../../assets/svg/ModalBg";
import { RoutePath } from "../../../routes/routesConfig";
import UseReferralLink from "../../../hooks/useRefferalLink";

import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { useForm } from "react-hook-form";
import { register as registerAction } from "../../../store/action/authAction";
import { Loader } from "../../uiKit/loader";
import { CustomInput } from "../../uiKit/customInput";
import { Link } from "react-router-dom";

interface SignUpProps extends defaultModalComponentProps {}

const SignUp: React.FC<SignUpProps> = ({ url }) => {
  const dispatch = useDispatchTyped();

  const { isLoading, userData, refLink } = useSelectorTyped(
    (state: rootState) => state.authentication
  );
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      referralId: refLink,
    },
  });
  const onSubmit = (data: IUserRegistration) => {
    console.log(data);
    dispatch(registerAction(data));
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
                <Col lg={6} className={cn(styles.singUp)}>
                  <h5>Регистрация</h5>
                  <Form.Group controlId="formEmail">
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={watch("email")}
                      reff={register}
                    />
                  </Form.Group>
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="formName">
                        <CustomInput
                          type="text"
                          placeholder="Имя"
                          name="name"
                          value={watch("name")}
                          reff={register}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="formCountry">
                        <Form.Control as="select" ref={register}>
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
                    <CustomInput
                      type="password"
                      placeholder="Пароль"
                      name="password"
                      value={watch("password")}
                      reff={register}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRPassword">
                    <CustomInput
                      type="password"
                      placeholder="Пароль"
                      name="rPassword"
                      value={watch("rPassword")}
                      reff={register}
                    />
                  </Form.Group>
                  {refLink ? (
                    <Form.Group controlId="formReferralId">
                      <CustomInput
                        type="text"
                        readOnly
                        placeholder="ID/ email пригласителя"
                        name="referralId"
                        value={refLink}
                        reff={register}
                      />
                      {/*<Form.Control*/}
                      {/*  type="text"*/}
                      {/*  readOnly*/}
                      {/*  value={refLink}*/}
                      {/*  placeholder="ID/ email пригласителя"*/}
                      {/*  name="referralId"*/}
                      {/*  ref={register}*/}
                      {/*/>*/}
                    </Form.Group>
                  ) : null}

                  <Form.Group controlId="formCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={
                        <span>
                          Я принимаю{" "}
                          <Link to={RoutePath.termsUse}>
                            условия использования
                          </Link>{" "}
                          и соглашаюсь с{" "}
                          <Link to={RoutePath.privacyPolicy}>
                            политикой конфиденциальности
                          </Link>
                        </span>
                      }
                      ref={register}
                    />
                  </Form.Group>
                  <div className={cn(styles.button_group)}>
                    <Button type="submit" className={cn(styles.button)}>
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
              </>
            )}
          </Row>
        </Form>
      </Container>
    </>
  );
};

SignUp.defaultProps = {};

export default SignUp;
