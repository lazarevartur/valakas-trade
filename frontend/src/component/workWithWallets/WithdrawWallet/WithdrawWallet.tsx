import React from "react";
import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import styles from "../ReplenishmentWallet/ReplenishmentWallet.module.scss";
import { CustomInput } from "../../uiKit/customInput";
import { useForm } from "react-hook-form";

interface WithdrawWalletProps {}

const WithdrawWallet: React.FC<WithdrawWalletProps> = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <Form>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                Вывести средства
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Тип вывода</Form.Label>
              <Form.Control as="select">
                <option>Bitcoin</option>
                <option>Карта</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className={styles.wallets}>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="number"
                placeholder="Сумма вывода"
                name="withdrawal"
                value={watch("withdrawal")}
                reff={register({ pattern: /[0-9]/ })}
              />
            </Form.Group>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="text"
                placeholder="Ваш кошелек"
                name="wallet"
                value={watch("wallet")}
                reff={register}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button>Вывод</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <p>
              Вывод средств доступен в любое время, но не чаще чем 10 раз в
              месяц. Обработка заявки занимает до 48 часов после её создания.
              Минимальная сумма вывода 10.
            </p>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

WithdrawWallet.defaultProps = {};

export default WithdrawWallet;
