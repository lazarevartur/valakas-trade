import React, { RefObject } from "react";
import styles from "./security.module.scss";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../../uiKit/customInput";
import { CustomCheckBox } from "../../../uiKit/customCheckBox";
import { useTranslation } from "react-i18next";

interface SecurityProps {
  verifRef?: any;
}

const Security: React.FC<SecurityProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.security}>
      <Container>
        <DashboardTitleBlock
          title={t("Profile.Security.titleBlock.change_password")}
          withOutBottomLine
        />
        <Row className={styles.change_password}>
          <Col lg={6}>
            <Form>
              <Form.Group controlId="formName">
                <CustomInput
                  type="text"
                  placeholder={t("Profile.Security.change_password.c_pass")}
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <CustomInput
                  type="text"
                  placeholder={t("Profile.Security.change_password.n_pass")}
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <CustomInput
                  type="text"
                  placeholder={t("Profile.Security.change_password.r_pass")}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {t("Profile.Security.change_password.button")}
              </Button>
            </Form>
          </Col>
        </Row>

        {/*<div className={styles.authentication}>*/}
        {/*  <DashboardTitleBlock*/}
        {/*    title={"Двухфакторная аутентификация"}*/}
        {/*    withOutBottomLine*/}
        {/*    info={<span className={styles.info_disable}>выключена</span>}*/}
        {/*  />*/}
        {/*  <Row>*/}
        {/*    <Col lg={8}>*/}
        {/*      <p>*/}
        {/*        Двухэтапное подтверждение обеспечивает дополнительную защиту*/}
        {/*        посредством запроса кода подтверждения при выполнении входа на*/}
        {/*        новом устройстве.*/}
        {/*      </p>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Row>*/}
        {/*    <Col>*/}
        {/*      <Button variant="primary" type="submit">*/}
        {/*        Изменить*/}
        {/*      </Button>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</div>*/}
        <div className={styles.connect_email_notifications}>
          <DashboardTitleBlock
            title={t("Profile.Security.titleBlock.email_notifications")}
            withOutBottomLine
          />
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label={t("Profile.Security.email_notifications.purchase")}
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label={t("Profile.Security.email_notifications.deposits")}
                    custom
                    id={`custom`}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label={t("Profile.Security.email_notifications.signing")}
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label={t("Profile.Security.email_notifications.end")}
                    custom
                    id={`custom`}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              {t("Profile.Security.email_notifications.button")}
            </Button>
          </Form>
        </div>
        <div className={styles.sms}>
          <DashboardTitleBlock
            title={t("Profile.Security.titleBlock.sms")}
            withOutBottomLine
          />
          <Row>
            <Col lg={6}>
              <CustomInput placeholder={t("Profile.Security.sms.telephone")} />
            </Col>
            <Col lg={6}>
              <Button variant="primary" type="submit">
                {t("Profile.Security.sms.button")}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={9}>
              <p>{t("Profile.Security.sms.text")}</p>
            </Col>
          </Row>
        </div>
        <div className={styles.verification}>
          <DashboardTitleBlock title={"Верификация данных"} withOutBottomLine />
          <Row>
            <Col lg={9}>
              <span>
                Exercitationem rerum nesciunt dicta voluptatem eligendi
                laudantium temporibus voluptatibus pariatur. Numquam veritatis
                dolorem et. Tenetur omnis qui omnis minus.
              </span>
            </Col>
          </Row>
          <Row className={styles.success}>
            <Col>
              <a href="#" className={styles.success_button}>
                {t("Profile.Security.verification.success_button")}
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Security;
