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
import { useTranslation } from "react-i18next";

interface SignUpProps extends defaultModalComponentProps {}

const SignUp: React.FC<SignUpProps> = ({ url }) => {
  const { t } = useTranslation();
  const dispatch = useDispatchTyped();

  const { isLoading, userData, refLink } = useSelectorTyped(
    (state: rootState) => state.authentication
  );
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      referralId: refLink,
    },
  });
  const validators = {
    required: "Не может быть пустым",
  };
  const onSubmit = (data: IUserRegistration) => {
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
                  <h5>{t("SignUp.singUp.title")}</h5>
                  <Form.Group controlId="formEmail">
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={watch("email")}
                      reff={register({
                        ...validators,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t("SignUp.singUp.email_error"),
                        },
                      })}
                    />
                    <small>
                      {
                        // @ts-ignore
                        errors.email && errors.email.message
                      }
                    </small>
                  </Form.Group>
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="formName">
                        <CustomInput
                          type="text"
                          placeholder={t("SignUp.singUp.input_name")}
                          name="name"
                          value={watch("name")}
                          reff={register}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="formCountry">
                        <Form.Control as="select" ref={register}>
                          <option>{t("SignUp.formCountry.option1")}</option>
                          <option>{t("SignUp.formCountry.option2")}</option>
                          <option>{t("SignUp.formCountry.option3")}</option>
                          <option>{t("SignUp.formCountry.option4")}</option>
                          <option>{t("SignUp.formCountry.option5")}</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formPassword">
                    <CustomInput
                      type="password"
                      placeholder={t("SignUp.password")}
                      name="password"
                      value={watch("password")}
                      reff={register({
                        ...validators,
                        pattern: {
                          value: /^[A-Z0-9_-]{8,12}$/i,
                          message: t("SignUp.password_error"),
                        },
                      })}
                    />
                    <small>
                      {
                        // @ts-ignore
                        errors.password && errors.password.message
                      }
                    </small>
                  </Form.Group>
                  <Form.Group controlId="formRPassword">
                    <CustomInput
                      type="password"
                      placeholder={t("SignUp.password")}
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
                        placeholder={t("SignUp.ReferralId")}
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
                          {t("SignUp.chekBox.line1")}{" "}
                          <Link to={RoutePath.termsUse}>
                            {t("SignUp.chekBox.line2")}
                          </Link>{" "}
                          {t("SignUp.chekBox.line3")}{" "}
                          <Link to={RoutePath.privacyPolicy}>
                            {t("SignUp.chekBox.line4")}
                          </Link>
                        </span>
                      }
                      ref={register}
                    />
                  </Form.Group>
                  <div className={cn(styles.button_group)}>
                    <Button type="submit" className={cn(styles.button)}>
                      {t("SignUp.buttons.signUp")}
                    </Button>
                  </div>
                </Col>
                <Col lg={6} className={cn(styles.registration)}>
                  <h5>{t("SignUp.buttons.enter")}</h5>
                  <div className={cn(styles.button_group)}>
                    <LinkContainer to={`${url}${RoutePath.login}`}>
                      <Button className={cn(styles.button)}>
                        {t("SignUp.buttons.login")}
                      </Button>
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
