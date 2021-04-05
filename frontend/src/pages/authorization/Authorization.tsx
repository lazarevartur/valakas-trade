import React, { useEffect } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styles from "./authorization.module.scss";
import { Login } from "../../component/authorizationGroup/login";
import { Registration } from "../../component/authorizationGroup/registration";
import { ForgotPassword } from "../../component/authorizationGroup/forgotPassword";
import UseReferralLink from "../../hooks/useRefferalLink";
import { useHistory } from "react-router";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import { IUserRegistration, rootState } from "../../types/types";
import { useForm } from "react-hook-form";
import { register as registerAction } from "../../store/action/authAction";
import { RoutePath } from "../../routes/routesConfig";

const Authorization = () => {
  UseReferralLink();
  const history = useHistory();
  const dispatch = useDispatchTyped();
  const { register, handleSubmit, errors } = useForm();

  const { isLoading, userData, refLink } = useSelectorTyped(
    (state: rootState) => state.authentication
  );

  console.log(refLink);
  const onSubmit = (data: IUserRegistration) => {
    dispatch(registerAction(data));
  };
  useEffect(() => {
    if (userData.hasOwnProperty("token")) {
      history.push(RoutePath.dashboard);
    }
  }, [userData, history]);

  return (
    <Container className={styles.auth_block}>
      <Row>
        <Col>
          <Tabs id="controlled-tab-login" defaultActiveKey={"registration"}>
            <Tab eventKey="login" title="Войти" className={"mt-4"}>
              <h2 className={"text-center mb-4"}>
                <strong>Вход в личный кабинет.</strong>
              </h2>
              <Login />
            </Tab>
            <Tab
              eventKey="registration"
              title="Зарегистрироваться"
              className={"mt-4"}
            >
              <Registration
                onSubmit={onSubmit}
                handleForm={handleSubmit}
                register={register}
                isLoading={isLoading}
                refLink={refLink}
              />
            </Tab>
            <Tab eventKey="fpassword" title="Забыли пароль?" className={"mt-4"}>
              <ForgotPassword />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

Authorization.defaultProps = {};

export default Authorization;
