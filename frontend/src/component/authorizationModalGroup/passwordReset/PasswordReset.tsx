import React from "react";
import styles from "./PasswordReset.module.scss";
import { defaultModalComponentProps } from "../../../types/types";
import ModalBg from "../../../assets/svg/ModalBg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cn from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PasswordResetProps extends defaultModalComponentProps {}

const PasswordReset: React.FC<PasswordResetProps> = ({ url }) => {
  const { t } = useTranslation();
  return (
    <>
      <ModalBg className={styles.bg} />
      <Container>
        <Form>
          <Row className={cn(styles.signInContainer)}>
            <Col lg={6} className={cn(styles.registration)}>
              <h5>{t("PasswordReset.text1")}</h5>
              <div className={cn(styles.button_group)}>
                <p>{t("PasswordReset.text2")}</p>
                <LinkContainer to={`${url}${RoutePath.registration}`}>
                  <Button className={cn(styles.button)}>
                    {t("PasswordReset.text3")}
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col lg={6} className={cn(styles.singIn)}>
              <h5>{t("PasswordReset.text4")}</h5>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" name="email" />
              </Form.Group>
              <div className={cn(styles.button_group)}>
                <Button className={cn(styles.button)}>
                  {t("PasswordReset.text5")}
                </Button>
                <Link to={`${url}${RoutePath.login}`}>
                  {t("PasswordReset.text6")}
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
