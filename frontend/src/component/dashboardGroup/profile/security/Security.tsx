import React, { RefObject } from "react";
import styles from "./security.module.scss";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../../uiKit/customInput";
import { CustomCheckBox } from "../../../uiKit/customCheckBox";

interface SecurityProps {
  verifRef?: any;
}

const Security: React.FC<SecurityProps> = () => {
  return (
    <div className={styles.security}>
      <Container>
        <DashboardTitleBlock
          title={"Изменение пароля от учётнной записи"}
          withOutBottomLine
        />
        <Row className={styles.change_password}>
          <Col lg={6}>
            <Form>
              <Form.Group controlId="formName">
                <CustomInput type="text" placeholder="Текущий пароль" />
              </Form.Group>
              <Form.Group controlId="formName">
                <CustomInput type="text" placeholder="Новый пароль" />
              </Form.Group>
              <Form.Group controlId="formName">
                <CustomInput type="text" placeholder="Повторить пароль" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Изменить
              </Button>
            </Form>
          </Col>
        </Row>

        <div className={styles.authentication}>
          <DashboardTitleBlock
            title={"Двухфакторная аутентификация"}
            withOutBottomLine
            info={<span className={styles.info_disable}>выключена</span>}
          />
          <Row>
            <Col lg={8}>
              <p>
                Двухэтапное подтверждение обеспечивает дополнительную защиту
                посредством запроса кода подтверждения при выполнении входа на
                новом устройстве.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Изменить
              </Button>
            </Col>
          </Row>
        </div>
        <div className={styles.connect_email_notifications}>
          <DashboardTitleBlock
            title={"Подключить Email уведомления"}
            withOutBottomLine
          />
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=" О вашей покупке инвестиционного пакета"
                    custom
                    id={`custom`}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Form>
        </div>
        <div className={styles.sms}>
          <DashboardTitleBlock
            title={"Подключить СМС-уведомления"}
            withOutBottomLine
          />
          <Row>
            <Col lg={6}>
              <CustomInput placeholder={"Ваш телефон"} />
            </Col>
            <Col lg={6}>
              <Button variant="primary" type="submit">
                Получить код
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={9}>
              <p>
                СМС-уведомления — это дополнительное средство защиты ваших
                средств. Данные СМС-уведомления будут запрашиваться при выводах
                и переводах средств с вашего аккаунта, а также для
                предоставления информации.
              </p>
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
                Верифицированы
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Security;
