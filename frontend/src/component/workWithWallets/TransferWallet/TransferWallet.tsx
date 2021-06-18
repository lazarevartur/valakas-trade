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
import { useForm } from "react-hook-form";
import { CustomInput } from "../../uiKit/customInput";

interface TransferWalletProps {}

const TransferWallet: React.FC<TransferWalletProps> = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <Form>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.modal_title}>
                Внутренние переводы
              </Modal.Title>
            </Modal.Header>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <Form.Group controlId="withdrawal">
              <CustomInput
                type="number"
                placeholder="Укажите сумму"
                name="amount"
                value={watch("amount")}
                reff={register}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Счет списания</Form.Label>
              <Form.Control as="select">
                <option>Бонусный счет</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} className={styles.button_block}>
            <Button>Сделать перевод</Button>
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

TransferWallet.defaultProps = {};

export default TransferWallet;
